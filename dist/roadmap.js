(() => {
  'use strict';
  const data=window.ARCADE_ROADMAP;
  if(!data) return;
  const rows=document.querySelector('#game-rows');
  const search=document.querySelector('#search');
  const genre=document.querySelector('#genre');
  const batch=document.querySelector('#batch');
  let era='all';
  const el=(tag,text,className)=>{
    const node=document.createElement(tag);
    if(text!==undefined) node.textContent=text;
    if(className) node.className=className;
    return node;
  };
  const normalize=value=>String(value).toLocaleLowerCase().replace(/[’']/g,'');
  const genres=[...new Set(data.games.map(g=>g.genre))].sort();
  for(const value of genres){const option=el('option',value);option.value=value;genre.append(option);}
  const gameRows=data.games.map(game=>{
    const row=el('tr');
    const titleCell=el('td');
    const name=el('span',undefined,'game-name');
    if((game.installed||game.batch===0)){
      const link=el('a',game.name);
      link.href=`./#${encodeURIComponent(game.installedId||game.id)}`;
      link.setAttribute('aria-label',`Open ${game.name} in the playable arcade`);
      name.append(link);
    }else name.textContent=game.name;
    const details=el('details',undefined,'game-details');
    details.append(el('summary','Edition & controls'));
    const edition=el('p',`Candidate set: ${game.id} · ${game.edition}`);
    if((game.installed||game.batch===0)) edition.textContent=`Installed cabinet: ${game.installedId||game.id}. Its pinned asset manifest defines the installed revision; the upstream metadata below is a research reference.`;
    details.append(edition,el('p',`Controls: ${game.controls}`),el('p',game.note));
    const source=el('a','Official driver source ↗');
    source.href=game.driverSource;source.target='_blank';source.rel='noopener noreferrer';
    details.append(source);
    titleCell.append(name,details);
    const status=el('td');
    status.append(el('span',(game.installed||game.batch===0)?'Player testing':game.benchmark?'Browser benchmark':'Planned',`status-tag${(game.installed||game.batch===0)?' playable':''}`));
    if(!(game.installed||game.batch===0)) status.append(el('span',`Batch ${game.batch} · browser test required`,'batch-tag'));
    row.append(titleCell,el('td',String(game.year)),el('td',game.genre),status);
    rows.append(row);
    return {game,row,searchText:normalize(`${game.name} ${game.year} ${game.genre} ${game.era} ${game.id}`)};
  });
  function render(){
    const query=normalize(search.value.trim());
    let shown=0;
    for(const item of gameRows){
      const visible=(era==='all'||item.game.era===era)&&(genre.value==='all'||item.game.genre===genre.value)&&(batch.value==='all'||(batch.value==='installed'?(item.game.installed||item.game.batch===0):String(item.game.batch)===batch.value))&&item.searchText.includes(query);
      item.row.hidden=!visible;
      if(visible) shown++;
    }
    document.querySelector('#result-count').textContent=`${String(shown).padStart(2,'0')} of ${data.games.length} games shown`;
    document.querySelector('#empty').hidden=shown!==0;
    for(const button of document.querySelectorAll('[data-era]')) button.setAttribute('aria-pressed',String(button.dataset.era===era));
  }
  for(const button of document.querySelectorAll('[data-era]')) button.addEventListener('click',()=>{era=button.dataset.era;render();});
  search.addEventListener('input',render);genre.addEventListener('change',render);batch.addEventListener('change',render);
  document.querySelector('#reset').addEventListener('click',()=>{era='all';search.value='';genre.value='all';batch.value='all';render();});
  const phases=document.querySelector('#phases');
  for(const phase of data.phases.filter(p=>p.batch>0)){
    const item=el('li');
    item.append(el('span',`BATCH 0${phase.batch}`,'phase-label'),el('h3',phase.name),el('p',phase.detail),el('span',`+${phase.count} games / ${phase.total} total target`,'phase-total'));
    phases.append(item);
  }
  document.querySelector('#research-games').textContent=data.researchOnly.join(' · ');
  document.querySelector('#reserves').textContent=data.browserReserves.join(' · ');
  document.querySelector('#dat-source').href=data.evidence.source;
  render();
})();
