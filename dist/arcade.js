(() => {
  'use strict';
  const games = window.ARCADE_GAMES;
  const $ = id => document.getElementById(id);
  let current, powered = false, ready = false, launchToken = 0;
  let display = 'pixel';
  function fitPixels() {
    if(!current)return;
    const fullscreen=!!document.fullscreenElement;
    const availableHeight=fullscreen ? innerHeight-72 : Math.min(900,Math.max(current.size[1]*2,innerHeight*.65));
    const scale=Math.max(.25,Math.min(1,($('theater').clientWidth-20)/current.size[0]),Math.floor(Math.min(($('theater').clientWidth-20)/current.size[0],availableHeight/current.size[1])));
    const width=current.size[0]*scale,height=current.size[1]*scale;
    $('theater').style.height=(height+(fullscreen?0:28))+'px';
    $('game-frame').style.width=width+'px';$('game-frame').style.height=height+'px';
  }
  try { display = localStorage.getItem('classic_sol61_display') || 'pixel'; } catch {}
  const list = $('game-list');
  for (const [index,game] of games.entries()) {
    const button = document.createElement('button');
    button.type = 'button';button.className = 'game-row';button.dataset.game = game.id;
    button.style.setProperty('--token-color', game.color);
    button.setAttribute('aria-label', `${game.name}, ${game.year}`);
    button.innerHTML = `<span class="game-token" aria-hidden="true">${game.token}</span><span><span class="game-row-name">${game.name}</span><span class="game-row-year">${game.year} · ${String(index+1).padStart(2,'0')}</span></span><span class="row-play" aria-hidden="true">●</span>`;
    button.addEventListener('click', () => { if (current.id !== game.id) location.hash = game.id; });
    list.appendChild(button);
  }
  function setDisplay(value) {
    display = value === 'crt' ? 'crt' : 'pixel';
    $('theater').classList.toggle('crt', display === 'crt');
    document.querySelectorAll('[data-display]').forEach(button => {
      const selected = button.dataset.display === display;
      button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));
    });
    try {localStorage.setItem('classic_sol61_display',display);} catch {}
  }
  document.querySelectorAll('[data-display]').forEach(button => button.addEventListener('click', () => setDisplay(button.dataset.display)));
  function select(id) {
    current = games.find(game => game.id === id) || games[0];
    powered = false;ready = false;launchToken++;
    document.querySelectorAll('[data-cabinet-input]').forEach(button => button.disabled = true);
    const frame = $('game-frame');frame.hidden = true;frame.removeAttribute('src');
    document.documentElement.style.setProperty('--game-color',current.color);
    $('game-title').textContent = current.name;
    $('game-maker').textContent = `${current.maker} · ${current.year}`;
    $('cabinet-number').textContent = `CABINET ${String(games.indexOf(current)+1).padStart(2,'0')}`;
    $('game-resolution').textContent = current.size.join(' × ');
    $('game-orientation').textContent = current.size[0]>current.size[1]?'HORIZONTAL':'VERTICAL';
    $('boot-title').textContent = current.name.toUpperCase();
    document.querySelector('.boot-kicker').textContent = `ORIGINAL ARCADE · ${current.year}`;
    $('boot-screen').hidden = false;$('boot-button').disabled = false;
    $('boot-button').textContent = 'Power on cabinet';
    $('state-label').textContent = 'READY TO BOOT';
    $('focus-note').textContent = 'Power on the cabinet, then insert a coin and press start.';
    $('game-objective').textContent = current.objective;
    $('detail-year').textContent = current.year;
    $('detail-developer').textContent = current.developer;
    $('detail-version').textContent = current.version;
    $('game-notes').textContent = current.notes;
    const actions=current.actions || (current.action?[current.action]:[]);
    $('game-controls').innerHTML = `<div class="control-diagram"><div class="arrow-pad" aria-label="Arrow keys"><kbd>↑</kbd><kbd>←</kbd><kbd>↓</kbd><kbd>→</kbd></div><span class="control-description">${current.move}</span></div>`+
      (current.id==='robotron'?'<div class="action-control"><kbd>I J K L</kbd><span>Fire up / left / down / right</span></div>':actions.map((action,i)=>`<div class="action-control"><kbd>${['Ctrl','Z','X','C','V','B'][i]}</kbd><span>${action}</span></div>`).join(''))+
      (current.mouse?'<div class="action-control"><kbd>Mouse</kbd><span>Trackball movement</span></div>':'')+
      (current.id==='qbert'?'<p class="multiplayer-note">↑ ↗ · → ↘ · ↓ ↙ · ← ↖</p>':'')+
      ((current.players||2)>1?`<details class="multiplayer-controls"><summary>${current.players||2} player controls</summary><p>P2: I/J/K/L move; ${['A','S','D',(current.players||2)>2?'Q':'F','G','H'].slice(0,actions.length).join('/')} actions; 6 coin, 2 start.</p>${current.players>=3?`<p>P3: T/F/G/H move; ${['R','Y','U','O'].slice(0,actions.length).join('/')} actions; 7 coin, 3 start.</p>`:''}${current.players===4?`<p>P4: numpad 8/4/2/6 move; ${['0','decimal','+','−'].slice(0,actions.length).join('/')} actions on numpad; 8 coin, 4 start. Num Lock on or off.</p>`:''}<p>Gamepads can be assigned to each slot in the cabinet toolbar.</p></details>`:'');
    $('start-steps').innerHTML=Array.from({length:current.players||2},(_,p)=>`<button data-cabinet-input="${p?'coin'+(p+1):'coin'}" disabled><kbd>${5+p}</kbd><span>${p?'Player '+(p+1)+' coin':'Insert coin'}</span></button><button data-cabinet-input="start${p+1}" disabled><kbd>${p+1}</kbd><span>${current.coop?'Player '+(p+1)+' start':(p+1)+' player start'}</span></button>`).join('');

    frame.title = `${current.name} original arcade game`;
    document.querySelectorAll('.game-row').forEach(button => {
      const selected = button.dataset.game === current.id;
      button.classList.toggle('active',selected);button.setAttribute('aria-current', selected ? 'true' : 'false');
      button.querySelector('.row-play').hidden = !selected;
    });
    document.title = `${current.name} — Classic Arcade`;
    fitPixels();
  }
  function boot() {
    if (powered) return;
    powered = true;ready = false;
    document.querySelectorAll('[data-cabinet-input]').forEach(button => button.disabled = true);
    $('boot-button').disabled = true;$('state-label').textContent = 'BOOTING CABINET';
    $('focus-note').textContent = 'The original cabinet is starting. This may take a few seconds.';
    const frame = $('game-frame');frame.hidden = false;
    frame.src = `player.html?game=${current.id}&token=${launchToken}`;
    $('boot-screen').hidden = true;
  }
  $('boot-button').addEventListener('click',boot);
  $('start-steps').addEventListener('click',event=>{
    const button=event.target.closest('[data-cabinet-input]');
    if(ready&&button&&!button.disabled)$('game-frame').contentWindow.postMessage({type:'arcade-input',input:button.dataset.cabinetInput,token:launchToken},location.origin);
  });
  $('game-search').addEventListener('input',event=>{
    const query=event.target.value.toLowerCase().trim();
    document.querySelectorAll('.game-row').forEach(button=>{button.hidden=!button.textContent.toLowerCase().includes(query);});
  });
  const held = new Set();
  for (const kind of ['keydown','keyup']) window.addEventListener(kind,event => {
    const keys = cabinetProfile(current).keys;
    const key = event.code.startsWith('Numpad')?event.code:(event.key.length===1?event.key.toLowerCase():event.key);
    if (!ready || !keys[key] || document.querySelector('dialog[open]') || event.repeat) return;
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    event.preventDefault();
    if(kind==='keydown')held.add(keys[key]);else held.delete(keys[key]);
    $('game-frame').contentWindow.postMessage({type:'arcade-input',input:keys[key],down:kind==='keydown',token:launchToken},location.origin);
  });
  window.addEventListener('blur',() => {
    for(const input of held)$('game-frame').contentWindow.postMessage({type:'arcade-input',input,down:false,token:launchToken},location.origin);
    held.clear();
  });
  $('reset-button').addEventListener('click', () => { if (!powered) return; launchToken++;powered=false;boot(); });
  $('fullscreen-button').addEventListener('click', async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else await $('cabinet').requestFullscreen(); } catch { $('focus-note').textContent='Fullscreen is unavailable in this browser. Use the cabinet’s fullscreen control instead.'; }
  });
  document.addEventListener('fullscreenchange',() => {
    $('fullscreen-button').setAttribute('aria-label',document.fullscreenElement?'Exit fullscreen':'Enter fullscreen');
    $('fullscreen-close').hidden=!document.fullscreenElement;
    fitPixels();
  });
  $('fullscreen-close').addEventListener('click',() => document.exitFullscreen());
  window.addEventListener('resize',fitPixels);
  window.addEventListener('message', event => {
    const frame = $('game-frame');
    if (event.source !== frame.contentWindow || event.origin !== location.origin || !event.data || event.data.token !== launchToken) return;
    if (event.data.type === 'arcade-ready') {
      ready = true;$('state-label').textContent = 'CABINET ON';
      document.querySelectorAll('[data-cabinet-input]').forEach(button => button.disabled = false);
      $('focus-note').textContent = current.creditsToStart>1?`Click the game screen. Press 5 ${current.creditsToStart} times for credits, then 1 to start.`:'Click the game screen. Press 5 for a coin, then 1 to start.';
    } else if (event.data.type === 'arcade-error') {
      $('state-label').textContent = 'BOOT ERROR';
      ready = false;document.querySelectorAll('[data-cabinet-input]').forEach(button => button.disabled = true);
      $('focus-note').textContent = 'The cabinet could not start. Press restart to try again.';
    } else if (event.data.type === 'arcade-paused') {
      $('state-label').textContent = event.data.paused ? 'PAUSED' : 'CABINET ON';
    }
  });
  for (const [button,dialog] of [['help-open','help-dialog'],['about-open','about-dialog']]) {
    $(button).addEventListener('click',() => $(dialog).showModal());
    $(dialog).querySelectorAll('.dialog-close,.dialog-done').forEach(close => close.addEventListener('click',() => $(dialog).close()));
    $(dialog).addEventListener('click',event => { if (event.target === $(dialog)) {const r = $(dialog).getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)$(dialog).close();} });
  }
  window.addEventListener('hashchange',() => select(location.hash.slice(1)));
  select(location.hash.slice(1));setDisplay(display);
  // Register the same cabinet selection and power action for compatible browsers.
  if (document.modelContext?.registerTool) {
    document.modelContext.registerTool({name:'select_arcade_game',description:'Select one of the original arcade cabinets; the current game is stopped.',inputSchema:{type:'object',properties:{game:{type:'string',enum:games.map(g=>g.id)}},required:['game'],additionalProperties:false},execute(input){if(!input||!games.some(g=>g.id===input.game))throw new Error('Unknown arcade game');history.replaceState(null,'','#'+input.game);select(input.game);return {game:current.id,powered:false};}});
    document.modelContext.registerTool({name:'power_on_arcade_cabinet',description:'Power on the currently selected original arcade cabinet. The game boots to its original attract screen.',inputSchema:{type:'object',properties:{},additionalProperties:false},execute(){boot();return {game:current.id,powered:true};}});
  }
})();
