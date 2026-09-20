// Muhammad Zahid - DevOps Portfolio JS
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', e=>{
  e.preventDefault();
  msg.textContent = "Message received! I will contact you soon at mz6366048@gmail.com";
  form.reset();
  setTimeout(()=>msg.textContent="",4000);
});
console.log("DevOps Portfolio - Muhammad Zahid Loaded");