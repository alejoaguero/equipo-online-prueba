const typed = new Typed('.typed ', {
    strings: [
        '<i class="texto-automatico">capacitaciones.</i>',
        '<i class="texto-automatico">on boarding.</i>',
        '<i class="texto-automatico">fortalecer vinculos.</i>',
        '<i class="texto-automatico">una actividad virtual.</i>',
        '<i class="texto-automatico">fomentar valores de la empresa.</i>',
        '<i class="texto-automatico">trabajar o detectar habilidades blandas.</i>',
        '<i class="texto-automatico">solo diversión.</i>'
    ],
    stringsElement: '#text-autocomplete', // ID del elemento que contiene cadenas de texto a mostrar.
    typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
})

// inicializar el efecto de scroll
AOS.init();

// 
$(document).ready(function(){

  if($('.brands_slider').length)
  {
  var brandsSlider = $('.brands_slider');
  
  brandsSlider.owlCarousel(
  {
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  nav:false,
  dots:false,
  autoWidth:true,
  items:8,
  margin:42
  });
  
  if($('.brands_prev').length)
  {
  var prev = $('.brands_prev');
  prev.on('click', function()
  {
  brandsSlider.trigger('prev.owl.carousel');
  });
  }
  
  if($('.brands_next').length)
  {
  var next = $('.brands_next');
  next.on('click', function()
  {
  brandsSlider.trigger('next.owl.carousel');
  });
  }
  }
  
  
  });