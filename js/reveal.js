/* "Lando effect": a liquid blob follows the cursor/finger over the portrait
   and reveals a halftone version underneath. */
(function(){
  var box=document.getElementById('heroPortrait'),hero=document.querySelector('.hero');if(!box||!hero)return;
  var NS='http://www.w3.org/2000/svg',W=838,H=1201,N=16;
  var svg=document.createElementNS(NS,'svg');svg.setAttribute('class','hp-reveal');svg.setAttribute('viewBox','0 0 '+W+' '+H);
  svg.setAttribute('preserveAspectRatio','xMidYMax meet');svg.setAttribute('aria-hidden','true');
  svg.innerHTML='<defs><filter id="hpGoo" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="16"/><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -12"/></filter>'+
    '<mask id="hpMask" maskUnits="userSpaceOnUse" x="0" y="0" width="'+W+'" height="'+H+'"><g filter="url(#hpGoo)" fill="#fff" id="hpBlobs"></g></mask></defs>'+
    '<g mask="url(#hpMask)"><rect width="'+W+'" height="'+H+'" style="fill:var(--bg)"/><image href="img/hoodie-halftone.webp" width="'+W+'" height="'+H+'"/></g>';
  box.appendChild(svg);
  var g=svg.querySelector('#hpBlobs'),cs=[];
  for(var i=0;i<N;i++){var c=document.createElementNS(NS,'circle');c.setAttribute('r','0');g.appendChild(c);cs.push({el:c,x:0,y:0,r:0})}
  var tx=-999,ty=-999,hx=-999,hy=-999,act=0,last=0,auto=null,raf=0;
  function toSvg(cx,cy){var m=svg.getScreenCTM();if(!m)return null;var p=svg.createSVGPoint();p.x=cx;p.y=cy;return p.matrixTransform(m.inverse())}
  function point(cx,cy){var p=toSvg(cx,cy);if(!p)return;if(hx<-900){hx=p.x;hy=p.y}tx=p.x;ty=p.y;act=1;last=performance.now();auto=null;run()}
  hero.addEventListener('pointermove',function(e){point(e.clientX,e.clientY)},{passive:true});
  hero.addEventListener('pointerdown',function(e){point(e.clientX,e.clientY)},{passive:true});
  hero.addEventListener('pointerleave',function(){last=0});
  function tick(now){
    raf=0;
    if(auto){var t=(now-auto.t0)/2600;if(t>=1){auto=null;last=0}else{tx=W*(.3+.42*t);ty=H*(.36+.1*Math.sin(t*Math.PI*2));act=1;last=now}}
    var idle=now-last>900;act+=((idle?0:1)-act)*.08;
    hx+=(tx-hx)*.22;hy+=(ty-hy)*.22;
    for(var i=N-1;i>0;i--){cs[i].x=cs[i-1].x;cs[i].y=cs[i-1].y}
    cs[0].x=hx;cs[0].y=hy;
    var base=Math.min(W,H)*.16;
    cs.forEach(function(c,i){var r=Math.max(0,base*(1-i/N)*act*(1+.06*Math.sin(now/180+i)));c.el.setAttribute('cx',c.x.toFixed(1));c.el.setAttribute('cy',c.y.toFixed(1));c.el.setAttribute('r',r.toFixed(1))});
    if(act>.01||auto)run();
  }
  function run(){if(!raf)raf=requestAnimationFrame(tick)}
  if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){
    setTimeout(function(){if(act<.01){hx=W*.3;hy=H*.36;auto={t0:performance.now()};run()}},2600);
  }
})();
