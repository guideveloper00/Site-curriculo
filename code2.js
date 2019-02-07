var teste = false;


function inicio () {
        
    var texto = document.getElementById("texto");
    
    texto.style.display = 'block';
    
};


 function final () {
    var texto = document.getElementById("texto");
    
    texto.style.display = 'none';
     
     
};
     
     
var minhaHistoria = document.getElementById("conheça");




minhaHistoria.onclick = this.inicio;
                   
minhaHistoria.ondblclick = this.final;
                 
  
  
       









