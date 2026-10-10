/* Shared keyboard profile used by both the cabinet and its isolated player. */
window.cabinetProfile = game => {
  const inputs={}, keys={}, controls={0:{},1:{},2:{},3:{}};
  const defaults=[['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Control','z','x','c','v','b'],['i','k','j','l','a','s','d','f','g','h'],['t','g','f','h','r','y','u','o'],['Numpad8','Numpad2','Numpad4','Numpad6','Numpad0','NumpadDecimal','NumpadAdd','NumpadSubtract']];
  const ejsNames={'ArrowUp':'up arrow','ArrowDown':'down arrow','ArrowLeft':'left arrow','ArrowRight':'right arrow',Control:'ctrl',Numpad8:'numpad 8',Numpad2:'numpad 2',Numpad4:'numpad 4',Numpad6:'numpad 6',Numpad0:'numpad 0',NumpadDecimal:'decimal point',NumpadAdd:'add',NumpadSubtract:'subtract'};
  const buttonIds=game.actionInputs||[0,8,1,9,10,11]; const pads=['BUTTON_1','BUTTON_2','BUTTON_3','BUTTON_4','LEFT_TOP_SHOULDER','RIGHT_TOP_SHOULDER'];
  // Four-player boards need a fourth P2 action that does not share P3 movement.
  if((game.players||2)>2)defaults[1][7]='q';
  function bind(name,player,input,key,pad){inputs[name]=[player,input];keys[key]=name;controls[player][input]={value:ejsNames[key]||key,value2:pad};}
  for(let p=0;p<(game.players||2);p++){
    bind(p?'coin'+(p+1):'coin',p,2,String(5+p),'SELECT');
    bind('start'+(p+1),p,3,String(1+p),'START');
    const prefix=p?'p'+(p+1)+'_':'';
    if(p>0&&game.sharedControls)continue;
    for(const [i,n] of ['up','down','left','right'].entries())bind(prefix+n,p,i+4,defaults[p][i],['DPAD_UP','DPAD_DOWN','DPAD_LEFT','DPAD_RIGHT'][i]);
    for(let i=0;i<(game.actions?.length || (game.action?1:0));i++)if(defaults[p][i+4])bind(prefix+(i?'action'+(i+1):'action'),p,buttonIds[i],defaults[p][i+4],pads[i]);
  }
  // Gauntlet's original Magic button doubles as the character's Start button.
  const startButton=game.id==='gauntlet'?8:game.startButton;
  if(Number.isInteger(startButton))for(let p=0;p<(game.players||2);p++)inputs['start'+(p+1)]=[p,startButton];
  if(Array.isArray(game.startInputs))game.startInputs.forEach((target,p)=>{inputs['start'+(p+1)]=target;});
  if(game.id==='qix'){ejsNames.F10='f10';bind('factoryAdvance',0,13,'F10','UNBOUND');}
  if(game.id==='defender'&&game.core==='mame2003_plus'){
    bind('action2',0,1,'z','BUTTON_3');
    bind('action3',0,9,'x','BUTTON_4');
    bind('action4',0,8,'c','BUTTON_2');
  }
  if(['outrun','shangon'].includes(game.id)){
    bind('left',0,17,'ArrowLeft','LEFT_STICK_X:-1');
    bind('right',0,16,'ArrowRight','LEFT_STICK_X:+1');
    bind('action',0,13,'Control','RIGHT_BOTTOM_SHOULDER');
    bind('action2',0,12,'z','LEFT_BOTTOM_SHOULDER');
    bind('action3',0,0,'x','BUTTON_1');
  }
  if(game.axes)for(let p=0;p<(game.sharedControls?1:(game.players||2));p++){
    const prefix=p?'p'+(p+1)+'_':'';
    delete controls[p][6];delete controls[p][7];
    bind(prefix+'left',p,17,defaults[p][2],'LEFT_STICK_X:-1');
    bind(prefix+'right',p,16,defaults[p][3],'LEFT_STICK_X:+1');
    if(game.axes==='xy'){
      delete controls[p][4];delete controls[p][5];
      bind(prefix+'up',p,19,defaults[p][0],'LEFT_STICK_Y:-1');
      bind(prefix+'down',p,18,defaults[p][1],'LEFT_STICK_Y:+1');
    }
  }
  if(game.id==='pzloop2')for(let p=0;p<2;p++){
    const prefix=p?'p'+(p+1)+'_':'';
    delete controls[p][6];delete controls[p][7];
    bind(prefix+'left',p,17,defaults[p][2],'LEFT_STICK_X:-1');
    bind(prefix+'right',p,16,defaults[p][3],'LEFT_STICK_X:+1');
  }
  if(game.id==='ssprint')for(let p=0;p<3;p++)bind(p?'p'+(p+1)+'_action':'action',p,11,defaults[p][4],'RIGHT_TOP_SHOULDER');
  if(game.id==='robotron'){
    for(const [i,n] of ['up','down','left','right'].entries()){
      delete inputs['p2_'+n];delete controls[1][i+4];
      bind('fire_'+n,0,[23,22,21,20][i],defaults[1][i],['RIGHT_STICK_Y:-1','RIGHT_STICK_Y:+1','RIGHT_STICK_X:-1','RIGHT_STICK_X:+1'][i]);
    }
  }
  return {inputs,keys,controls};
};
