// liga da justiça zack snyder,17,ação,fantasia
// vingadores ultimato,12,ficção,ação
// enrolados,LIVRE,filme musical, familiar
// alerta vermelho,14,mistério, crime
// deadpool 3, 18, comédia, aventura

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendação de filmes");
  createSpan("Sua idade:")
      campoIdade = createInput("10");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background( "blue");
  let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade,gostaDeFantasia, gostaDeAventura);

  fill(color(75, 0, 115));
  textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "Liga da Justiça Zack Snyder";
          } else{
         return "Enrolados";
        }
    } else {
            if(gostaDeFantasia){
                return "Deadpool 3";
            } else {
                return "Vingadores Ultimato";
        }
    }
}