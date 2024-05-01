let nav = document.querySelector("nav");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


//cards categorias geral
circlesCtgGeral.forEach(circleCtgGeral => {
  const divCircleCtgGeral = document.createElement('div');
  divCircleCtgGeral.innerHTML = `
<a href="${circleCtgGeral.linkCtgCirculo}">
  <img src="imagens/${circleCtgGeral.imgCirculo}" alt="">
  <h3>${circleCtgGeral.nomeCtgCirculo}</h3>
</a>
    `;
    divCircleCtgGeral.classList.add("animCirclesCtg");
  document.querySelector(".categories-links").appendChild(divCircleCtgGeral);
});
//fim cards categorias geral


//cards categorias especificas
//eider
cardsEider.forEach(cardEider => {
  const divCardEider = document.createElement('div');
  divCardEider.innerHTML = `
<a href="#">
  <img src="imagens/imgartg/${cardEider.imgAve}" alt="">
  <h1>${cardEider.nomeAve}</h1>
</a>
    `;
  document.querySelector(".categoryLine-artgs.eider").appendChild(divCardEider);
});

//pinguins
cardsPinguins.forEach(cardPinguins => {
  const divCardPinguins = document.createElement('div');
  divCardPinguins.innerHTML = `
<a href="#">
  <img src="imagens/imgartg/${cardPinguins.imgAve}" alt="">
  <h1>${cardPinguins.nomeAve}</h1>
</a>
    `;
  document.querySelector(".categoryLine-artgs.pinguins").appendChild(divCardPinguins);
});

//gansos e mergansos
cardsGansos.forEach(cardGansos => {
  const divCardGansos = document.createElement('div');
  divCardGansos.innerHTML = `
<a href="#">
  <img src="imagens/${cardGansos.imgAve}" alt="">
  <h1>${cardGansos.nomeAve}</h1>
</a>
    `;
  document.querySelector(".categoryLine-artgs.gansos").appendChild(divCardGansos);
});