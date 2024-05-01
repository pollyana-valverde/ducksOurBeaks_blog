let nav = document.querySelector("nav");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


//adicionando card nas categorias do blog
cardsCatgArtg.forEach(cardCatgArtg => {
  const divCardCatgArtg = document.createElement('div');
  divCardCatgArtg.innerHTML = `

  <a href="${cardCatgArtg.linkCategoriasArtg}"> 
    <div class="links-conteiner">
      <div class="links-conteiner-content">
        <img src="imagens/${cardCatgArtg.imgCategoriaArtg}"> 
        <div class="artg-content-txt">
          <h1>${cardCatgArtg.nomeCategoriaArtg}</h1>
          <h3>${cardCatgArtg.descCategoriaArtg}</h3>
        </div>
      </div>
    </div>
  </a>
    `;
    divCardCatgArtg.classList.add("col");
  document.querySelector(" .artg-categories-links ").appendChild(divCardCatgArtg);
});
//fim adicionando card nas categorias do blog



//adicionando card nas parcerias
cardsParcerias.forEach(cardParceria => {
  const divCardParceria = document.createElement('div');
  divCardParceria.innerHTML = `
  <div class="parceria-conteiner-individual-content">
    <img src="imagens/${cardParceria.LogoPar}" alt="logo da ong">
    <h3>${cardParceria.sobrePar}</h3>
    <h2>
      <a href="#">Leia mais ></a>
    </h2>
  </div>
    `;
  divCardParceria.classList.add("col-lg-2", "parceria-conteiner-individual");
  document.querySelector(" .parceria-conteiner-total-content").appendChild(divCardParceria);
});
//fim adicionando card nas parcerias



//adicionando card nos depoimentos
cardsDpoi.forEach(cardDpoi => {
  const divCardDpoi = document.createElement('div');
  divCardDpoi.innerHTML = `
  <div class="card_dpoi">
    <div class="card_dpoi_content">
      <div class="d-flex">
        <img src="imagens/img1.jpg">
        <div class="d-block">
          <h4>${cardDpoi.nomeCliente}</h4>
          <h6>${cardDpoi.Profissao}</h6>
        </div>
      </div>
      <h6>${cardDpoi.depoimento}</h6>
      <p class="card_dpoi_stars">
        <i class="fa-solid fa-star size" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star size" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star size" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star size" style="color: #ffd500;"></i>
        <i class="fa-solid fa-star size" style="color: #ffd500;"></i>
      </p>
    </div>
  </div>
    `;

    divCardDpoi.classList.add("swiper-slide");
  document.querySelector(" .swiper-wrapper").appendChild(divCardDpoi);
});
//fim adicionando card nos depoimentos


//depoimentos slider
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false, //o card desfocado, false e ele desaparece
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
//fim depoimentos slider