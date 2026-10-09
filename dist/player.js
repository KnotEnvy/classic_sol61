(() => {
  'use strict';
  const params = new URLSearchParams(location.search);
  const game = ARCADE_GAMES.find(item => item.id === params.get('game'));
  const token = Number(params.get('token'));
  function notify(type, more={}) { parent.postMessage({type,token,...more},location.origin); }
  let failed = false;
  function fail() {failed=true;document.getElementById('error').style.display='block';notify('arcade-error');}
  if (!game) {fail();return;}
  document.title = game.name + ' original arcade cabinet';
  window.EJS_player = '#game';
  window.EJS_core = game.core || 'fbneo';
  window.EJS_gameUrl = 'roms/' + game.rom;
  // Shared parent ROMs are already packaged unchanged inside each clone ZIP.
  window.EJS_gameName = 'classic_sol61_' + game.id;
  window.EJS_pathtodata = 'emulator/';
  const sampledGames = {invaders:'invaders',galaga:'galaga',dkong:'dkong',qbert:'qbert'};
  if (sampledGames[game.id]) window.EJS_externalFiles = {
    [`/system/fbneo/samples/${sampledGames[game.id]}.zip`]: `samples/${sampledGames[game.id]}.zip`
  };
  if(['neogeo','pgm'].includes(game.bios)) window.EJS_externalFiles = {
    ...window.EJS_externalFiles,
    [`/system/fbneo/${game.bios}.zip`]:`roms/${game.bios}.zip`
  };
  if(game.nvramSeed) window.EJS_externalFiles = {
    ...window.EJS_externalFiles,
    [`/system/arcade-defaults/${game.id}.bin`]:game.nvramSeed.file
  };
  window.EJS_color = '#f4d34d';
  window.EJS_backgroundColor = '#000000';
  window.EJS_startOnLoaded = true;
  window.EJS_threads = false;
  window.EJS_noAutoFocus = false;
  window.EJS_volume = .65;
  window.EJS_disableAutoLang = false;
  window.EJS_Buttons = {playPause:true,restart:true,mute:true,volume:true,settings:true,fullscreen:true,gamepad:true,saveState:false,loadState:false,saveSavFiles:false,loadSavFiles:false,quickSave:false,quickLoad:false,screenshot:true,screenRecord:false,cheat:false,cacheManager:false,exitEmulation:false};
  // Libretro's arcade inputs: B = button 1, Select = coin, Start = 1P.
  const profile = cabinetProfile(game);
  window.EJS_defaultControls = profile.controls;
  window.EJS_defaultOptions = {'shader':'disabled','vsync':'enabled','fps':'disabled',...(game.options||{}),...(game.core==='mame2003_plus'?{'mame2003-plus_skip_disclaimer':'enabled','mame2003-plus_skip_warnings':'enabled'}:{})};
  window.EJS_ready = () => {
    EJS_emulator.on('saveDatabaseLoaded',FS => {
      const path='/home/web_user/.config/retroarch/retroarch.cfg';
      const config=FS.readFile(path,{encoding:'utf8'});
      FS.writeFile(path,config+'\nsystem_directory = "/system"\n');
      if(game.nvramSeed){
        const target=game.nvramSeed.target;
        if(!target.startsWith('/data/saves/'))throw new Error('Invalid cabinet default path');
        // IDBFS has already restored this player's saves. Seed new cabinets only.
        if(!FS.analyzePath(target).exists){
          const bytes=FS.readFile(`/system/arcade-defaults/${game.id}.bin`);
          if(!bytes.length)throw new Error('Empty cabinet default EEPROM');
          FS.mkdirTree(target.slice(0,target.lastIndexOf('/')));
          FS.writeFile(target,bytes);
          console.info(`Classic Arcade: original operator defaults initialized for ${game.id}.`);
        }
      }
      const sampleName=sampledGames[game.id];
      if(sampleName){
        const archive=FS.readFile(`/system/fbneo/samples/${sampleName}.zip`);
        if(!archive.length)throw new Error('Empty arcade sound sample archive');
        console.info(`Classic Arcade: ${sampleName} sound samples mounted (${archive.length} bytes).`);
      }
    });
  };
  window.EJS_onGameStart = () => {
    const manager=EJS_emulator.gameManager;
    const firstWilliamsBoot=game.id==='robotron'&&!manager.FS.analyzePath(manager.getSaveFilePath()).exists;
    const setName=game.rom.replace(/\.zip$/,'');
    const existingNvram=[manager.getSaveFilePath(),`/data/saves/FinalBurn Neo/fbneo/${setName}.fs`].some(path=>path&&manager.FS.analyzePath(path).exists);
    const firstBoardBoot=Number.isInteger(game.firstBootButton)&&!existingNvram;
    const bootDelay=game.bootDelay || (['pacman','mspacman','galaga'].includes(game.id)?8000:2000);
    // On an uninitialized Williams board, Advance acknowledges factory defaults.
    // The core maps a held Start to Advance. Existing NVRAM is never overwritten.
    setTimeout(()=>{
      if(failed)return;
      if(firstWilliamsBoot){
        manager.simulateInput(0,3,1);
        setTimeout(()=>{manager.simulateInput(0,3,0);manager.saveSaveFiles();setTimeout(()=>{if(!failed)notify('arcade-ready');},4000);},2000);
      }else if(firstBoardBoot){
        manager.simulateInput(0,game.firstBootButton,1);
        setTimeout(()=>{manager.simulateInput(0,game.firstBootButton,0);manager.saveSaveFiles();setTimeout(()=>{if(!failed)notify('arcade-ready');},game.firstBootWait||4000);},180);
      }else notify('arcade-ready');
    },bootDelay);
    EJS_emulator.on('pause',()=>notify('arcade-paused',{paused:true}));
    EJS_emulator.on('resume',()=>notify('arcade-paused',{paused:false}));
  };
  const inputs = profile.inputs;
  const pressed = new Map();
  const releaseTimers = new Map();
  let pulseQueue = Promise.resolve();
  function pulse(player,input) {
    pulseQueue = pulseQueue.then(() => new Promise(resolve => {
      EJS_emulator.gameManager.simulateInput(player,input,input>=16&&input<=23?32767:1);
      setTimeout(() => {EJS_emulator.gameManager.simulateInput(player,input,0);setTimeout(resolve,500);},180);
    }));
  }
  function release(key, player, input) {
    const remaining = Math.max(0, 40 - (performance.now() - (pressed.get(key) || 0)));
    releaseTimers.set(key,setTimeout(() => { EJS_emulator.gameManager.simulateInput(player,input,0);pressed.delete(key);releaseTimers.delete(key); },remaining));
  }
  function sendInput(name,down) {
    const [player,input]=inputs[name];
    if(down===undefined){pulse(player,input);return;}
    if(down!==false){clearTimeout(releaseTimers.get(name));pressed.set(name,performance.now());EJS_emulator.gameManager.simulateInput(player,input,input>=16&&input<=23?32767:1);}
    if(down!==true)release(name,player,input);
  }
  window.addEventListener('message',event => {
    const data=event.data;
    if(event.source!==parent||event.origin!==location.origin||!data||data.token!==token||data.type!=='arcade-input'||!inputs[data.input]||!window.EJS_emulator?.gameManager) return;
    sendInput(data.input,data.down);
  });
  // Keep a brief keyboard tap alive for two polling frames, including when
  // the iframe owns focus. Respect the emulator's configured key bindings.
  const numpadKeyCodes={Numpad0:96,Numpad1:97,Numpad2:98,Numpad3:99,Numpad4:100,Numpad5:101,Numpad6:102,Numpad7:103,Numpad8:104,Numpad9:105,NumpadMultiply:106,NumpadAdd:107,NumpadSubtract:109,NumpadDecimal:110,NumpadDivide:111};
  for(const kind of ['keydown','keyup'])window.addEventListener(kind,event => {
    const emulator=window.EJS_emulator;
    if(!emulator?.started||!emulator.gameManager||emulator.isPopupOpen()||emulator.settingsMenu.style.display!=='none')return;
    // Num Lock changes keyCode to navigation keys; code still identifies the
    // physical keypad key. Match its normal code against current user bindings.
    const keyCode=numpadKeyCodes[event.code]??event.keyCode;
    const name=!event.code.startsWith('Numpad')&&(game.id==='gauntlet'||Number.isInteger(game.startButton))&&new RegExp('^[1-'+(game.players||2)+']$').test(event.key)?'start'+event.key:Object.keys(inputs).find(name=>{
      const [player,input]=inputs[name];return emulator.controls[player]?.[input]?.value===keyCode;
    });
    if(!name){
      // An unbound keypad navigation code must not reach the emulator's
      // keyCode handler and accidentally activate another player's arrows.
      if(numpadKeyCodes[event.code]!==undefined){event.preventDefault();event.stopImmediatePropagation();}
      return;
    }
    event.preventDefault();event.stopImmediatePropagation();
    if(!event.repeat)sendInput(name,kind==='keydown');
  },true);
  window.addEventListener('blur',()=>{for(const name of pressed.keys()){const [player,input]=inputs[name];release(name,player,input);}});
  const loader=document.createElement('script');loader.src='emulator/loader.js';loader.onerror=fail;document.body.appendChild(loader);
  window.addEventListener('error',fail);
  window.addEventListener('unhandledrejection',fail);
})();
