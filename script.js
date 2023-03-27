$(document).ready(function() {
    var index = 0;
    var images = $(".carrossel img");
    
    setInterval(function() {
      images.removeClass("active");
      index++;
      if (index >= images.length) {
        index = 0;
      }
      images.eq(index).addClass("active");
    }, 3000);
  });
  
  window.onload = function() {
    var texto = "Lucas Rodrigues Corretor";
    var paragrafo = document.createElement("p");
    paragrafo.innerHTML = texto;
    document.querySelector(".texto").appendChild(paragrafo);
  }
  