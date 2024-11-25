const movies = [
  {
    img: "https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg",
    title: "Growcast #00 | Conheça a Growdev",
    link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
    category: "growcast",
    id: "1",
  },
  {
    img: "https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg",
    title: "Growcast #01 | As profisões do futuro",
    link: "https://www.youtube.com/embed/7OWT3lfHYvE",
    category: "growcast",
    id: "2",
  },
  {
    img: "https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg",
    title: "Growcast #02 | Como seguir a carreira internacional?",
    link: "https://www.youtube.com/embed/ci1eQGPK89o",
    category: "growcast",
    id: "3",
  },
  {
    img: "https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg",
    title: "Growcast #03 | Superando os desafios da carreira de Dev!",
    link: "https://www.youtube.com/embed/WM7pGG7OicQ",
    category: "growcast",
    id: "4",
  },
  {
    img: "https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg",
    title: "Growcast #04 | Agile Master: tudo sobre a profissão! ",
    link: "https://www.youtube.com/embed/2c8VOBZ160Y",
    category: "growcast",
    id: "5",
  },
  {
    img: "https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg",
    title:
      "Growcast #5 | Como iniciar na carreira em Desenvolvimento de Softwares?",
    link: "https://www.youtube.com/embed/mxnEm03cYPc",
    category: "growcast",
    id: "6",
  },
  {
    img: "https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg",
    title: "Growcast #06 |  Mulheres e inclusão na tecnologia",
    link: "https://www.youtube.com/embed/m7DyR07KrOE",
    category: "growcast",
    id: "7",
  },
  {
    img: "https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg",
    title: "Growcast #07 | Desenvolvendo profissionais na área de TI",
    link: "https://www.youtube.com/embed/vW8G9KPwRL0",
    category: "growcast",
    id: "8",
  },
  {
    img: "https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg",
    title:
      "Growcast #8  |  A solução que está transformando o mercado de TI no Brasil",
    link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
    category: "growcast",
    id: "9",
  },
  {
    img: "https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg",
    title:
      "Growcast #9 | Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI.",
    link: "https://www.youtube.com/embed/dfDgs0Ive2Q",
    category: "growcast",
    id: "10",
  },
  {
    img: "https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg",
    title: "Webinar - Recriando a interface do Linkedin com Flutter",
    link: "https://www.youtube.com/embed/WKbLXuP9S-c",
    category: "webinar",
    id: "11",
  },
  {
    img: "https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg",
    title: "Webinar - Recriando a interface do Instagram com Flutter",
    link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
    category: "webinar",
    id: "12",
  },
  {
    img: "https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg",
    title: "Webinar - Recriando a interface do iFood com Flutter",
    link: "https://www.youtube.com/embed/8rdJsqUjsGg",
    category: "webinar",
    id: "13",
  },
  {
    img: "https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg",
    title: "Webinar - Recriando a interface do PicPay com Flutter",
    link: "https://www.youtube.com/embed/C4p_7qBsECw",
    category: "webinar",
    id: "14",
  },
  {
    img: "https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg",
    title: "Webinar - Recriando o layout do WhatsApp com Flutter",
    link: "https://www.youtube.com/embed/L1pKoMC6hWk",
    category: "webinar",
    id: "15",
  },
  {
    img: "https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg",
    title: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
    link: "https://www.youtube.com/embed/FiZMowbaiJA",
    category: "ux-ui",
    id: "16",
  },
  {
    img: "https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg",
    title:
      "Live #4 Jornada UX/UI:  Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
    link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
    category: "ux-ui",
    id: "17",
  },
  {
    img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg",
    title:
      "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
    link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
    category: "ux-ui",
    id: "18",
  },
  {
    img: "https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg",
    title:
      "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
    link: "https://www.youtube.com/embed/8sd3wuKTZMA",
    category: "ux-ui",
    id: "19",
  },
  {
    img: "https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg",
    title:
      "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
    link: "https://www.youtube.com/embed/-26aqPtgoEY",
    category: "ux-ui",
    id: "20",
  },
  {
    img: "https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg",
    title: "Célula de talentos - Uma solução Growdev",
    link: "https://www.youtube.com/embed/QsuhYgsSYQo",
    category: "diversos",
    id: "21",
  },
  {
    img: "https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg",
    title: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
    link: "https://www.youtube.com/embed/ouDn8z3PSqs",
    category: "diversos",
    id: "22",
  },
  {
    img: "https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg",
    title:
      "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
    link: "https://www.youtube.com/embed/cQDQNX6NXYo",
    category: "diversos",
    id: "23",
  },
  {
    img: "https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg",
    title: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&amp;Co",
    link: "https://www.youtube.com/embed/nKGbolkirBM",
    category: "diversos",
    id: "24",
  },
  {
    img: "https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg",
    title:
      "Tecnologia trazendo soluções para a Arezzo &amp; CO  |  Ricardo Pinho",
    link: "https://www.youtube.com/embed/6sZPsqNjeek",
    category: "diversos",
    id: "25",
  },
];

const sectionCardGrowcast = document.getElementById("section-card-growcast");
const sectionCardWebinar = document.getElementById("section-card-webinar");
const sectionCardUxUi = document.getElementById("section-card-ux-ui");
const sectionCardDiversos = document.getElementById("section-card-diversos");

function criarCard() {
  movies.map((movie) => {
    if (movie.category === "growcast") {
      const divCardGrowcast = document.createElement("div");
      divCardGrowcast.classList.add("col-xl-3");
      divCardGrowcast.classList.add("col-md-4");
      divCardGrowcast.classList.add("col-sm-12");
      divCardGrowcast.classList.add("mb-2");
      divCardGrowcast.classList.add("div-img");
      divCardGrowcast.innerHTML = `    
      <img src="${movie.img}" alt="${movie.title}"  class="img"/>
      <div class="d-flex justify-content-center align-items-center text-start px-2 div-toggle-movie">
        <button type="button" class="btn btn-modal" onclick="openModal(${movie.id})">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle text-white" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
          </svg>
        </button>
        <p class="text-white ms-2 p-movie">${movie.title}</p>
      </div>      

      
    `;
      sectionCardGrowcast.appendChild(divCardGrowcast);
    }
  });

  movies.map((movie) => {
    if (movie.category === "webinar") {
      const divCardWebinar = document.createElement("div");
      divCardWebinar.classList.add("col-xl-3");
      divCardWebinar.classList.add("col-md-4");
      divCardWebinar.classList.add("col-sm-12");
      divCardWebinar.classList.add("mb-2");
      divCardWebinar.classList.add("div-img");
      divCardWebinar.innerHTML = `    
      <img src="${movie.img}" alt="${movie.title}"  class="img"/>
      <div class="d-flex justify-content-center align-items-center text-start px-2 div-toggle-movie">
        <button type="button" class="btn btn-modal" onclick="openModal(${movie.id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle text-white" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
        </svg>
      </button>
        <p class="text-white ms-2 p-movie">${movie.title}</p>
      </div>
    `;
      sectionCardWebinar.appendChild(divCardWebinar);
    }
  });

  movies.map((movie) => {
    if (movie.category === "ux-ui") {
      const divCardUxUi = document.createElement("div");
      divCardUxUi.classList.add("col-xl-3");
      divCardUxUi.classList.add("col-md-4");
      divCardUxUi.classList.add("col-sm-12");
      divCardUxUi.classList.add("mb-2");
      divCardUxUi.classList.add("div-img");
      divCardUxUi.innerHTML = `    
      <img src="${movie.img}" alt="${movie.title}"  class="img"/>
      <div class="d-flex justify-content-center align-items-center text-start px-2 div-toggle-movie">
      <button type="button" class="btn btn-modal" onclick="openModal(${movie.id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle text-white" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
        </svg>
      </button>
        <p class="text-white ms-2 p-movie">${movie.title}</p>
      </div>
    `;
      sectionCardUxUi.appendChild(divCardUxUi);
    }
  });

  movies.map((movie) => {
    if (movie.category === "diversos") {
      const divCardDiversos = document.createElement("div");
      divCardDiversos.classList.add("col-xl-3");
      divCardDiversos.classList.add("col-md-4");
      divCardDiversos.classList.add("col-sm-12");
      divCardDiversos.classList.add("mb-2");
      divCardDiversos.classList.add("div-img");
      divCardDiversos.innerHTML = `    
      <img src="${movie.img}" alt="${movie.title}"  class="img"/>
      <div class="d-flex justify-content-center align-items-center text-start px-2 div-toggle-movie">
      <button type="button" class="btn btn-modal"  onclick="openModal(${movie.id})">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-circle text-white" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
        </svg>
      </button>
        <p class="text-white ms-2 p-movie">${movie.title}</p>
      </div>
    `;
      sectionCardDiversos.appendChild(divCardDiversos);
    }
  });
}

criarCard();

function openModal(id) {
  const idModal = `${id}`;
  console.log(idModal);
  movies.map((movie) => {
    if (idModal === movie.id) {
      const imgModal = document.getElementById("img-modal");
      imgModal.src = movie.link;

      const modal = new bootstrap.Modal(document.getElementById("modal-card"));
      modal.show();
    }
  });
}

function modalHeader() {
  const imgModal = document.getElementById("img-modal");
  imgModal.src = "https://www.youtube.com/embed/7OWT3lfHYvE";

  const modal = new bootstrap.Modal(document.getElementById("modal-card"));
  modal.show();
}
