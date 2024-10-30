let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Soy estudiante de Ingeniería en Sistemas Computacionales, apasionada por el desarrollo web con enfoque tanto en Frontend como en Backend.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
