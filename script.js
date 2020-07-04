// criar barra
let bar = document.createElement('div');

//container do texto
const postWrap = document.querySelector(".post-wrap");

//estilo da barra
bar.style.height = "4px";
bar.style.width = "500px";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999"
bar.style.transition = "0.2s"

//adiciona no corpo da pagina
document.body.append(bar);

// ---- Atualizar pagina
function updateBar() {
  //tamanho que a caixa tem
  // console.log(postWrap.offsetHeight);
  const textHeight = postWrap.offsetHeight;

  //verificar em que posicao da pagina eu estou 
  // console.log(window.pageYOffset);
  const pagePosition = window.pageYOffset;

  //regra de 3
  const updatedBar = pagePosition * 100 / textHeight;

  bar.style.width = updatedBar + "%";
}

window.addEventListener("load", () => {
  //verificando o movimento de scroll
  document.addEventListener("scroll", updateBar);
})