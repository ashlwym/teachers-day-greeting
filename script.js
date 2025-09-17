const flowers = document.querySelector('.flowers');
setInterval(() => {
  flowers.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
}, 1000);
