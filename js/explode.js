/* Apple-style exploded view: scroll takes the moulding machine apart */
(function(){
  var sec=document.getElementById('machine');if(!sec)return;
  var parts=[].slice.call(sec.querySelectorAll('.xp')),mb=sec.querySelector('.xv-mb'),svg=sec.querySelector('.xv-svg');
  var dots=[].slice.call(sec.querySelectorAll('.xv-steps i')),k=sec.querySelector('.xv-k'),t=sec.querySelector('.xv-t');
  var STEPS=[
    ['01 · Hopper — raw material','Plastic &amp; Polymer Engineering at <b>MIT Chhatrapati Sambhajinagar</b>. Everything starts here.'],
    ['02 · Heater bands — heat','Research on <b>conductive polymer composites</b> for strain sensing. Where things get hot.'],
    ['03 · Screw — drive','Code that turns ideas into products: <b>React, TypeScript, Supabase</b>.'],
    ['04 · Nozzle — precision','Design and prepress, from app screens to <b>CMYK separations</b>.'],
    ['05 · Mould — shape','The products it forms: <b>JobFlow, Paper Build, Kapsify</b>.'],
    ['06 · Clamp — force','Leadership that holds it together: <b>Polycomm &amp; Polyconnect</b>.']
  ];
  var INTRO=[k.innerHTML,t.innerHTML],FIN=['Output','<b>Kalpesh Katare.</b> Engineered, not just assembled.'];
  var last=-9;
  function ss(a,b,x){x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
  function cap(i){
    if(i===last)return;last=i;
    var c=i<0?INTRO:i>=STEPS.length?FIN:STEPS[i];k.innerHTML=c[0];t.innerHTML=c[1];
    dots.forEach(function(d,j){d.classList.toggle('on',i>=STEPS.length||j<=i)});
    sec.classList.toggle('focus',i>=0&&i<STEPS.length);
    parts.forEach(function(p){p.classList.toggle('on',+p.dataset.i===i)});
  }
  function frame(){
    var r=sec.getBoundingClientRect(),vh=window.innerHeight,p=Math.min(1,Math.max(0,-r.top/(r.height-vh)));
    var e=ss(.06,.3,p);
    parts.forEach(function(g){g.setAttribute('transform','translate('+(+g.dataset.x*e).toFixed(1)+' '+(+g.dataset.y*e).toFixed(1)+')')});
    mb.setAttribute('transform','translate('+(-34*e).toFixed(1)+' 0)');
    svg.style.transform='scale('+(.92+.08*e).toFixed(3)+')';
    var i=p<.32?-1:Math.floor((p-.32)/.105);cap(Math.min(i,STEPS.length));
  }
  var q=false;function on(){if(!q){q=true;requestAnimationFrame(function(){q=false;frame()})}}
  window.addEventListener('scroll',on,{passive:true});window.addEventListener('resize',on);frame();
})();
