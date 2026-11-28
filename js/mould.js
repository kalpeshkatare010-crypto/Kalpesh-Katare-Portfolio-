/* Injection-mould CV download: molten plastic fills a CV-shaped cavity,
   cools, the mould opens and the part (your CV) is ejected as the download. */
(function(){
  var SEL='a[href$="Kalpesh_Katare_CV.pdf"]';
  var css=`
#mld{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:rgba(8,8,10,.86);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);opacity:0;transition:opacity .25s;font-family:var(--grot,system-ui),sans-serif;cursor:pointer}
#mld.on{opacity:1}
#mld .st{position:relative;width:var(--W);height:calc(var(--H) + 196px)}
#mld .noz{position:absolute;left:50%;top:0;width:46px;margin-left:-23px;height:70px;transition:transform .55s cubic-bezier(.5,0,.2,1)}
#mld .noz .br{position:absolute;inset:0 0 16px;border-radius:4px;background:linear-gradient(90deg,#3a3d44,#9aa0aa 45%,#4a4e56);box-shadow:inset 0 -6px 0 rgba(0,0,0,.25)}
#mld .noz .br::before{content:"";position:absolute;left:6px;right:6px;top:10px;height:28px;background:repeating-linear-gradient(170deg,transparent 0 5px,rgba(0,0,0,.35) 5px 7px)}
#mld .noz .tip{position:absolute;left:50%;bottom:0;margin-left:-12px;border-left:12px solid transparent;border-right:12px solid transparent;border-top:18px solid #7d828b;transition:border-top-color .3s}
#mld.inj .noz{transform:translateY(16px)}
#mld.inj .noz .tip{border-top-color:#ff7a1a;filter:drop-shadow(0 0 6px #ff7a1a)}
#mld .spr{position:absolute;left:50%;top:86px;width:6px;margin-left:-3px;height:0;background:linear-gradient(#ffd27a,#ff6a00);box-shadow:0 0 12px #ff7a1a;border-radius:3px;transition:height .25s,opacity .4s}
#mld.inj .spr{height:44px}
#mld.cool .spr{opacity:0}
#mld .hv{position:absolute;top:120px;width:50%;height:calc(var(--H) + 30px);background:linear-gradient(180deg,#5b6068,#2e3137 60%,#24262b);border:1px solid #6d727b;transition:transform .6s cubic-bezier(.6,0,.2,1);box-shadow:0 20px 50px rgba(0,0,0,.5)}
#mld .hv.l{left:0;border-radius:8px 0 0 8px}
#mld .hv.r{right:0;border-radius:0 8px 8px 0}
#mld .hv::before{content:"";position:absolute;top:15px;height:var(--H);width:calc(var(--PW)/2);border:2px solid #15171a;background:#101113;box-shadow:inset 0 0 18px rgba(0,0,0,.8)}
#mld .hv.l::before{right:0;border-right:0}
#mld .hv.r::before{left:0;border-left:0}
#mld .hv i{position:absolute;width:10px;height:10px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#c9ccd2,#555a62);box-shadow:0 1px 2px #000}
#mld .hv b{position:absolute;bottom:6px;font-size:8px;font-weight:600;line-height:1;letter-spacing:.18em;color:#9aa0aa}
#mld .hv.l b{left:10px}#mld .hv.r b{right:10px}
#mld.open .hv.l{transform:translateX(-62%)}
#mld.open .hv.r{transform:translateX(62%)}
#mld .pt{position:absolute;left:50%;top:136px;width:var(--PW);height:var(--H);margin-left:calc(var(--PW)/-2);overflow:hidden;border-radius:2px;transition:transform .55s cubic-bezier(.3,1.6,.5,1),box-shadow .5s;z-index:2}
#mld .pt img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .7s}
#mld .ml{position:absolute;left:0;right:0;top:0;height:0;background:linear-gradient(180deg,#ffd27a,#ff8a1f 35%,#ff5a00);box-shadow:0 0 30px #ff6a00;transition:height 1.25s cubic-bezier(.45,.05,.4,1),filter .8s,opacity .8s}
#mld .ml::after{content:"";position:absolute;left:-10%;right:-10%;bottom:-7px;height:14px;border-radius:50%;background:#ff5a00;filter:blur(1px)}
#mld.inj .ml{height:100%}
#mld.cool .ml{filter:saturate(.25) brightness(1.5);opacity:0}
#mld.cool .pt img{opacity:1}
#mld.open .pt{transform:translateY(-8px) scale(1.12);box-shadow:0 26px 60px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.2)}
#mld .stm{position:absolute;left:50%;top:136px;width:var(--PW);margin-left:calc(var(--PW)/-2);height:10px;pointer-events:none;z-index:3}
#mld .stm s{position:absolute;bottom:0;width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,.35);filter:blur(4px);opacity:0}
#mld.cool .stm s{animation:mldSt 1.1s ease-out forwards}
@keyframes mldSt{0%{opacity:0;transform:translateY(0) scale(.6)}30%{opacity:.9}100%{opacity:0;transform:translateY(-70px) scale(2.2)}}
#mld .hud{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-between;gap:10px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#929292}
#mld .hud .s{color:#F5F5F2}
#mld .hud .t{font-variant-numeric:tabular-nums;color:#ff8a1f;transition:color .6s}
#mld.cool .hud .t{color:#F5F5F2}
#mld .x{position:absolute;top:18px;right:18px;font-size:10px;letter-spacing:.16em;color:#929292;text-transform:uppercase}
`;
  function build(){
    var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
  }
  var busy=false;
  function save(href,name){var a=document.createElement('a');a.setAttribute('data-raw','1');a.href=href;a.download=name||'';document.body.appendChild(a);a.click();a.remove();}
  function run(href,name){
    if(busy)return;busy=true;
    var W=Math.min(window.innerWidth*.84,340),PW=W*.56,H=PW*1287/910;
    var o=document.createElement('div');o.id='mld';o.setAttribute('role','dialog');o.setAttribute('aria-label','Moulding your CV');
    o.style.cssText='--W:'+W+'px;--PW:'+PW+'px;--H:'+H+'px';
    var bolts='<i style="left:8px;top:8px"></i><i style="right:8px;top:8px"></i><i style="left:8px;bottom:18px"></i><i style="right:8px;bottom:18px"></i>';
    var steam='';for(var k=0;k<6;k++)steam+='<s style="left:'+(8+k*16)+'%;animation-delay:'+(k*.09)+'s"></s>';
    o.innerHTML='<span class="x">Tap to skip</span><div class="st">'+
      '<div class="hv l">'+bolts+'<b>CAVITY A</b></div><div class="hv r">'+bolts+'<b>CAVITY B</b></div>'+
      '<div class="noz"><div class="br"></div><div class="tip"></div></div><div class="spr"></div>'+
      '<div class="pt"><img src="img/cv-preview.webp" alt=""><div class="ml"></div></div><div class="stm">'+steam+'</div>'+
      '<div class="hud"><span class="s">Ready</span><span class="t">25 °C</span></div></div>';
    document.body.appendChild(o);
    var st=o.querySelector('.s'),tt=o.querySelector('.t'),timers=[],raf,done=false;
    function temp(a,b,ms){var t0=performance.now();cancelAnimationFrame(raf);(function f(now){var p=Math.min(1,(now-t0)/ms);tt.textContent=Math.round(a+(b-a)*p)+' °C';if(p<1)raf=requestAnimationFrame(f)})(t0)}
    function at(ms,fn){timers.push(setTimeout(fn,ms))}
    function finish(skip){
      if(done)return;done=true;timers.forEach(clearTimeout);cancelAnimationFrame(raf);
      save(href,name);
      if(skip){close();return}
      st.textContent='Part ejected · downloading';at(1500,close);
    }
    function close(){o.classList.remove('on');setTimeout(function(){o.remove();busy=false},260)}
    o.addEventListener('click',function(){done?close():finish(true)});
    document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){document.removeEventListener('keydown',esc);done?close():finish(true)}});
    requestAnimationFrame(function(){o.classList.add('on')});
    at(250,function(){o.classList.add('inj');st.textContent='Injecting · 120 MPa';temp(25,230,500)});
    at(1600,function(){o.classList.add('cool');st.textContent='Cooling';temp(230,45,900)});
    at(2650,function(){o.classList.add('open');st.textContent='Ejecting'});
    at(3250,function(){finish(false)});
  }
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest(SEL);if(!a||a.hasAttribute('data-raw'))return;
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    e.preventDefault();e.stopPropagation();run(a.getAttribute('href'),a.getAttribute('download'));
  },true);
  build();
})();
