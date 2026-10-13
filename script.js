(function(){
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
  const root=document.documentElement;
  // Preloader
  const pre=$('#preloader'), bar=$('#preloader-bar'); let p=0;
  const tick=setInterval(()=>{p=Math.min(100,p+Math.random()*25);bar.style.width=p+'%';if(p>=100){clearInterval(tick);setTimeout(()=>pre.classList.add('done'),250);}},80);
  window.addEventListener('load',()=>{p=100;});
  // Theme
  const savedTheme=localStorage.getItem('theme'); if(savedTheme) root.dataset.theme=savedTheme;
  $('#theme-toggle').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);});
  // Language (Norwegian default)
  function setLang(l){root.lang=l;$$('[data-no]').forEach(el=>{el.textContent=el.dataset[l];});$('#lang-toggle').textContent=l==='no'?'EN':'NO';localStorage.setItem('lang',l);}
  setLang(localStorage.getItem('lang')==='en'?'en':'no');
  $('#lang-toggle').addEventListener('click',()=>setLang(root.lang==='no'?'en':'no'));
  // Mobile menu
  const links=$('#nav-links');
  $('#menu-toggle').addEventListener('click',()=>links.classList.toggle('open'));
  links.addEventListener('click',e=>{if(e.target.tagName==='A')links.classList.remove('open');});
  // Custom cursor
  const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(fine){const c=$('#cursor'),d=$('#cursor-dot');let mx=0,my=0,cx=0,cy=0;
    document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;d.style.left=mx+'px';d.style.top=my+'px';});
    (function loop(){cx+=(mx-cx)*.15;cy+=(my-cy)*.15;c.style.left=cx+'px';c.style.top=cy+'px';requestAnimationFrame(loop);})();
    $$('a,button,[data-tilt]').forEach(el=>{el.addEventListener('mouseenter',()=>c.classList.add('hover'));el.addEventListener('mouseleave',()=>c.classList.remove('hover'));});
    // Magnetic
    $$('[data-magnetic]').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.3}px)`;});el.addEventListener('mouseleave',()=>el.style.transform='');});
    // 3D tilt
    $$('[data-tilt]').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(1000px) rotateX(${-y*8}deg) rotateY(${x*8}deg) translateZ(4px)`;});el.addEventListener('mouseleave',()=>el.style.transform='');});
  }
  // Scroll progress + navbar hide/show
  const prog=$('#scroll-progress'), nav=$('#nav'); let last=0;
  window.addEventListener('scroll',()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;prog.style.width=(h>0?y/h*100:0)+'%';
    nav.classList.toggle('scrolled',y>50);nav.classList.toggle('hidden',y>last&&y>300&&!links.classList.contains('open'));last=y;},{passive:true});
  // Scroll reveal
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});
  $$('[data-animate]').forEach(el=>io.observe(el));
  // Project filter
  $$('.filter').forEach(b=>b.addEventListener('click',()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;
    $$('.card').forEach(c=>c.classList.toggle('hide',f!=='all'&&c.dataset.category!==f));}));
  $('#year').textContent=new Date().getFullYear();
})();
