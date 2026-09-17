const cursor=document.querySelector('.cursor-glow');
document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.tilt-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    if(window.innerWidth<768)return;
    const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg) translateY(-7px)`;
  });
  card.addEventListener('mouseleave',()=>card.style.transform='');
});

const topBtn=document.getElementById('topBtn');
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',()=>{
    const nav=document.getElementById('nav');
    if(nav.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(nav).hide();
  });
});
