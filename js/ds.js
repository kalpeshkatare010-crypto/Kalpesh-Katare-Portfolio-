/* Kalpesh Katare — site interactions (loader, transitions, marquee, magnetic buttons, previews) */
(function(){
var D=document,H=D.documentElement,B=D.body,RM=matchMedia('(prefers-reduced-motion: reduce)').matches,
    FINE=matchMedia('(hover: hover) and (pointer: fine)').matches;
var $=function(s,c){return (c||D).querySelector(s)},$$=function(s,c){return [].slice.call((c||D).querySelectorAll(s))};
var lerp=function(a,b,t){return a+(b-a)*t},clamp=function(v,a,b){return Math.max(a,Math.min(b,v))};
var ease=function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2};
if(RM)H.classList.add('noanim');

/* ---------- smooth scroll ---------- */
var lenis=null;
if(window.Lenis&&!RM){lenis=new Lenis({duration:1.1,smoothWheel:true});(function raf(t){lenis.raf(t);requestAnimationFrame(raf)})(performance.now())}
var sy=function(){return window.scrollY||D.documentElement.scrollTop};

/* ---------- loader / page transition ---------- */
var ld=$('.ld'),pn=ld&&$('.pn',ld),wd=ld&&$('.wd',ld),cv=ld&&$('.pn path',ld),tp=ld&&$('.pn .tp path',ld);
var GREET=['Hello','नमस्ते','नमस्कार','வணக்கம்','నమస్కారం','ਸਤ ਸ੍ਰੀ ਅਕਾਲ','নমস্কার','ನಮಸ್ಕಾರ','Hallo','Hola'];
function anim(dur,fn,done){var t0=performance.now();(function f(n){var p=Math.min(1,(n-t0)/dur);fn(ease(p),p);if(p<1)requestAnimationFrame(f);else done&&done()})(t0)}
function curve(h){cv&&cv.setAttribute('d','M0 0 L100 0 L100 0 Q50 '+h.toFixed(1)+' 0 0 Z')}
function reveal(){H.classList.add('ready');observe()}
function leave(){
  if(!ld){reveal();return}
  curve(100);
  anim(900,function(e){pn.style.transform='translateY('+(-100*e)+'%)';curve(100*(1-e))},function(){ld.style.display='none'});
  setTimeout(reveal,250);
}
function say(txt){wd.innerHTML='<i></i>'+txt;wd.style.opacity=1}
if(ld){
  var first=true;try{first=!sessionStorage.getItem('kk-v');sessionStorage.setItem('kk-v','1')}catch(e){}
  if(RM){ld.style.display='none';reveal()}
  else if(first){var i=0;say(GREET[0]);setTimeout(function n(){i++;if(i<GREET.length){say(GREET[i]);setTimeout(n,i===1?260:150)}else setTimeout(leave,180)},900)}
  else{say(B.getAttribute('data-page')||'');setTimeout(leave,450)}
}else reveal();
addEventListener('pageshow',function(e){if(e.persisted&&ld){ld.style.display='none';H.classList.add('ready')}});
// outgoing transition
D.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a');if(!a||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;
  var h=a.getAttribute('href');if(!h||a.target==='_blank'||a.hasAttribute('download')||/^(#|mailto:|tel:|https?:)/.test(h)||/\.pdf$/i.test(h))return;
  if(!ld||RM)return;
  e.preventDefault();B.classList.remove('menu-open');
  ld.style.display='block';say(a.getAttribute('data-to')||a.textContent.trim().replace(/\s+\d+$/,'')||'');
  pn.style.transform='translateY(100%)';
  // curve on top while rising
  anim(800,function(e2){pn.style.transform='translateY('+(100-100*e2)+'%)';if(tp)tp.setAttribute('d','M0 100 L100 100 L100 100 Q50 '+(100*e2).toFixed(1)+' 0 100 Z')},function(){location.href=h});
});

/* ---------- header: floating menu button ---------- */
var fab=$('.fab');
function onScrollHdr(){if(fab)fab.classList.toggle('show',sy()>window.innerHeight*.15)}
$$('.mtog,.fab,.dim').forEach(function(b){b.addEventListener('click',function(){B.classList.toggle('menu-open')})});
addEventListener('keydown',function(e){if(e.key==='Escape')B.classList.remove('menu-open')});

/* ---------- reveal on scroll ---------- */
var io;
function observe(){
  var els=$$('.fade,.ln,[data-rv]');
  if(!('IntersectionObserver' in window)||RM){els.forEach(function(e){e.classList.add('in')});return}
  io=io||new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{rootMargin:'0px 0px -6% 0px',threshold:.08});
  els.forEach(function(e,k){if(e.classList.contains('ln')){var s=e.firstElementChild;if(s)s.style.transitionDelay=(+(e.getAttribute('data-d')||0))+'s'}io.observe(e)});
}

/* ---------- magnetic buttons ---------- */
if(FINE&&!RM)$$('.mag').forEach(function(m){
  var inner=m.firstElementChild;
  m.addEventListener('mousemove',function(e){var r=m.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
    m.style.transition='transform .2s';m.style.transform='translate('+x*.35+'px,'+y*.35+'px)';if(inner)inner.style.transform='translate('+x*.12+'px,'+y*.12+'px)'});
  m.addEventListener('mouseleave',function(){m.style.transition='transform .9s cubic-bezier(.16,1,.3,1)';m.style.transform='';if(inner){inner.style.transition='transform .9s cubic-bezier(.16,1,.3,1)';inner.style.transform=''}});
});

/* ---------- hover preview for work lists ---------- */
var pv=$('.pv'),pvc=$('.pvc'),pvt=$('.pvt');
if(pv&&FINE&&!RM){
  var st=$('.st',pv),mx=0,my=0,px=0,py=0,cx=0,cy=0,on=false;
  addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY});
  (function loop(){px=lerp(px,mx,.14);py=lerp(py,my,.14);cx=lerp(cx,mx,.3);cy=lerp(cy,my,.3);
    pv.style.left=px+'px';pv.style.top=py+'px';pvc.style.left=cx+'px';pvc.style.top=cy+'px';pvt.style.left=cx+'px';pvt.style.top=cy+'px';requestAnimationFrame(loop)})();
  $$('[data-pv]').forEach(function(r){
    r.addEventListener('mouseenter',function(){var i=+r.getAttribute('data-pv');st.style.transform='translateY('+(-100*i)+'%)';[pv,pvc,pvt].forEach(function(x){x.classList.add('on')})});
    r.addEventListener('mouseleave',function(){[pv,pvc,pvt].forEach(function(x){x.classList.remove('on')})});
  });
}

/* ---------- hero marquee + arrow ---------- */
var mq=$('.mq .tr'),arr=$('.role .ar svg'),mqX=0,dir=-1,vel=0,lastY=sy();
var heroPh=$('.hero .ph'),heroIn=$('.hero .hin');
/* ---------- sliding strips + footer parallax ---------- */
var sl=$('.sl'),rows=sl?$$('.r',sl):[],cvv=sl&&$('.cv',sl),ft=$('.ft'),ftIn=ft&&$('.in-w',ft),ftAr=ft&&$('.ar',ft);
function frame(){
  var y=sy(),dy=y-lastY;lastY=y;
  if(dy!==0)dir=dy>0?-1:1;
  vel=lerp(vel,Math.min(Math.abs(dy),60),.1);
  if(mq&&!RM){var w=mq.scrollWidth/2;mqX+=dir*(0.55+vel*.12);if(mqX<=-w)mqX+=w;if(mqX>0)mqX-=w;mq.style.transform='translate3d('+mqX+'px,0,0)'}
  if(arr)arr.style.transform='rotate('+(dir<0?0:180)+'deg)';
  if(heroPh&&!RM){var vh=innerHeight;if(y<vh*1.2)heroPh.style.transform='translate3d(0,'+(y*.25)+'px,0)'}
  if(sl&&!RM){var r=sl.getBoundingClientRect(),p=clamp((innerHeight-r.top)/(innerHeight+r.height),0,1);
    rows.forEach(function(row,k){row.style.transform='translate3d('+((k%2?-20:0)+(k%2?1:-1)*p*14)+'vw,0,0)'});
    if(cvv)cvv.style.height=(1-p)*120+'px'}
  if(ft&&!RM){var fr=ft.getBoundingClientRect(),fp=clamp(1-fr.top/innerHeight,0,1);if(ftIn)ftIn.style.transform='translate3d(0,'+((1-fp)*-120)+'px,0)';if(ftAr)ftAr.style.transform='rotate('+(fp*90)+'deg)'}
  onScrollHdr();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- local time ---------- */
var tms=$$('[data-time]');
function tick(){var t=new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',timeZone:'Asia/Kolkata'});tms.forEach(function(e){e.textContent=t+' IST'})}
if(tms.length){tick();setInterval(tick,15000)}

/* ---------- copy email ---------- */
var toast=$('.toast');
$$('[data-copy]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();var v=b.getAttribute('data-copy');
  (navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).catch(function(){var t=D.createElement('textarea');t.value=v;B.appendChild(t);t.select();try{D.execCommand('copy')}catch(_){}t.remove()}).finally(function(){if(toast){toast.textContent='Email copied';toast.classList.add('on');setTimeout(function(){toast.classList.remove('on')},1800)}})})});

/* ---------- work filters & view toggle ---------- */
var fl=$('[data-filters]');
if(fl){var items=$$('[data-g]');
  $$('[data-f]',fl).forEach(function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-f');$$('[data-f]',fl).forEach(function(x){x.classList.toggle('on',x===b)});
    items.forEach(function(it){it.classList.toggle('hide',f!=='All'&&it.getAttribute('data-g')!==f)})})});
  $$('[data-view]').forEach(function(b){b.addEventListener('click',function(){var v=b.getAttribute('data-view');$$('[data-view]').forEach(function(x){x.classList.toggle('on',x===b)});
    $('#wl').classList.toggle('hide',v!=='list');$('#wg').classList.toggle('hide',v!=='grid')})});
}
})();
