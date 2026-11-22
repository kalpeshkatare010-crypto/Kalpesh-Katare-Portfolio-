/* =========================================================
   EDIT YOUR CONTENT HERE
   ========================================================= */
const PAPERS = [
 {t:"Sustainable polymers",a:"A. K. Mohanty, F. Wu, R. Mincheva, M. Hakkarainen, J.-M. Raquez, D. F. Mielewski, R. Narayan, A. N. Netravali, M. Misra",j:"Nature Reviews Methods Primers",v:"2, 46",y:2022,type:"Primer",cats:["Sustainability","Polymer Science"],doi:"10.1038/s43586-022-00124-8",oa:false,
  s:"A methods-first primer covering the whole life of sustainable polymers: renewable and waste-carbon feedstocks, synthesis, characterization and applications, plus the end-of-life routes and scale-up hurdles that still slow adoption."},
 {t:"Materials designed to degrade: structure, properties, processing, and performance relationships in polyhydroxyalkanoate biopolymers",a:"J. N. Lalonde, G. Pilania, B. L. Marrone",j:"Polymer Chemistry",v:"16, 235–265",y:2025,type:"Review",cats:["Biopolymers","Polymer Science"],doi:"10.1039/D4PY00623B",oa:"CC BY 3.0",
  s:"Uses the classic materials tetrahedron to connect how PHA chemistry, processing and performance relate, and weighs their biodegradability against cost, scalability and limited chemical variety."},
 {t:"Physicochemical Characterization of Biodegradable Polymers for Biomedical Applications: Insights from XPS, DRIFT, and AFM Techniques",a:"O. Mozgova, O. Chernyayeva, A. Sroka-Bartnicka, et al.",j:"Journal of Polymers and the Environment",v:"",y:2025,type:"Review",cats:["Characterization","Biopolymers"],doi:"10.1007/s10924-025-03578-5",oa:false,
  s:"Explains how three surface techniques — XPS for chemistry, DRIFT infrared spectroscopy and AFM for topography — reveal the surface behaviour of biodegradable polymers meant for drug delivery and tissue scaffolds."},
 {t:"A review of computational approaches used in the modelling, design, and manufacturing of biodegradable and biobased polymers",a:"B. G. Laycock, C. M. Chan, P. J. Halley",j:"Progress in Polymer Science",v:"101874",y:2024,type:"Review",cats:["Material Science","Biopolymers"],doi:"10.1016/j.progpolymsci.2024.101874",oa:false,
  s:"Maps quantum-to-macroscale simulation and data-driven 'Materials 4.0' tools used to design and scale up bio-based polymers, positioning modelling as a cheaper complement to trial-and-error experiments."},
 {t:"Advancing Sustainability in Modern Polymer Processing: Strategies for Waste Resource Recovery and Circular Economy Integration",a:"I.-C. Radu, A.-M. Vadureanu, D.-E. Cozorici, E. Blanzeanu, C. Zaharia",j:"Polymers",v:"17(4), 522",y:2025,type:"Review",cats:["Processing","Sustainability"],doi:"10.3390/polym17040522",oa:"CC BY",
  s:"Looks at extrusion, injection moulding and 3D printing through a circular-economy lens — how processing choices affect recyclability, and where AI-driven 'polymer informatics' fits in."},
 {t:"Biodegradable Biobased Polymers: A Review of the State of the Art, Challenges, and Future Directions",a:"S. Jha, B. Akula, H. Enyioma, M. Novak, V. Amin, H. Liang",j:"Polymers",v:"16(16), 2262",y:2024,type:"Review",cats:["Biopolymers","Sustainability"],doi:"10.3390/polym16162262",oa:"CC BY",
  s:"Surveys PLA, PHAs and succinate polymers from synthesis to commercial viability, including techno-economic and life-cycle views and the real-world limits on biodegradation rates."},
 {t:"Methods of Analyses for Biodegradable Polymers: A Review",a:"S. Baidurah",j:"Polymers",v:"14(22), 4928",y:2022,type:"Review",cats:["Characterization"],doi:"10.3390/polym14224928",oa:"CC BY",
  s:"A practical comparison of how biodegradation is actually measured — visual inspection, chromatography, spectroscopy and respirometry — with the strengths and blind spots of each."},
 {t:"Machine Learning-Based Process Optimization in Biopolymer Manufacturing: A Review",a:"I. Malashin, D. Martysyuk, V. Tynchenko, A. Gantimurov, A. Semikolenov, V. Nelyub, A. Borodulin",j:"Polymers",v:"16(23), 3368",y:2024,type:"Review",cats:["Processing","Material Science"],doi:"10.3390/polym16233368",oa:"CC BY",
  s:"Reviews where supervised, unsupervised and deep-learning models help control fermentation, polymerisation and extraction steps in biopolymer production."},
 {t:"A Review on Natural Fiber Reinforced Polymer Composites (NFRPC) for Sustainable Industrial Applications",a:"S. H. Kamarudin, M. S. Mohd Basri, M. Rayung, F. Abu, S. Ahmad, M. N. Norizan, et al.",j:"Polymers",v:"14(17), 3698",y:2022,type:"Review",cats:["Material Science","Sustainability"],doi:"10.3390/polym14173698",oa:"CC BY",
  s:"Covers natural-fibre composites as lighter, renewable alternatives to glass- and carbon-reinforced plastics — fibre types, matrices, processing and industrial uses."},
 {t:"Prospects of sustainable polymers",a:"A. Kumar, V. K. Thakur, H. Yazdani Nezhad, K.-S. Lee",j:"Scientific Reports",v:"14, 9430",y:2024,type:"Editorial",cats:["Sustainability","Polymer Science"],doi:"10.1038/s41598-024-59439-z",oa:"Open access",
  s:"A short editorial framing a journal collection on sustainable polymers — a quick entry point to applications from packaging to wound care."}
];
const FILTERS = ["All","Polymer Science","Processing","Characterization","Biopolymers","Sustainability","Material Science"];

const RESOURCES = [
 ["Google Scholar","Cross-publisher search & citations","https://scholar.google.com"],
 ["ScienceDirect","Elsevier journals & books","https://www.sciencedirect.com"],
 ["SpringerLink","Springer Nature journals","https://link.springer.com"],
 ["ACS Publications","American Chemical Society journals","https://pubs.acs.org"],
 ["Royal Society of Chemistry","RSC journals incl. Polymer Chemistry","https://pubs.rsc.org"],
 ["Nature Portfolio","Nature & Nature Reviews titles","https://www.nature.com"],
 ["PubMed / PMC","Biomedical & biomaterials literature","https://pubmed.ncbi.nlm.nih.gov"],
 ["Crossref","Look up any DOI's metadata","https://search.crossref.org"]
];

const PROJECTS = [
 {g:"Software",n:"01",t:"JobFlow",cat:"SaaS · Product",d:"An offline-first production management app for small-scale manufacturers: job orders, workflow stages, production entries, inventory and reports, on the web and as an Android app. Live, with a 14-day free trial and ₹999/month plan.",tools:["React","TypeScript","Supabase","Cloudflare","Android (Capacitor)","Razorpay"],cover:"jobflow",role:"Product owner — idea, features, design and launch",year:"2026",out:"Live — <a href=\"https://jobflow.kalpeshkatare010.workers.dev\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--lime)\">open JobFlow ↗</a>. Web app, Android app with in-app updates, and online subscriptions."},
 {g:"Electronics",n:"02",t:"Smart RFID Door Lock",cat:"Electronics · Embedded",d:"An access-control prototype that reads RFID tags and keypad input, shows status on an LCD and switches a solenoid lock through a relay.",tools:["Arduino Uno","RFID RC522","Keypad","LCD","Relay","Solenoid lock"],cover:"rfid",role:"[Your role]",year:"[Year]",out:"[What you learned / result]"},
 {g:"Electronics",n:"03",t:"TARS Mini Robot",cat:"Robotics · Engineering",d:"A robotics and engineering build exploring mechanism, motion and control.",tools:["[Microcontroller]","[Motors / servos]","[Materials]"],cover:"robot",role:"[Your role]",year:"[Year]",out:"[What you learned / result]"},
 {g:"Design",n:"04",t:"Polyconnect",cat:"Editorial · Visual communication",d:"The departmental e-magazine of Plastic & Polymer Engineering — editorial design, typography and visual communication for Issue 01.",tools:["Editorial design","Typography","Layout"],cover:"mag",role:"[Your role]",year:"[Year]",out:"[Link to the issue]"},
 {g:"Events",n:"05",t:"Alpha AI Workshop",cat:"Events · Creative communication",d:"Involvement in an AI workshop — event promotion, poster and social creative, and communication.",tools:["Event promotion","Poster design","Social media"],cover:"ai",role:"[Your role]",year:"[Year]",out:"[Attendance / outcome]"}
];

const EXPERIENCE = [
 {w:"[Year]",s:"Club",h:"Rotaract Club",r:"Member",p:"Community service and club activities. [Add projects or initiatives you contributed to.]",tags:["Community","Leadership"]},
 {w:"[Year]",s:"Media",h:"Social Media Editor",r:"[Organisation]",p:"Planning and designing posts, editing visuals and keeping the channel's voice consistent. [Add scope.]",tags:["Content","Design","Editing"]},
 {w:"[Year]",s:"Campus",h:"College events",r:"Organising & creative team",p:"Supporting departmental and college events with promotion and on-ground coordination. [Name events.]",tags:["Events","Coordination"]},
 {w:"[Year]",s:"Learning",h:"Workshops",r:"Participant",p:"Including the Alpha AI Workshop. [List other technical workshops attended.]",tags:["AI","Technical"]},
 {w:"Ongoing",s:"Practice",h:"Creative & technical work",r:"Self-directed",p:"Electronics builds, editorial design for Polyconnect and hands-on print production.",tags:["Arduino","Editorial","Print"]}
];

/* ========================================================= */
const NOOP=new Proxy(function(){},{get:(t,k)=>k===Symbol.toPrimitive?()=>'':k==='then'?undefined:k===Symbol.iterator?function*(){}:NOOP,set:()=>true,apply:()=>NOOP});
const has=s=>!!document.querySelector(s);
const $=(s,c=document)=>c.querySelector(s)||NOOP, $$=(s,c=document)=>[...c.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasG = typeof window.gsap!=='undefined';
const ARROW='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>';
$('#yr').textContent=new Date().getFullYear();

/* ---------- topographic contours ---------- */
function rnd(seed){return()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646}}
function topo(svg,seed=3,cx=.7,cy=.45){
  const W=1600,H=1000; svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const r=rnd(seed); const ph=[r()*6,r()*6,r()*6,r()*6]; let out='';
  for(let k=1;k<=22;k++){ const R=k*58; let d='';
    for(let i=0;i<=120;i++){const t=i/120*Math.PI*2;
      const rr=R*(1+.16*Math.sin(3*t+ph[0]+k*.07)+.09*Math.sin(5*t+ph[1])+.06*Math.sin(2*t+ph[2]+k*.12));
      const x=W*cx+rr*Math.cos(t)*1.25,y=H*cy+rr*Math.sin(t)*.85; d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);}
    out+=`<path d="${d}Z"/>`;}
  svg.innerHTML=out;
}
topo($('#heroTopo'),5,.72,.5);
$$('[data-topo]').forEach(s=>topo(s,+s.dataset.topo,.6,.6));

/* ---------- hero molecular chain ---------- */
(function(){const s=$('#heroChain');let d='',atoms='';const n=34;
 for(let i=0;i<=n;i++){const x=i/n*1600,y=i%2?60:140;d+=(i?'L':'M')+x+' '+y;atoms+=`<circle cx="${x}" cy="${y}" r="${i%5===0?7:4}" fill="${i%5===0?'#1F8FFF':'#0B0B0D'}" stroke="#1F8FFF" stroke-width="1.5"/>`;}
 s.innerHTML=`<path id="hcPath" d="${d}" fill="none" stroke="#1F8FFF" stroke-width="1.5" opacity=".75"/><g id="hcAtoms" opacity=".95">${atoms}</g>`;})();

/* ---------- loader chain atoms ---------- */
(function(){let a='';for(let i=0;i<14;i++){a+=`<circle cx="${i*40}" cy="${i%2?30:60}" r="5" fill="#0B0B0D" stroke="#1F8FFF" stroke-width="2"/>`}$('#ld-atoms').innerHTML=a;})();

/* ---------- small svg helpers ---------- */
const G='#1F8FFF',T='#F5F5F2',M='#929292',L='#292929';
function axes(xl,yl){return `<g stroke="${L}" stroke-width="1" fill="none"><path d="M50 30 V260 H375"/>${[0,1,2,3,4].map(i=>`<path d="M50 ${30+i*57.5} H375" opacity=".5" stroke-dasharray="2 4"/>`).join('')}</g><g fill="${M}" font-family="Space Grotesk" font-size="10" letter-spacing=".08em"><text x="212" y="290" text-anchor="middle">${xl}</text><text x="18" y="145" transform="rotate(-90 18 145)" text-anchor="middle">${yl}</text></g>`}
function lbl(x,y,t,c=T,a='start'){return `<text x="${x}" y="${y}" fill="${c}" font-family="Space Grotesk" font-size="10.5" text-anchor="${a}">${t}</text>`}
const DRAW={
 chains(){let s='';const r=rnd(11);
  // amorphous left
  for(let c=0;c<6;c++){let x=30+r()*140,y=40+r()*220,d=`M${x} ${y}`;for(let i=0;i<9;i++){const nx=Math.min(185,Math.max(20,x+(r()-.5)*70)),ny=Math.min(280,Math.max(30,y+(r()-.5)*70));d+=` Q${(x+nx)/2+(r()-.5)*40} ${(y+ny)/2+(r()-.5)*40} ${nx} ${ny}`;x=nx;y=ny}s+=`<path class="dr" d="${d}" fill="none" stroke="${c%2?M:T}" stroke-width="1.3" opacity=".8"/>`}
  // lamellae right
  for(let b=0;b<3;b++){const y0=50+b*80;let d='';for(let i=0;i<9;i++){const x=220+i*18;d+=`M${x} ${y0} V${y0+50} `;if(i<8)d+=`M${x} ${i%2?y0:y0+50} q9 ${i%2?-10:10} 18 0 `}s+=`<path class="dr" d="${d}" fill="none" stroke="${G}" stroke-width="1.6"/>`;s+=`<rect x="212" y="${y0-6}" width="170" height="62" fill="none" stroke="${L}" stroke-dasharray="3 3"/>`}
  s+=`<path d="M200 25 V290" stroke="${L}"/>`+lbl(30,296,'AMORPHOUS · TANGLED',M)+lbl(212,296,'CRYSTALLINE · FOLDED LAMELLAE',G);return s},
 extruder(){return `<g fill="none" stroke-width="1.5">
  <path d="M60 70 L40 30 H110 L90 70" stroke="${T}"/>${[0,1,2,3,4,5].map(i=>`<circle cx="${58+i*7}" cy="${46+(i%2)*8}" r="3.5" stroke="${G}"/>`).join('')}
  <rect x="40" y="90" width="270" height="70" stroke="${T}"/>
  ${[0,1,2,3,4].map(i=>`<rect x="${70+i*48}" y="80" width="36" height="10" fill="${i<2?'#3a3a3a':i<4?'#5a4a1a':'#7a3b1a'}" stroke="none"/><rect x="${70+i*48}" y="160" width="36" height="10" fill="${i<2?'#3a3a3a':i<4?'#5a4a1a':'#7a3b1a'}" stroke="none"/>`).join('')}
  <path class="dr" d="${(()=>{let d='M44 125';for(let i=0;i<22;i++){const x=50+i*12,h=i<8?22:i<15?22-(i-8)*2.4:6;d+=` L${x} ${125-h} L${x+6} ${125+h}`}return d})()}" stroke="${G}"/>
  <path d="M44 125 H300" stroke="${M}" stroke-width="5" opacity=".5"/>
  <path d="M310 100 L345 112 V138 L310 150" stroke="${T}"/><path class="dr" d="M345 125 H385" stroke="${G}" stroke-width="5"/>
  <path d="M10 125 H40" stroke="${M}" stroke-width="3"/><circle cx="18" cy="125" r="10" stroke="${M}"/></g>
  <g>${lbl(40,24,'HOPPER',M)}${lbl(90,200,'FEED',T,'middle')}${lbl(180,200,'COMPRESSION',T,'middle')}${lbl(265,200,'METERING',T,'middle')}${lbl(346,170,'DIE',G,'middle')}${lbl(14,150,'DRIVE',M)}${lbl(70,75,'HEATER BANDS',M)}</g>
  <path d="M60 210 H290" stroke="${L}"/><path d="M285 205 l6 5 -6 5" stroke="${G}" fill="none"/>${lbl(60,230,'MELT FLOW · PRESSURE BUILDS ALONG THE SCREW',M)}`},
 injection(){return `<g fill="none" stroke-width="1.5">
  <path d="M110 60 L95 25 H145 L130 60" stroke="${T}"/>
  <rect x="40" y="70" width="190" height="56" stroke="${T}"/>
  <path class="dr" d="${(()=>{let d='M52 98';for(let i=0;i<14;i++){const x=58+i*11;d+=` L${x} 80 L${x+5} 116`}return d})()}" stroke="${G}"/>
  <path d="M230 84 L258 94 V102 L230 112" stroke="${T}"/>
  <rect x="262" y="52" width="40" height="120" stroke="${T}"/><rect x="304" y="52" width="40" height="120" stroke="${T}"/>
  <path class="dr" d="M258 98 H280 V80 H322 V140 H280 V98" stroke="${G}" stroke-width="2.4"/>
  <rect x="352" y="62" width="10" height="100" fill="${M}" stroke="none"/><path d="M362 112 H392" stroke="${M}" stroke-width="5"/>
  <path d="M20 98 H40" stroke="${M}" stroke-width="5"/><path d="M14 92 l-6 6 6 6" stroke="${G}"/></g>
  ${lbl(95,20,'HOPPER',M)}${lbl(135,145,'RECIPROCATING SCREW',T,'middle')}${lbl(244,145,'NOZZLE',M,'middle')}${lbl(302,190,'MOULD',G,'middle')}${lbl(372,190,'CLAMP',M,'middle')}
  <g font-family="Space Grotesk" font-size="10" fill="${M}"><text x="40" y="240">CYCLE →</text>${['CLAMP','INJECT','HOLD','COOL','EJECT'].map((t,i)=>`<rect x="${92+i*58}" y="228" width="52" height="18" fill="none" stroke="${i===1?G:L}"/><text x="${118+i*58}" y="241" text-anchor="middle" fill="${i===1?G:T}">${t}</text>`).join('')}</g>`},
 dsc(){ // heat flow (endo down)
  const X=t=>50+(t-30)/(290-30)*325; let d='';
  for(let t=30;t<=290;t+=1){let y=120;if(t>70)y+=Math.min(1,(t-70)/8)*14; y-=38*Math.exp(-(((t-132)/9)**2)); y+=78*Math.exp(-(((t-252)/7)**2)); d+=(t===30?'M':'L')+X(t).toFixed(1)+' '+y.toFixed(1)}
  return axes('TEMPERATURE (°C)','HEAT FLOW · ENDO ↓')+`<path class="dr" d="${d}" fill="none" stroke="${G}" stroke-width="2"/>`+lbl(X(74),110,'Tg',T,'middle')+lbl(X(132),70,'Cold cryst. (exo)',T,'middle')+lbl(X(252),222,'Tm (endo)',T,'middle')+[50,100,150,200,250].map(t=>lbl(X(t),274,t,M,'middle')).join('')},
 tga(){const X=t=>50+(t-30)/(700-30)*325;let d='',dd='';
  for(let t=30;t<=700;t+=2){const f=1/(1+Math.exp(-(t-455)/16));const m=100-97*f;const y=40+(100-m)*2.1;d+=(t===30?'M':'L')+X(t).toFixed(1)+' '+y.toFixed(1);
   const der=97*f*(1-f)/16;dd+=(t===30?'M':'L')+X(t).toFixed(1)+' '+(255-der*38).toFixed(1)}
  return axes('TEMPERATURE (°C)','MASS (%)')+`<path class="dr" d="${dd}" fill="none" stroke="${M}" stroke-width="1.3" stroke-dasharray="4 3"/><path class="dr" d="${d}" fill="none" stroke="${G}" stroke-width="2"/>`+lbl(X(140),34,'100 %',M)+lbl(X(470),150,'onset → max. loss rate',T)+lbl(X(560),240,'residue',M)+lbl(X(200),246,'DTG',M)+[100,300,500,700].map(t=>lbl(X(t),274,t,M,'middle')).join('')},
 ftir(){const X=w=>50+(4000-w)/(4000-500)*325;const bands=[[2915,62,18],[2848,48,14],[1472,30,7],[1462,26,7],[730,26,6],[719,24,6]];let d='';
  for(let w=4000;w>=500;w-=4){let tr=92;for(const[c,dep,wd]of bands)tr-=dep*Math.exp(-(((w-c)/wd)**2));const y=40+(100-tr)*2.1;d+=(w===4000?'M':'L')+X(w).toFixed(1)+' '+y.toFixed(1)}
  return axes('WAVENUMBER (cm⁻¹)','TRANSMITTANCE (%)')+`<path class="dr" d="${d}" fill="none" stroke="${G}" stroke-width="1.8"/>`+lbl(X(2880),228,'C–H stretch',T,'middle')+lbl(X(1467),160,'CH₂ bend',T,'middle')+lbl(X(724),160,'CH₂ rock',T,'middle')+[4000,3000,2000,1000].map(w=>lbl(X(w),274,w,M,'middle')).join('')}
};
const CANVAS={
 pellets(cv){const W=cv.width,H=cv.height,c=cv.getContext('2d');const r=rnd(21);
  const bg=c.createRadialGradient(W*.5,H*.4,10,W*.5,H*.5,W*.8);bg.addColorStop(0,'#1d1d22');bg.addColorStop(1,'#08080a');c.fillStyle=bg;c.fillRect(0,0,W,H);
  const P=[];for(let i=0;i<150;i++)P.push({x:r()*W,y:r()*H,s:(18+r()*14)*W/520,a:r()*Math.PI,lime:r()<.12,k:r()});
  P.sort((a,b)=>a.y-b.y);
  for(const p of P){c.save();c.translate(p.x,p.y);c.rotate(p.a);const rx=p.s,ry=p.s*.72;
   c.shadowColor='rgba(0,0,0,.6)';c.shadowBlur=12*W/520;c.shadowOffsetY=5*W/520;
   const g=c.createRadialGradient(-rx*.35,-ry*.45,1,0,0,rx*1.1);
   if(p.lime){g.addColorStop(0,'#d6eaff');g.addColorStop(.35,'#1F8FFF');g.addColorStop(1,'#3d5200')}
   else{const b=200+p.k*40|0;g.addColorStop(0,'rgba(255,255,255,.95)');g.addColorStop(.4,`rgba(${b},${b},${b+8},.75)`);g.addColorStop(1,'rgba(90,90,100,.55)')}
   c.fillStyle=g;c.beginPath();c.ellipse(0,0,rx,ry,0,0,Math.PI*2);c.fill();c.shadowColor='transparent';
   c.strokeStyle='rgba(255,255,255,.18)';c.lineWidth=1;c.stroke();
   c.fillStyle='rgba(255,255,255,.55)';c.beginPath();c.ellipse(-rx*.38,-ry*.42,rx*.22,ry*.12,-.4,0,Math.PI*2);c.fill();c.restore()}
  const v=c.createRadialGradient(W/2,H/2,W*.3,W/2,H/2,W*.75);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.65)');c.fillStyle=v;c.fillRect(0,0,W,H)},
 sem(cv){const W=cv.width,H=cv.height,c=cv.getContext('2d');const r=rnd(77);c.fillStyle='#4a4a4a';c.fillRect(0,0,W,H);
  // matrix tearing texture
  for(let i=0;i<900;i++){const x=r()*W,y=r()*H,s=(4+r()*26)*W/520;const g=c.createRadialGradient(x-s*.3,y-s*.3,0,x,y,s);const l=60+r()*90|0;g.addColorStop(0,`rgba(${l+60},${l+60},${l+60},.5)`);g.addColorStop(1,'rgba(30,30,30,0)');c.fillStyle=g;c.beginPath();c.arc(x,y,s,0,7);c.fill()}
  // fibres
  for(let i=0;i<26;i++){const x=r()*W,y=r()*H,len=(40+r()*140)*W/520,ang=-.3+r()*.6+(r()<.5?0:Math.PI/2),w=(9+r()*5)*W/520;c.save();c.translate(x,y);c.rotate(ang);
   c.shadowColor='rgba(0,0,0,.8)';c.shadowBlur=10;c.shadowOffsetX=4;
   const g=c.createLinearGradient(0,-w,0,w);g.addColorStop(0,'#2a2a2a');g.addColorStop(.3,'#e6e6e6');g.addColorStop(.55,'#9a9a9a');g.addColorStop(1,'#1c1c1c');c.fillStyle=g;c.fillRect(0,-w,len,w*2);
   c.shadowColor='transparent';c.fillStyle='#0d0d0d';c.beginPath();c.ellipse(0,0,w*.45,w,0,0,7);c.fill();c.restore()}
  // holes (pull-out)
  for(let i=0;i<10;i++){const x=r()*W,y=r()*H,w=10*W/520;c.fillStyle='#090909';c.beginPath();c.ellipse(x,y,w,w*.9,0,0,7);c.fill();c.strokeStyle='rgba(220,220,220,.5)';c.lineWidth=1.5;c.stroke()}
  // noise
  const id=c.getImageData(0,0,W,H),d=id.data;for(let i=0;i<d.length;i+=4){const n=(Math.random()-.5)*38;d[i]+=n;d[i+1]+=n;d[i+2]+=n}c.putImageData(id,0,0);
  // databar
  const bh=H*.1;c.fillStyle='#000';c.fillRect(0,H-bh,W,bh);c.fillStyle='#ddd';c.font=`${Math.round(bh*.32)}px Space Grotesk, monospace`;c.textBaseline='middle';
  c.fillText('ILLUSTRATIVE RENDER  ·  NOT A MICROGRAPH',W*.03,H-bh/2);c.fillStyle='#1F8FFF';c.fillRect(W*.74,H-bh*.6,W*.16,bh*.14);c.fillStyle='#ddd';c.fillText('50 µm',W*.77,H-bh*.25)}
};
function sizeCanvas(cv){const r=cv.getBoundingClientRect(),dpr=Math.min(devicePixelRatio||1,2);cv.width=Math.max(300,r.width*dpr);cv.height=Math.max(230,r.height*dpr)}
$$('svg[data-draw]').forEach(s=>s.innerHTML=DRAW[s.dataset.draw]());
const drawCanv=()=>$$('canvas[data-draw]').forEach(cv=>{sizeCanvas(cv);CANVAS[cv.dataset.draw](cv)});
document.fonts?document.fonts.ready.then(drawCanv):drawCanv();

/* ---------- topic cards (custom svg) ---------- */
const TOPICS=[
 ["Polymer Chemistry","Monomers, polymerisation routes and the repeat units that define a polymer's identity.",`<path d="M10 70 L40 40 L70 70 L100 40 L130 70 L160 40 L190 70" stroke="${G}" stroke-width="2" fill="none"/><path d="M40 40 V15 M100 40 V15 M160 40 V15" stroke="${T}" fill="none"/><text x="34" y="10" fill="${M}" font-size="9" font-family="Space Grotesk">CH₃</text><text x="94" y="10" fill="${M}" font-size="9" font-family="Space Grotesk">CH₃</text><text x="154" y="10" fill="${M}" font-size="9" font-family="Space Grotesk">CH₃</text><text x="10" y="100" fill="${M}" font-size="10" font-family="Space Grotesk">isotactic polypropylene</text>`],
 ["Structure & Properties","Molecular weight, crystallinity and chain entanglement — and how they set strength, Tg and toughness.",`<path d="M10 90 C40 90 50 20 100 20 S160 90 190 90" stroke="${G}" stroke-width="2" fill="none"/><path d="M10 95 H190 M10 95 V10" stroke="${L}"/><path d="M100 20 V95" stroke="${M}" stroke-dasharray="3 3"/><text x="104" y="16" fill="${M}" font-size="9" font-family="Space Grotesk">Mw distribution</text>`],
 ["Polymer Processing","Extrusion, injection moulding, blow moulding and film blowing — turning melt into product.",`<rect x="10" y="35" width="120" height="34" stroke="${T}" fill="none"/><path d="M14 52 ${Array.from({length:10},(_,i)=>`L${20+i*11} 40 L${25+i*11} 64`).join(' ')}" stroke="${G}" fill="none"/><path d="M130 42 L150 48 V56 L130 62" stroke="${T}" fill="none"/><path d="M150 52 H195" stroke="${G}" stroke-width="5"/>`],
 ["Material Characterization","DSC, TGA, FTIR, rheology and microscopy — the tools that tell us what a material really is.",`<path d="M10 80 H50 C60 80 60 78 66 72 L70 74 C78 82 84 88 96 88 C110 88 112 30 124 30 C136 30 140 80 160 80 H195" stroke="${G}" stroke-width="2" fill="none"/><path d="M10 95 H195" stroke="${L}"/><text x="118" y="22" fill="${M}" font-size="9" font-family="Space Grotesk">Tm</text>`],
 ["Polymer Composites","Fibres and fillers in a polymer matrix — stiffness and strength by design.",`<rect x="10" y="12" width="180" height="80" stroke="${L}" fill="none"/>${Array.from({length:7},(_,i)=>`<path d="M${18+i*5} ${22+i*10} H${120+i*9}" stroke="${i%2?T:G}" stroke-width="3" stroke-linecap="round"/>`).join('')}`],
 ["Biopolymers","PLA, PHAs, starch and cellulose — polymers from biological feedstocks.",`<path d="M20 60 L45 45 L70 60 L95 45 L120 60 L145 45 L170 60" stroke="${G}" stroke-width="2" fill="none"/><path d="M45 45 V25 M95 45 V25 M145 45 V25" stroke="${T}"/><path d="M70 60 V80 M120 60 V80" stroke="${T}"/><text x="62" y="94" fill="${M}" font-size="9" font-family="Space Grotesk">O</text><text x="112" y="94" fill="${M}" font-size="9" font-family="Space Grotesk">=O</text><text x="20" y="16" fill="${M}" font-size="10" font-family="Space Grotesk">polylactic acid (PLA)</text>`],
 ["Sustainable Materials","Recycling, compostability and circular design — closing the materials loop.",`<circle cx="100" cy="52" r="36" stroke="${L}" fill="none"/><path d="M100 16 A36 36 0 0 1 136 52" stroke="${G}" stroke-width="2.5" fill="none"/><path d="M136 52 A36 36 0 0 1 82 83" stroke="${T}" stroke-width="2.5" fill="none"/><path d="M82 83 A36 36 0 0 1 100 16" stroke="${M}" stroke-width="2.5" fill="none"/><path d="M131 44 l5 8 5-8" stroke="${G}" fill="none"/>`],
 ["Industrial Applications","Packaging, automotive, medical and electronics — where polymers earn their keep.",`${[0,1,2,3].map(i=>`<rect x="${12+i*46}" y="${30+(i%2)*10}" width="38" height="50" rx="${i===0?14:2}" stroke="${i===1?G:T}" fill="none"/>`).join('')}<text x="12" y="100" fill="${M}" font-size="9" font-family="Space Grotesk">pack · auto · medical · electronics</text>`]
];
$('#topics').innerHTML=TOPICS.map((t,i)=>`<article class="topic"><span class="n">0${i+1}</span><div class="ill"><svg viewBox="0 0 200 105" aria-hidden="true">${t[2]}</svg></div><h3>${t[0]}</h3><p>${t[1]}</p></article>`).join('');

/* ---------- featured research viz ---------- */
(function(){let s='';const r=rnd(9);for(let i=0;i<14;i++){const y=40+i*32;s+=`<rect x="${40+r()*20}" y="${y}" width="${150+r()*170}" height="10" fill="${i===4||i===9?G:'#1f1f24'}"/>`}
 s+=`<g font-family="Space Grotesk" font-size="10" fill="${M}"><text x="40" y="490">LITERATURE MAP · PLACEHOLDER</text></g>`;
 for(let i=0;i<9;i++){const x=60+r()*280,y=60+r()*380;s+=`<circle cx="${x}" cy="${y}" r="${3+r()*6}" fill="none" stroke="${G}" opacity=".6"/>`}
 $('#featViz').innerHTML=s})();

/* ---------- reading room ---------- */
function renderLib(){
  $('#lib').innerHTML=PAPERS.map(p=>`<a class="paper" href="https://doi.org/${p.doi}" target="_blank" rel="noopener" data-cats="${p.cats.join('|')}" data-hover="READ">
   <div class="p-top"><div class="p-tags"><span class="tag">${p.type}</span>${p.cats.map(c=>`<span class="tag">${c}</span>`).join('')}</div>${p.oa?`<span class="oa" title="Verified open access${p.oa!=='Open access'?' · '+p.oa:''}">● OPEN ACCESS</span>`:''}</div>
   <h4>${p.t}</h4><p class="p-auth">${p.a}</p>
   <p class="p-meta"><em>${p.j}</em> · ${p.y}${p.v?' · '+p.v:''}</p>
   <p class="p-sum">${p.s}</p>
   <div class="p-foot"><span class="doi">doi:${p.doi}</span><span class="go">Read article ${ARROW}</span></div></a>`).join('');
  $('#filters').innerHTML=FILTERS.map((f,i)=>{const n=f==='All'?PAPERS.length:PAPERS.filter(p=>p.cats.includes(f)).length;return `<button aria-pressed="${i===0}" data-f="${f}">${f}<span class="cnt">${n}</span></button>`}).join('');
  $('#filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));
    const f=b.dataset.f;const cards=$$('.paper');
    const apply=()=>cards.forEach(c=>c.classList.toggle('hidden',!(f==='All'||c.dataset.cats.split('|').includes(f))));
    if(hasG&&!RM){gsap.to(cards,{opacity:0,y:10,duration:.2,onComplete:()=>{apply();gsap.fromTo(cards.filter(c=>!c.classList.contains('hidden')),{opacity:0,y:24},{opacity:1,y:0,duration:.5,stagger:.05,ease:'power3.out',onComplete:()=>window.ScrollTrigger&&ScrollTrigger.refresh()})}})}else apply()});
}
renderLib();
if(has('#lib')){$('#lib').classList.add('clip');$('#lib').insertAdjacentHTML('afterend',`<button class='btn btn-ghost lib-more' id='libMore'>Show all ${PAPERS.length} papers</button>`);$('#libMore').addEventListener('click',()=>{$('#lib').classList.remove('clip');$('#libMore').remove();window.ScrollTrigger&&ScrollTrigger.refresh()});$('#filters').addEventListener('click',()=>{$('#lib').classList.remove('clip');const m=document.getElementById('libMore');m&&m.remove()},true)}
$('#resources').innerHTML=RESOURCES.map(r=>`<a href="${r[2]}" target="_blank" rel="noopener" data-hover="OPEN"><svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg><b>${r[0]}</b><span>${r[1]}</span></a>`).join('');

/* ---------- project covers ---------- */
const COVER={
 jobflow:()=>`<rect width="400" height="300" fill="#0e0e11"/>${Array.from({length:16},(_,i)=>`<path d="M${i*26} 0 V300" stroke="#18181c"/>`).join('')}
  <text x="32" y="58" fill="${T}" font-family="Anton" font-size="34">JOB<tspan fill="${G}">FLOW</tspan></text><text x="34" y="78" fill="${M}" font-family="Space Grotesk" font-size="10">PRODUCTION MANAGEMENT, SIMPLIFIED.</text>
  ${['CUTTING','PRINTING','PACKING'].map((h,c)=>`<text x="${34+c*116}" y="112" fill="${c===1?G:M}" font-family="Space Grotesk" font-size="10" letter-spacing="1">${h}</text>${[0,1,2].slice(0,3-c).map(r=>`<rect x="${32+c*116}" y="${122+r*40}" width="104" height="32" rx="4" fill="${c===1&&r===0?'#06203d':'#141418'}" stroke="${c===1&&r===0?G:L}"/><rect x="${40+c*116}" y="${131+r*40}" width="${50+((r+c)%3)*14}" height="5" fill="${T}" opacity=".8"/><rect x="${40+c*116}" y="${142+r*40}" width="88" height="3" fill="#26262c"/><rect x="${40+c*116}" y="${142+r*40}" width="${[70,40,20][(r+c)%3]}" height="3" fill="${G}"/>`).join('')}`).join('')}
  <path d="M136 138 H148 M252 138 H264" stroke="${G}" stroke-dasharray="3 3"/><text x="32" y="270" fill="${M}" font-family="Space Grotesk" font-size="10">JOB ORDERS · STAGES · PRODUCTION · INVENTORY · ANDROID</text>`,
 rfid:()=>`<rect width="400" height="300" fill="#0e0e11"/>${Array.from({length:16},(_,i)=>`<path d="M${i*26} 0 V300" stroke="#18181c"/>`).join('')}
  <rect x="40" y="60" width="150" height="100" rx="6" fill="none" stroke="${T}"/><rect x="52" y="72" width="126" height="34" fill="#06203d" stroke="${G}"/><text x="60" y="94" fill="${G}" font-family="Space Grotesk" font-size="13">ACCESS GRANTED_</text>
  ${Array.from({length:12},(_,i)=>`<rect x="${56+(i%4)*30}" y="${118+Math.floor(i/4)*14}" width="22" height="9" fill="#26262c"/>`).join('')}
  <rect x="240" y="60" width="110" height="160" rx="10" fill="none" stroke="${G}" stroke-width="2"/>${[0,1,2].map(i=>`<path d="M${270+i*14} 110 a${20+i*14} ${20+i*14} 0 0 1 0 ${40+i*28}" fill="none" stroke="${G}" opacity="${1-i*.25}"/>`).join('')}
  <path d="M190 110 H240 M120 160 V230 H300 V220" stroke="${M}" fill="none" stroke-dasharray="4 4"/><rect x="280" y="236" width="40" height="20" fill="none" stroke="${T}"/><text x="40" y="270" fill="${M}" font-family="Space Grotesk" font-size="10">RC522 · KEYPAD · LCD · RELAY · SOLENOID</text>`,
 robot:()=>`<rect width="400" height="300" fill="#0e0e11"/>${Array.from({length:12},(_,i)=>`<path d="M0 ${i*26} H400" stroke="#18181c"/>`).join('')}
  ${[0,1,2,3].map(i=>`<rect x="${130+i*36}" y="${60+(i%2)*8}" width="32" height="170" fill="${i===1?'#1a1a1f':'#141418'}" stroke="${i===1?G:T}"/>`).join('')}
  <rect x="166" y="90" width="32" height="30" fill="#06203d" stroke="${G}"/><path d="M172 105 h20" stroke="${G}"/>
  <path d="M100 240 H310" stroke="${M}"/><text x="40" y="270" fill="${M}" font-family="Space Grotesk" font-size="10">MINI ROBOT · MODULAR BLOCK FORM</text>`,
 mag:()=>`<rect width="400" height="300" fill="#e9e9e4"/><rect x="60" y="40" width="130" height="190" fill="#0B0B0D"/><text x="72" y="80" fill="${G}" font-family="Anton" font-size="30">POLY</text><text x="72" y="110" fill="#F5F5F2" font-family="Anton" font-size="30">CONNECT</text><path d="M72 150 L90 130 L108 150 L126 130 L144 150 L162 130" stroke="${G}" stroke-width="2" fill="none"/><text x="72" y="215" fill="#929292" font-family="Space Grotesk" font-size="9">ISSUE 01</text>
  <rect x="200" y="40" width="130" height="190" fill="#fff" stroke="#cfcfc8"/>${Array.from({length:12},(_,i)=>`<rect x="212" y="${100+i*9}" width="${i%4===3?60:106}" height="3" fill="#bdbdb6"/>`).join('')}<text x="212" y="80" fill="#0B0B0D" font-family="Anton" font-size="20">FEATURE</text>
  <text x="60" y="262" fill="#555" font-family="Space Grotesk" font-size="10">DEPARTMENTAL E-MAGAZINE · EDITORIAL DESIGN</text>`,
 ai:()=>`<rect width="400" height="300" fill="${G}"/>${(()=>{const r=rnd(5);const N=[];for(let i=0;i<4;i++)for(let j=0;j<4;j++)N.push([220+i*42,60+j*44+(i%2)*14]);let s='';N.forEach((a,i)=>N.forEach((b,j)=>{if(b[0]-a[0]===42&&r()<.7)s+=`<path d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}" stroke="#0B0B0D" stroke-width="1"/>`}));N.forEach(a=>s+=`<circle cx="${a[0]}" cy="${a[1]}" r="7" fill="#0B0B0D"/>`);return s})()}
  <text x="36" y="120" fill="#0B0B0D" font-family="Anton" font-size="64">ALPHA</text><text x="36" y="180" fill="#0B0B0D" font-family="Anton" font-size="64">AI</text><text x="36" y="215" fill="#0B0B0D" font-family="Space Grotesk" font-size="12" font-weight="700">WORKSHOP</text><text x="36" y="262" fill="#0B0B0D" font-family="Space Grotesk" font-size="10">EVENT PROMOTION · CREATIVE COMMUNICATION</text>`
};
const cov=k=>`<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${COVER[k]()}</svg>`;
$('#projList').innerHTML=PROJECTS.map((p,i)=>`<button class="proj" data-i="${i}" data-hover="OPEN" aria-haspopup="dialog"><span class="pn">${p.n} —</span><span class="pcover-m">${cov(p.cover)}</span><span class="pt">${p.t}</span><span class="pd">${p.d}</span><span class="pc"><span class="tag">${p.cat}</span><span class="tag">${p.tools.slice(0,2).join(' · ')}</span></span></button>`).join('');
const pf=$('#projFloat');pf.innerHTML=PROJECTS.map(p=>cov(p.cover)).join('');
const drawer=$('#drawer');let lastFocus;
function openP(i){const p=PROJECTS[i];lastFocus=document.activeElement;$('#dCat').textContent=p.n+' — '+p.cat;$('#dTitle').textContent=p.t;$('#dCover').innerHTML=cov(p.cover);$('#dDesc').textContent=p.d;
 $('#dList').innerHTML=[['Tools',p.tools.join(', ')],['Role',p.role],['Year',p.year],['Outcome',p.out]].map(r=>`<div><dt>${r[0]}</dt><dd>${r[1].replace(/\[([^\]]+)\]/g,'<span class="ph">[$1]</span>')}</dd></div>`).join('');
 drawer.classList.add('open');window.lenis&&lenis.stop();if(hasG&&!RM){gsap.fromTo('.dpanel',{xPercent:100},{xPercent:0,duration:.6,ease:'expo.out'});gsap.fromTo('.drawer .scrim',{opacity:0},{opacity:1,duration:.4})}$('.dclose').focus()}
function closeP(){const done=()=>{drawer.classList.remove('open');window.lenis&&lenis.start();lastFocus&&lastFocus.focus()};if(hasG&&!RM){gsap.to('.dpanel',{xPercent:100,duration:.45,ease:'expo.in',onComplete:done});gsap.to('.drawer .scrim',{opacity:0,duration:.4})}else done()}
$('#projList').addEventListener('click',e=>{const b=e.target.closest('.proj');b&&openP(+b.dataset.i)});
drawer.addEventListener('click',e=>{if(e.target.closest('[data-close]'))closeP()});
addEventListener('keydown',e=>{if(e.key==='Escape'){if(drawer.classList.contains('open'))closeP();else if(document.body.classList.contains('menu-open'))toggleMenu(false)}
 if(e.key==='Tab'&&drawer.classList.contains('open')){const f=$$('.dpanel button,.dpanel a');if(f.length===1){e.preventDefault();f[0].focus()}}});

/* ---------- print ---------- */
const PRESS=[
 ["Digital colour printing","Toner and inkjet systems for short runs and variable data.","Coated papers · PVC","dig"],
 ["Offset printing","Plate-to-blanket-to-paper transfer for high volume, consistent colour.","Uncoated & art paper","off"],
 ["Vinyl cutting plotter","Blade-cut self-adhesive vinyl for signage and decals.","PVC vinyl film","vin"],
 ["Lamination","Thermal or cold film bonded to prints for protection and finish.","BOPP / PET film","lam"],
 ["Binding","Perfect, spiral, saddle-stitch and hard-case finishing.","Adhesives · PVC covers","bin"],
 ["Printing substrates","Matching ink chemistry to paper, board, flex and synthetic media.","Paper · Flex · PP","sub"],
 ["CMYK separation","Splitting artwork into four process inks at offset screen angles.","Ink films","cmyk"],
 ["Prepress & design","Artwork checks, bleed, imposition, colour profiles and proofs.","Digital → plate","pre"]];
const K='#0B0B0D';
const PI={dig:`<rect x="20" y="20" width="120" height="50" rx="4" fill="none" stroke="${K}"/><rect x="34" y="62" width="92" height="24" fill="#fff" stroke="${K}"/><rect x="40" y="70" width="20" height="8" fill="#00AEEF"/><rect x="62" y="70" width="20" height="8" fill="#EC008C"/><rect x="84" y="70" width="20" height="8" fill="#FFF200"/><circle cx="124" cy="34" r="4" fill="${G}" stroke="${K}"/>`,
 off:`${[40,80,120].map((x,i)=>`<circle cx="${x}" cy="44" r="18" fill="none" stroke="${K}"/><circle cx="${x}" cy="44" r="3" fill="${['#00AEEF','#EC008C','#FFF200'][i]}" stroke="${K}"/>`).join('')}<path d="M10 70 H150" stroke="${K}" stroke-width="3"/>`,
 vin:`<path d="M20 70 H150" stroke="${K}"/><rect x="60" y="20" width="16" height="30" fill="none" stroke="${K}"/><path d="M68 50 l-4 12 h8z" fill="${K}"/><path d="M30 80 C60 60 90 90 140 70" stroke="${G}" stroke-width="3" fill="none"/>`,
 lam:`<circle cx="60" cy="30" r="14" fill="none" stroke="${K}"/><circle cx="60" cy="62" r="14" fill="none" stroke="${K}"/><path d="M10 46 H150" stroke="${K}" stroke-width="2"/><path d="M10 42 H60 M10 50 H60" stroke="${G}" stroke-width="2"/>`,
 bin:`${[0,1,2,3,4,5].map(i=>`<rect x="${30+i*4}" y="${18+i*2}" width="90" height="56" fill="#fff" stroke="${K}"/>`).join('')}${[0,1,2,3,4,5,6].map(i=>`<circle cx="${56}" cy="${34+i*7}" r="3" fill="none" stroke="${K}"/>`).join('')}`,
 sub:`${['#fff','#d8d2c4',G,'#bcd3e8'].map((c,i)=>`<rect x="${20+i*12}" y="${20+i*12}" width="90" height="40" fill="${c}" stroke="${K}"/>`).join('')}`,
 cmyk:`${['#00AEEF','#EC008C','#FFF200','#111'].map((c,i)=>`<circle cx="${50+(i%2)*28}" cy="${30+Math.floor(i/2)*28}" r="22" fill="${c}" style="mix-blend-mode:multiply" opacity=".85"/>`).join('')}<text x="120" y="50" font-family="Space Grotesk" font-size="10" fill="${K}">15° 75° 0° 45°</text>`,
 pre:`<rect x="20" y="16" width="70" height="60" fill="none" stroke="${K}"/><rect x="28" y="24" width="54" height="44" fill="none" stroke="${K}" stroke-dasharray="3 3"/><path d="M14 16 h6 M20 10 v6 M90 10 v6 M90 16 h6 M14 76 h6 M20 76 v6 M90 76 v6 M90 76 h6" stroke="${K}"/><path d="M104 46 h20 l-5 -5 m5 5 l-5 5" stroke="${K}" fill="none"/><rect x="128" y="26" width="24" height="40" fill="${G}" stroke="${K}"/>`};
$('#pressList').innerHTML=PRESS.map(p=>`<article class="press"><div class="ill"><svg viewBox="0 0 160 96" aria-hidden="true">${PI[p[3]]}</svg></div><h3>${p[0]}</h3><p>${p[1]}</p><span class="mat">${p[2]}</span></article>`).join('');

/* halftone */
;if(has('#halftone'))(function(){const box=$('#halftone'),cv=$('#htCanvas'),c=cv.getContext('2d');let mx=.55,my=.45,tx=.55,ty=.45,on={c:1,m:1,y:1,k:1},raf;
 const inks=[['c','rgba(0,174,239,.9)',15,[1,0,0,0]],['m','rgba(236,0,140,.85)',75,[0,1,0,0]],['y','rgba(255,242,0,.9)',0,[0,0,1,0]],['k','rgba(17,17,17,.9)',45,[0,0,0,1]]];
 function val(x,y,ch){// coverage 0..1 per channel from two blobs
  const d1=Math.hypot(x-mx,(y-my)*1.2),d2=Math.hypot(x-(1-mx*.6),(y-(1-my*.7))*1.2);
  const a=Math.max(0,1-d1/.42),b=Math.max(0,1-d2/.36);
  return [a*.95+b*.15, a*.2+b*.9, a*.85+b*.5, Math.max(0,(a+b)-1.1)*.9+.04*(1-x)][ch]}
 function draw(){const W=cv.width,H=cv.height;c.globalCompositeOperation='source-over';c.fillStyle='#fff';c.fillRect(0,0,W,H);c.globalCompositeOperation='multiply';
  const step=Math.max(9,W/56);inks.forEach(([k,col,ang],ch)=>{if(!on[k])return;c.fillStyle=col;const a=ang*Math.PI/180,ca=Math.cos(a),sa=Math.sin(a);const R=Math.hypot(W,H);
   for(let u=-R;u<R;u+=step)for(let v=-R;v<R;v+=step){const x=W/2+u*ca-v*sa,y=H/2+u*sa+v*ca;if(x<-step||y<-step||x>W+step||y>H+step)continue;const cov=val(x/W,y/H,ch);if(cov<=.02)continue;c.beginPath();c.arc(x,y,step*.62*Math.sqrt(cov),0,7);c.fill()}});c.globalCompositeOperation='source-over'}
 function size(){const r=box.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,2);cv.width=r.width*d;cv.height=r.height*d;draw()}
 function loop(){mx+=(tx-mx)*.12;my+=(ty-my)*.12;draw();if(Math.abs(tx-mx)+Math.abs(ty-my)>.002)raf=requestAnimationFrame(loop);else raf=0}
 box.addEventListener('pointermove',e=>{const r=box.getBoundingClientRect();tx=(e.clientX-r.left)/r.width;ty=(e.clientY-r.top)/r.height;if(!raf&&!RM)raf=requestAnimationFrame(loop);if(RM){mx=tx;my=ty;draw()}});
 $$('.ht-ui button').forEach(b=>b.addEventListener('click',()=>{const k=b.dataset.c;on[k]=!on[k];b.setAttribute('aria-pressed',!!on[k]);draw()}));
 addEventListener('resize',size);new IntersectionObserver((en,o)=>{if(en[0].isIntersecting){size();o.disconnect()}}).observe(box)})();

/* ---------- timeline ---------- */
$('#tl').insertAdjacentHTML('beforeend',EXPERIENCE.map(x=>`<div class="tli"><span class="dot"></span><div class="when"><b>${x.w.replace(/\[([^\]]+)\]/,'<span class="ph" style="font-family:var(--disp)">[$1]</span>')}</b><span>${x.s}</span></div><div class="what"><h3>${x.h}</h3><div class="role">${x.r.replace(/\[([^\]]+)\]/,'<span class="ph">[$1]</span>')}</div><p>${x.p.replace(/\[([^\]]+)\]/g,'<span class="ph">[$1]</span>')}</p><div class="p-tags">${x.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div></div></div>`).join(''));

/* ---------- contact ---------- */
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2600)};
async function copy(v){try{await navigator.clipboard.writeText(v);toast('Copied: '+v)}catch(e){toast(v)}}
$('#magnet').addEventListener('click',()=>copy($('[data-copy]').dataset.copy));
$$('.c-link').forEach(a=>a.addEventListener('click',e=>{if(a.dataset.copy){e.preventDefault();copy(a.dataset.copy)}else if(a.dataset.ph){e.preventDefault();toast(a.dataset.ph+' link is a placeholder')}}));
$('#pdfBtn').addEventListener('click',e=>{e.preventDefault();toast('PDF placeholder — upload your review and link it here')});

/* ---------- cursor ---------- */
(function(){if(matchMedia('(hover:none),(pointer:coarse)').matches)return;const d=$('#cur'),r=$('#curR'),l=$('#curL');let x=innerWidth/2,y=innerHeight/2,rx=x,ry=y;
 addEventListener('pointermove',e=>{document.body.classList.add('moved');x=e.clientX;y=e.clientY;d.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`});
 (function t(){rx+=(x-rx)*.18;ry+=(y-ry)*.18;r.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(t)})();
 document.addEventListener('pointerover',e=>{const h=e.target.closest('a,button,[data-hover]');r.classList.toggle('hov',!!h);if(h)l.textContent=h.dataset.hover||'';});
 // floating project preview
 const list=$('#projList');let fx=0,fy=0,cx=0,cy=0,act=false;
 list.addEventListener('pointerenter',()=>{act=true;hasG&&gsap.to(pf,{opacity:1,scale:1,duration:.4,ease:'power3.out'})});
 list.addEventListener('pointerleave',()=>{act=false;hasG?gsap.to(pf,{opacity:0,scale:.85,duration:.3}):pf.style.opacity=0});
 list.addEventListener('pointermove',e=>{fx=e.clientX;fy=e.clientY;const b=e.target.closest('.proj');if(b){$$('svg',pf).forEach((s,i)=>s.style.opacity=i==b.dataset.i?1:0)}});
 (function t(){cx+=(fx-cx)*.12;cy+=(fy-cy)*.12;if(act){pf.style.left=cx+'px';pf.style.top=cy+'px'}requestAnimationFrame(t)})();
 // magnetic
 const m=$('#magnet');m.addEventListener('pointermove',e=>{const b=m.getBoundingClientRect();const dx=e.clientX-(b.left+b.width/2),dy=e.clientY-(b.top+b.height/2);m.style.transform=`translate(${dx*.3}px,${dy*.3}px)`});m.addEventListener('pointerleave',()=>m.style.transform='')})();

/* ---------- menu + nav ---------- */
const menu=$('#menu'),mb=$('#menuBtn');
function toggleMenu(open){document.body.classList.toggle('menu-open',open);mb.setAttribute('aria-expanded',open);mb.setAttribute('aria-label',open?'Close menu':'Open menu');
 if(open){menu.style.visibility='visible';window.lenis&&lenis.stop()}else{window.lenis&&lenis.start()}
 if(hasG&&!RM){gsap.to(menu,{clipPath:open?'inset(0 0 0% 0)':'inset(0 0 100% 0)',duration:.8,ease:'expo.inOut',onComplete:()=>{if(!open)menu.style.visibility='hidden'}});if(open)gsap.from('.menu li a',{yPercent:110,duration:.8,stagger:.05,ease:'expo.out',delay:.25})}
 else{menu.style.clipPath=open?'inset(0)':'inset(0 0 100% 0)';if(!open)menu.style.visibility='hidden'}}
mb.addEventListener('click',()=>toggleMenu(!document.body.classList.contains('menu-open')));
function goTo(hash){const el=hash==='#top'?document.body:document.querySelector(hash);if(!el)return;if(window.lenis)lenis.scrollTo(hash==='#top'?0:el,{duration:1.4,offset:0});else el.scrollIntoView({behavior:RM?'auto':'smooth'})}
document.addEventListener('click',e=>{const a=e.target.closest('a[data-link]');if(!a)return;const h=a.getAttribute('href');if(!h.startsWith('#'))return;e.preventDefault();
 const fromMenu=document.body.classList.contains('menu-open');
 if(hasG&&!RM&&fromMenu){const bars=$$('#wipe i');gsap.timeline().to(bars,{scaleY:1,duration:.5,stagger:.05,ease:'expo.in',transformOrigin:'bottom'}).add(()=>{toggleMenu(false);gsap.set(menu,{clipPath:'inset(0 0 100% 0)',visibility:'hidden'});const T=h==='#top'?0:document.querySelector(h);if(T!==null){window.lenis?lenis.scrollTo(T,{immediate:true}):(T?T.scrollIntoView():scrollTo(0,0))}}).to(bars,{scaleY:0,duration:.6,stagger:.05,ease:'expo.out',transformOrigin:'top'})}
 else{if(fromMenu)toggleMenu(false);goTo(h)}});
let lastY=0;addEventListener('scroll',()=>{const y=scrollY,n=$('#nav');n.classList.toggle('hide',y>lastY&&y>400&&!document.body.classList.contains('menu-open'));n.classList.toggle('solid',y>60);lastY=y},{passive:true});


/* ---------- project filters, deep links, home feature ---------- */
(function(){
 const PG=["All",...new Set(PROJECTS.map(p=>p.g))];
 if(has('#pfilters')){
  $('#pfilters').innerHTML=PG.map((g,i)=>`<button aria-pressed="${i===0}" data-g="${g}">${g}<span class="cnt">${g==='All'?PROJECTS.length:PROJECTS.filter(p=>p.g===g).length}</span></button>`).join('');
  $('#pfilters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('#pfilters button').forEach(x=>x.setAttribute('aria-pressed',x===b));const g=b.dataset.g;
   const cards=$$('.proj');const apply=()=>cards.forEach(c=>c.classList.toggle('hidden',!(g==='All'||PROJECTS[+c.dataset.i].g===g)));
   if(hasG&&!RM){gsap.to(cards,{opacity:0,y:10,duration:.18,onComplete:()=>{apply();gsap.fromTo(cards.filter(c=>!c.classList.contains('hidden')),{opacity:0,y:24},{opacity:1,y:0,duration:.45,stagger:.06,ease:'power3.out',onComplete:()=>window.ScrollTrigger&&ScrollTrigger.refresh()})}})}else apply()});
 }
 if(has('#exCover'))$('#exCover').innerHTML=cov('jobflow').replace('xMidYMid slice','xMidYMid meet');
 document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(!b||e.target.closest('a'))return;openP(+b.dataset.open)});
 const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 if(has('#projList')&&location.hash){const i=PROJECTS.findIndex(p=>'#'+slug(p.t)===location.hash);if(i>=0)setTimeout(()=>openP(i),900)}
})();

/* ---------- page transitions ---------- */
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.defaultPrevented||a.target||e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;
 const href=a.getAttribute('href');if(!/^[a-z-]+\.html(#.*)?$/.test(href))return;
 const here=location.pathname.split('/').pop()||'index.html';if(href===here)return;
 e.preventDefault();const go=()=>{location.href=href};
 if(!hasG||RM){go();return}
 const bars=$$('#wipe i');gsap.to(bars,{scaleY:1,duration:.45,stagger:.05,ease:'expo.in',transformOrigin:'bottom',onComplete:go});setTimeout(go,1200)});
addEventListener('pageshow',e=>{if(e.persisted){$$('#wipe i').forEach(i=>{i.style.transform='scaleY(0)'});document.body.classList.remove('menu-open')}});

/* ---------- card glow + tilt ---------- */
if(!matchMedia('(hover:none),(pointer:coarse)').matches&&!RM)$$('.ex-card').forEach(c=>{
 c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');c.style.transform=`perspective(900px) rotateX(${(.5-y)*5}deg) rotateY(${(x-.5)*6}deg)`});
 c.addEventListener('pointerleave',()=>{c.style.transform=''})});

/* ---------- polymer lab ---------- */
if(has('#lab'))(function(){
 const MONO={PE:{name:'Polyethylene',m0:28.05,f:'[ –CH₂–CH₂– ]ₙ',side:null},PP:{name:'Polypropylene',m0:42.08,f:'[ –CH₂–CH(CH₃)– ]ₙ',side:'CH₃'},PVC:{name:'PVC',m0:62.50,f:'[ –CH₂–CHCl– ]ₙ',side:'Cl'},PS:{name:'Polystyrene',m0:104.15,f:'[ –CH₂–CH(C₆H₅)– ]ₙ',side:'Ph'}};
 const svg=$('#labSvg'),U=12,ROWS=3,MAXV=U*ROWS,DX=21,X0=48,Y0=64,RH=104;let kind='PE',n=0,timer;
 $('#labMono').innerHTML=Object.keys(MONO).map(k=>`<button aria-pressed="${k===kind}" data-k="${k}" title="${MONO[k].name}">${k}</button>`).join('');
 const atom=(i,a)=>{const row=Math.floor(i/U),col=i%U,j=col*2+a,x=row%2?X0+(U*2-1-j)*DX:X0+j*DX;return [x,Y0+row*RH+((j+row)%2?12:-12)]};
 function sideG(x,y,up){const s=MONO[kind].side;if(!s)return'';const d=up?-1:1,y2=y+d*20;
  if(s==='Ph'){const cy=y+d*28,p=Array.from({length:6},(_,k)=>{const t=Math.PI/3*k+Math.PI/6;return(x+9*Math.cos(t)).toFixed(1)+','+(cy+9*Math.sin(t)).toFixed(1)}).join(' ');return`<path d="M${x} ${y}V${y+d*19}" stroke="#F5F5F2"/><polygon points="${p}" fill="none" stroke="#F5F5F2"/><circle cx="${x}" cy="${cy}" r="4" fill="none" stroke="#1F8FFF"/>`}
  return`<path d="M${x} ${y}V${y2}" stroke="#F5F5F2"/><circle cx="${x}" cy="${y2+d*5}" r="${s==='Cl'?7:5}" fill="${s==='Cl'?'#1F8FFF':'#0d0d10'}" stroke="#F5F5F2"/>`}
 function draw(added){const v=Math.min(n,MAXV);let s='',prev=null;
  for(let i=0;i<v;i++){const a=atom(i,0),b=atom(i,1);let g='';if(prev)g+=`<path d="M${prev[0]} ${prev[1]}L${a[0]} ${a[1]}" stroke="#1F8FFF" stroke-width="2"/>`;
   const lo=a[1]>b[1]?a:b;g+=`<path d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}" stroke="#1F8FFF" stroke-width="2"/>`+sideG(lo[0],lo[1],false)+`<circle cx="${a[0]}" cy="${a[1]}" r="4" fill="#0d0d10" stroke="#1F8FFF" stroke-width="1.5"/><circle cx="${b[0]}" cy="${b[1]}" r="4" fill="#0d0d10" stroke="#1F8FFF" stroke-width="1.5"/>`;
   s+=`<g class="u${added&&i>=v-added?' new':''}">${g}</g>`;prev=b}
  if(!n)s=`<g fill="#929292" font-family="Space Grotesk" font-size="14" text-anchor="middle"><text x="300" y="160">Tap here to start a chain</text><text x="300" y="184" font-size="11" letter-spacing="2">EACH TAP ADDS ONE REPEAT UNIT</text></g>`;
  if(n>MAXV)s+=`<text x="552" y="322" fill="#1F8FFF" font-family="Space Grotesk" font-size="13" text-anchor="end">+ ${(n-MAXV).toLocaleString('en-IN')} more units…</text>`;
  svg.innerHTML=s;
  const M=MONO[kind];$('#labN').textContent=n.toLocaleString('en-IN');$('#labM').textContent=Math.round(n*M.m0).toLocaleString('en-IN')+' g/mol';
  $('#labL').textContent=(n*0.254).toFixed(n<40?1:0)+' nm';$('#labM0').textContent=M.m0+' g/mol';$('#labFormula').innerHTML=`<b class="lime">${M.name}</b> &nbsp;${M.f}`;
  $('#labState').textContent=n===0?'Monomer only':n<10?'Oligomer — still a short chain':n<100?'Low polymer — getting long':n<1000?'Polymer — chains start to entangle':'High polymer — real plastic territory';
  $('#labMeter').style.width=Math.min(100,Math.log10(n+1)/4*100)+'%'}
 const add=k=>{n+=k;draw(Math.min(k,MAXV))};
 $('#labStage').addEventListener('click',()=>add(1));
 $('#labStage').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();add(1)}});
 $('#lab10').addEventListener('click',()=>add(10));
 $('#labPoly').addEventListener('click',()=>{clearInterval(timer);let k=0;timer=setInterval(()=>{add(n<MAXV?1:25);if(++k>=(n<MAXV?50:20))clearInterval(timer)},RM?0:40)});
 $('#labReset').addEventListener('click',()=>{clearInterval(timer);n=0;draw()});
 $('#labMono').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;kind=b.dataset.k;$$('#labMono button').forEach(x=>x.setAttribute('aria-pressed',x===b));clearInterval(timer);n=Math.min(n,MAXV);draw(n)});
 draw();
})();

/* ---------- loader + animations ---------- */
function endLoader(){const l=$('#loader');l.style.display='none';document.documentElement.classList.add('loaded')}
function splitWords(el){const out=[];el.childNodes.forEach(n=>{});const walk=(node)=>{[...node.childNodes].forEach(ch=>{if(ch.nodeType===3){const frag=document.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){frag.appendChild(document.createTextNode(w));return}const s=document.createElement('span');s.className='w';s.textContent=w;if(node.classList&&node.classList.contains('hl'))s.classList.add('hl');frag.appendChild(s);out.push(s)});ch.replaceWith(frag)}else if(ch.nodeType===1){walk(ch);if(ch.classList.contains('hl'))ch.replaceWith(...ch.childNodes)}})};walk(el);return out}

if(!hasG||RM){
  endLoader();try{sessionStorage.setItem('kkv','1')}catch(e){}$$('#wipe i').forEach(i=>i.style.transform='scaleY(0)');document.documentElement.classList.remove('nl');$$('.manifesto h2 .w').forEach(w=>w.style.opacity=1);
  
  if(!hasG) console.warn('GSAP not loaded — static mode');
}else{
  gsap.registerPlugin(ScrollTrigger);
  // smooth scroll
  if(window.Lenis){window.lenis=new Lenis({duration:1.15,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
  // manifesto words
  const words=has('#manifesto')?splitWords($('#manifesto')):[];
  // signature stroke prep
  const intro=gsap.timeline({paused:true});
  if(has('.hero')){const sp=$('#sigPath');const sl=sp.getTotalLength();
  intro.from('.hero .hl1',{yPercent:110,duration:1.2,ease:'expo.out'})
       .from('.hero .hl2',{yPercent:110,duration:1.2,ease:'expo.out'},'-=1.05')
       .from('#heroPortrait',{yPercent:12,opacity:0,duration:1.6,ease:'expo.out'},'-=1.2')
       .from('#heroTopo path',{opacity:0,scale:.92,transformOrigin:'72% 50%',stagger:.03,duration:1.4,ease:'power2.out'},'-=1.6')
       .fromTo(sp,{strokeDasharray:sl,strokeDashoffset:sl},{strokeDashoffset:0,duration:1.9,ease:'power2.inOut'},'-=1.1')
       .from('.hey',{opacity:0,y:20,rotate:-14,duration:.8,ease:'back.out(2)'},'-=1.2')
       .from('#hcAtoms circle',{scale:0,transformOrigin:'center',stagger:.02,duration:.5,ease:'back.out(3)'},'-=1.6')
       .from('.hero-meta > *',{y:24,opacity:0,stagger:.08,duration:.8,ease:'power3.out'},'-=1.2')
       ;intro.fromTo('#nav',{yPercent:-120,y:0},{yPercent:0,y:0,duration:.9,ease:'expo.out',clearProps:'transform'},.2);}else intro.fromTo('#nav',{yPercent:-120,y:0},{yPercent:0,y:0,duration:.9,ease:'expo.out',clearProps:'transform'},.2);
  // loader
  const o={n:0},bar=$('#ld-bar'),num=$('#ld-n');
  gsap.set('#ld-path',{strokeDasharray:800,strokeDashoffset:800});
  const NL=document.documentElement.classList.contains('nl');
  try{sessionStorage.setItem('kkv','1')}catch(e){}
  if(NL){endLoader();gsap.fromTo('#wipe i',{scaleY:1},{scaleY:0,transformOrigin:'top',duration:.7,stagger:.05,ease:'expo.out',delay:.05,onComplete:()=>document.documentElement.classList.remove('nl')});intro.play(0)}
  const lt=NL?gsap.timeline():gsap.timeline({onComplete:()=>{
     gsap.timeline().to('#shutter',{y:'0%',duration:.6,ease:'expo.inOut'})
       .add(()=>{endLoader()}).to('#shutter',{y:'-100%',duration:.8,ease:'expo.inOut'}).add(()=>intro.play(),'-=.5')}});
  if(!NL)lt.to(o,{n:100,duration:1.9,ease:'power2.inOut',onUpdate:()=>{num.textContent=Math.round(o.n);bar.style.width=o.n+'%'}})
    .to('#ld-path',{strokeDashoffset:0,duration:1.9,ease:'power2.inOut'},0)
    .from('#ld-atoms circle',{scale:0,transformOrigin:'center',stagger:.11,duration:.4,ease:'back.out(3)'},0);
  setTimeout(()=>{if($('#loader').style.display!=='none'){endLoader();intro.progress(1)}},6000);

  // hero scroll: portrait drift, chain parallax, name scale
  if(has('.hero'))gsap.to('#heroPortrait',{yPercent:14,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  if(has('.hero'))gsap.to('#heroChain',{y:-160,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  if(has('.hero'))gsap.to('.hero-name',{yPercent:-18,opacity:.2,ease:'none',scrollTrigger:{trigger:'.hero',start:'30% top',end:'bottom top',scrub:true}});
  if(has('.hero'))gsap.to('#heroTopo',{rotate:6,scale:1.15,transformOrigin:'70% 50%',ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});

  // section headings
  $$('.sec-head .line-mask>span').forEach(s=>gsap.from(s,{yPercent:110,duration:1.1,ease:'expo.out',scrollTrigger:{trigger:s,start:'top 88%'}}));
  $$('.contact .line-mask>span').forEach(s=>gsap.from(s,{yPercent:110,duration:1.1,ease:'expo.out',scrollTrigger:{trigger:s,start:'top 90%'}}));
  // staggered paragraphs
  $$('.reveal-lines').forEach(el=>{const w=splitWords(el);gsap.from(w,{yPercent:60,opacity:0,duration:.9,stagger:.018,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 82%'}})});
  if(has('.panels'))gsap.from('.panel',{opacity:0,y:30,stagger:.07,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.panels',start:'top 82%'}});
  if(has('.panels'))gsap.fromTo('.sig-small',{strokeDasharray:400,strokeDashoffset:400},{strokeDashoffset:0,duration:2,ease:'power2.inOut',scrollTrigger:{trigger:'.panels',start:'top 70%'}});
  // manifesto scrub
  if(has('.manifesto'))gsap.to(words,{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:'.manifesto',start:'top 70%',end:'bottom 60%',scrub:true}});
  if(has('.manifesto'))gsap.from('.manifesto .seal',{rotate:-180,opacity:0,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:'.manifesto',start:'top 80%'}});
  // about
  if(has('.about-photo'))gsap.fromTo('.about-photo .frame img',{yPercent:-10},{yPercent:0,ease:'none',scrollTrigger:{trigger:'.about-photo',start:'top bottom',end:'bottom top',scrub:true}});
  if(has('.about-photo'))gsap.from('.about-photo .frame',{clipPath:'inset(100% 0 0 0)',duration:1.4,ease:'expo.inOut',scrollTrigger:{trigger:'.about-photo',start:'top 80%'}});
  if(has('.about-photo'))gsap.from('.about-photo .float',{y:80,rotate:6,opacity:0,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:'.about-photo',start:'top 60%'}});
  if(has('.about-photo'))gsap.to('.about-photo .float',{y:-60,ease:'none',scrollTrigger:{trigger:'.about-photo',start:'top bottom',end:'bottom top',scrub:true}});
  if(has('.info'))gsap.from('.info .row',{opacity:0,x:-20,stagger:.08,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'.info',start:'top 85%'}});
  // horizontal plates
  if(has('#plates'))ScrollTrigger.matchMedia({
   '(min-width:901px)':function(){const pl=$('#plates');const dist=()=>pl.scrollWidth-innerWidth;
     const tw=gsap.to(pl,{x:()=>-dist(),ease:'none',scrollTrigger:{trigger:'#hscroll',start:'center center',end:()=>'+='+dist(),pin:true,scrub:1,invalidateOnRefresh:true,onUpdate:s=>$('#hsProg').style.width=(s.progress*100)+'%'}});
     $$('.plate').forEach(p=>{const dr=$$('.dr',p);dr.forEach(d=>{const L=d.getTotalLength?d.getTotalLength():600;gsap.fromTo(d,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,ease:'power1.out',scrollTrigger:{trigger:p,containerAnimation:tw,start:'left 85%',end:'left 30%',scrub:true}})})});},
   '(max-width:900px)':function(){$$('.plate .dr').forEach(d=>{const L=d.getTotalLength?d.getTotalLength():600;gsap.fromTo(d,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:1.8,ease:'power2.out',scrollTrigger:{trigger:'#plates',start:'top 75%'}})})}
  });
  if(has('#topics'))gsap.from('.topic',{opacity:0,y:40,stagger:.06,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'#topics',start:'top 82%'}});
  // research
  if(has('.feature'))gsap.from('.feature',{clipPath:'inset(0 0 100% 0)',duration:1.3,ease:'expo.inOut',scrollTrigger:{trigger:'.feature',start:'top 80%'}});
  if(has('.feature'))gsap.from('#featViz rect',{scaleX:0,transformOrigin:'left',stagger:.04,duration:.9,ease:'expo.out',scrollTrigger:{trigger:'.feature',start:'top 65%'}});
  if(has('.paper'))ScrollTrigger.batch('.paper',{start:'top 90%',onEnter:b=>gsap.from(b,{opacity:0,y:40,stagger:.08,duration:.8,ease:'power3.out',overwrite:true})});
  if(has('#resources'))gsap.from('.resources a',{opacity:0,y:30,stagger:.05,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'#resources',start:'top 88%'}});
  // projects
  if(has('#projList'))gsap.from('.proj',{opacity:0,y:40,stagger:.1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'#projList',start:'top 80%'}});
  // print
  if(has('#pressList'))gsap.from('.press',{opacity:0,y:30,stagger:.05,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'#pressList',start:'top 85%'}});
  if(has('.cmyk-bar'))gsap.from('.cmyk-bar i',{scaleX:0,transformOrigin:'left',stagger:.1,duration:.8,ease:'expo.out',scrollTrigger:{trigger:'.cmyk-bar',start:'top 95%'}});
  // timeline
  if(has('#tl'))gsap.to('#spineFill',{height:'100%',ease:'none',scrollTrigger:{trigger:'#tl',start:'top 70%',end:'bottom 70%',scrub:true}});
  $$('.tli').forEach(t=>{ScrollTrigger.create({trigger:t,start:'top 70%',onEnter:()=>t.classList.add('on'),onLeaveBack:()=>t.classList.remove('on')});gsap.from(t.querySelector('.what'),{opacity:0,x:40,duration:.9,ease:'power3.out',scrollTrigger:{trigger:t,start:'top 80%'}})});
  // contact
  if(has('.c-links'))gsap.from('.c-link',{opacity:0,y:30,stagger:.08,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.c-links',start:'top 92%'}});
  if(has('.contact'))gsap.from('.magnet',{scale:0,rotate:-90,duration:1.2,ease:'expo.out',scrollTrigger:{trigger:'.contact',start:'top 60%'}});
  if(has('footer'))gsap.from('footer .f-big span',{yPercent:60,opacity:0,stagger:.12,duration:1,ease:'expo.out',scrollTrigger:{trigger:'footer',start:'top 85%'}});
  if(has('.explore'))gsap.from('.ex-card',{opacity:0,y:40,stagger:.07,duration:.8,ease:'power3.out',scrollTrigger:{trigger:'.explore',start:'top 85%'}});
  if(has('#lab'))gsap.from('#lab',{opacity:0,y:40,duration:.9,ease:'power3.out',scrollTrigger:{trigger:'#lab',start:'top 85%'}});
  addEventListener('load',()=>ScrollTrigger.refresh());
  document.fonts&&document.fonts.ready.then(()=>ScrollTrigger.refresh());
}
