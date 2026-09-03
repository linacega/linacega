const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰'});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');if(menuBtn)menuBtn.textContent='☰'}));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('whatsapp-form')?.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const company=document.getElementById('company').value.trim();const challenge=document.getElementById('challenge').value;const msg=document.getElementById('message').value.trim();const text=`Hola WM Logistik, soy ${name}${company?` de ${company}`:''}. Quiero revisar nuestra operación. El principal reto es: ${challenge}.${msg?` Contexto: ${msg}`:''}`;window.open(`https://wa.me/573245835162?text=${encodeURIComponent(text)}`,'_blank','noopener')});
