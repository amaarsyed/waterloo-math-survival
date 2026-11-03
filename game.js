let round=0,choices=[],pick='';
const game=document.querySelector('#game');
function render(){
 if(round===questions.length){
 const score=calculateSurvival(choices);
 game.innerHTML=`<section class="survival-result" aria-live="polite"><h1>Will you<br><em>survive math?</em></h1><div class="survival-percentage">${score}<span>%</span></div><p>Study-habit game score · not a graduation prediction</p></section>`;return;
 }
 const q=questions[round];
 game.innerHTML=`<section class="projector"><div class="roundmeta"><p class="eyebrow">WATERLOO MATH SURVIVAL TEST</p><span class="round-number">${String(round+1).padStart(2,'0')} <span>/ 10</span></span></div><h1 class="big-question" tabindex="-1">Would you <em>rather?</em></h1><p class="scenario">${q.title}</p><div class="options">${['A','B'].map((v,i)=>`<button class="option ${i?'pink':'lime'} ${pick===v?'selected':''} ${pick&&pick!==v?'unchosen':''}" data-pick="${v}" aria-pressed="${pick===v}"><span class="letter">${v}</span><strong>${i?q.b:q.a}</strong><span class="option-detail">${i?q.bs:q.as}</span><small>${pick===v?'✓ THE ROOM HAS SPOKEN':'THIS IS MY CHOICE →'}</small></button>`).join('')}<span class="or-badge" aria-hidden="true">OR</span></div><div class="round-controls"><button class="quiet" data-action="back" ${round===0?'disabled':''}>← Back</button><span class="host-hint" aria-live="polite">${pick?'Locked in. Bold choice.':'Pick a side. Host clicks the room’s choice.'}</span><button class="primary" data-action="next" ${!pick?'disabled':''}>${round===9?'Reveal our fate':'Next question'} →</button></div><div class="progress" aria-label="Question ${round+1} of 10">${questions.map((_,i)=>`<i style="background:${i<=round?'#dbff73':'#ffffff20'}"></i>`).join('')}</div></section>`;
}
function choose(v){if(round>=10)return;pick=v;choices[round]=v;render();}
function advance(){if(!pick||round>=10)return;round++;pick=choices[round]||'';render();document.querySelector('.big-question')?.focus();window.scrollTo(0,0);}
function restart(){round=0;choices=[];pick='';render();}
game.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.pick)choose(b.dataset.pick);if(b.dataset.action==='next')advance();if(b.dataset.action==='back'&&round>0){round--;pick=choices[round]||'';render()}if(b.dataset.action==='restart')restart()});
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.repeat)return;if(['a','b'].includes(e.key.toLowerCase())){e.preventDefault();choose(e.key.toUpperCase())}if(e.key==='Enter'&&pick&&round<10){e.preventDefault();advance()}});
document.querySelector('#home').onclick=()=>{if(choices.length&&round<10&&!confirm('Restart the game and clear the room’s choices?'))return;restart()};
document.querySelector('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen()}catch{document.querySelector('#toast').textContent='Use your browser’s fullscreen option.';setTimeout(()=>document.querySelector('#toast').textContent='',3000)}};
render();
