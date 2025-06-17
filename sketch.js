//   prompt utilizado da IA para auxiliar na criação. Criar um codigo de plantação de arvores para diminuir a tenperatura na plataforma p5js
//este jogo tem com objetivo de diminuir a tenperatura do anbiente do canpo. plantando arvores.
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);
}let plantas = [];
let temperatura = 30; // Temperatura inicial em graus Celsius

function setup() {
  createCanvas(400, 400);
  textSize(20);
}

function draw() {
  background(150, 220, 195); // Cor do céu

  // Mostrar a temperatura
  fill(20);
  text(`Temperatura: ${temperatura.toFixed(1)}°C`, 20, 30);

  // Mostrar instruções
  text(' Clique para plantar uma árvore e  ', 01, 50)
   text   ('ajudar a diminuir a temperatura!  ', 01, 70);
  // Desenhar o solo
  fill(139, 229, 29);
  rect(0, height - 100, width, 200);

  // Atualizar e desenhar as plantas
  for (let i = 0; i < plantas.length; i++) {
    plantas[i].mostrar(rotate);
    plantas[i].crescer();

    // Se a planta estiver grande o suficiente, ela ajuda a diminuir a temperatura
    if (plantas[i].tamanho > 57 && !plantas[i].ajudou) {
      temperatura -= 1.1; // Diminui a temperatura
      plantas[i].ajudou = true; // Para não diminuir várias vezes
    }
  }

  // Limitar a temperatura para não ficar negativa
  if (temperatura < -02) {
    temperatura = -02;
  }
}

// Classe para as plantas
class Planta {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamanho = 50;
    this.ajudou = false; // Para controlar se já ajudou a diminuir a temperatura
  }

  mostrar() {
    fill(34, 149, 34);
    noStroke();
    ellipse(this.x, this.y - this.tamanho / 2, this.tamanho, this.tamanho);
    // Tronco
    fill(139, 79, 19);
    rect(this.x - 5, this.y, 6, this.tamanho / 3);
  }

  crescer() {
    if (this.tamanho < 60) {
      this.tamanho += 0.5; // Crescimento lento
    }
  }
}
function mousePressed() {
  // Plantar uma nova árvore na posição do mouse
  plantas.push(new Planta(mouseX, height - 100));    

}
 