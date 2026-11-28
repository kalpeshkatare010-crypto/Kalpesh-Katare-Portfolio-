document.documentElement.classList.add('js');
(function(){
  var els=[].slice.call(document.querySelectorAll('.rv,.rv-up'));
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px',threshold:.12});
  els.forEach(function(e){io.observe(e)});
  // signature draws itself
  var sg=document.querySelector('.sg');
  if(sg&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var L=sg.getTotalLength();sg.style.strokeDasharray=L;sg.style.strokeDashoffset=L;
    var so=new IntersectionObserver(function(es){if(es[0].isIntersecting){sg.style.transition='stroke-dashoffset 2.6s cubic-bezier(.6,0,.2,1)';sg.style.strokeDashoffset=0;so.disconnect()}},{threshold:.6});so.observe(sg)}
  // hero photo: gentle parallax
  var ph=document.querySelector('.hero-ph img');
  if(ph&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var t=false;addEventListener('scroll',function(){if(t)return;t=true;requestAnimationFrame(function(){var y=Math.min(scrollY,800);ph.style.transform='translateX(-50%) translateY('+(y*.18)+'px) scale('+(1+y*.00012)+')';t=false})},{passive:true})}
})();
