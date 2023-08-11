function setup() {
  
    createCanvas(400, 400);
    
  }
  
  function draw() {
    
    background("green");
    
    fill("black");
    
    textSize (64);
    
    textAlign (CENTER, CENTER);
    
    let maximo = width;
    
    let minimo = 0;
    
    let palavra = "Amorim"; 
    
    // o número é responsável por deixar ao menos um  caractere na 
    
    // tela mesmo com a posição do mouse 0
    
    let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
    
    // passando todos os caracteres da posoção 0 até a passada pelo map
    
    let parcial = palavra.substring(0, quantidade)
    
    text (parcial, 200, 200)
  
  }
  