
const WHATSAPP_NUMBER = '5585985471748';



const products = [
  { id:1, title:'Whey Baunilha', desc:'Whey protein sabor baunilha - alta concentração de proteína.', price:'R$ 140,00', img:'wheybaunilha.png' },
  { id:2, title:'Pré-treino Max 300g', desc:'Energia e foco para treinos intensos.', price:'R$ 90,00', img:'pretreinomax300g.jpeg' },
  { id:3, title:'Creatine DarkLab', desc:'Creatina monohidratada - força e explosão.', price:'R$ 65,00', img:'Creatinedarklab.jpeg' },
  { id:4, title:'Colágeno', desc:'Colágeno hidrolisado para pele e articulações.', price:'R$ 70,00', img:'Colagen.png' },
  { id:5, title:'Pasta de Amendoim', desc:'Pasta natural de amendoim - rica em calorias boas.', price:'R$ 30,00', img:'PastadeAmendoim.png' },
  { id:6, title:'Pré-treino Maçã Verde', desc:'Sabor maçã verde - energia prolongada.', price:'R$ 90,00', img:'pretreinomacaverde.png' },
  { id:7, title:'Pré-treino Max 300g (var.)', desc:'Versão alternativa do pré-treino.', price:'R$ 90,00', img:'pretreinomax300g.jpeg' },
  { id:8, title:'Colágeno Tipo 2', desc:'Melhora da articulação.', price:'R$ 59,90', img:'Colagentipo2.png' },
  { id:9, title:'Tasty Whey Chocotella.', desc:'Whey sabor chocotella - alta concentração de proteína.', price:'R$ 210,50', img:'TastyWheyChocotella.png' } ,
  { id: 10, title:'Melatonina Max ', desc:'Suplemento para melhorar o sono e recuperação.', price:'R$ 45,00', img:'MELATONINA MAX.png' },
  {id:11, title: ' Max Ômega 3 ', desc: 'Suplemento de ômega 3 para saúde cardiovascular.', price: 'R$ 70,00', img: 'Omega3.png' },
  {id:12, title:'Ashwagandha', desc:'Suplemento para redução do estresse e ansiedade.', price:'R$ 65,00', img:'Ashwagandha.png' },
  {id:13, title: 'Nacetilcisteína (NAC)', desc: 'Antioxidante que ajuda na desintoxicação do organismo.', price: 'R$ 70,00', img: 'NAC.png' },
  {id:14, title: 'Tribulus Terrestris', desc: 'Suplemento para aumento da testosterona e desempenho atlético.', price: 'R$ 69,90', img: 'Tribulus Terrestris.png' },
  { id:15, title:'Tasty Whey Original Leite Ninho.', desc:'Whey sabor Leite ninho - alta concentração de proteína.', price:'R$ 169,90', img:'TastyWhey.jpeg' } ,
];

const grid = document.getElementById('productGrid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalBuy = document.getElementById('modalBuy');
const closeModal = document.getElementById('closeModal');


function toggleModal(show, product = null) {
  if (show && product) {
    modalImg.src = product.img;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = product.price;

   
    const mensagem = encodeURIComponent(`Olá! Tenho interesse no ${product.title} que vi no site.`);
    modalBuy.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensagem}`;
  }

  modal.classList.toggle('hidden', !show);
  modal.setAttribute('aria-hidden', String(!show));
}

function renderGrid() {
  if (!grid) return;

  grid.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <div class="info">
        <h3>${product.title}</h3>
        <p>${product.desc}</p>
        <p class="price">${product.price}</p>
      </div>
      <div class="actions">
        <button class="view">Ver</button>
      </div>
    `;

    card.querySelector('.view')
      .addEventListener('click', e => {
        e.stopPropagation();
        toggleModal(true, product);
      });

    grid.appendChild(card);
  });
}

closeModal?.addEventListener('click', () => toggleModal(false));

modal?.addEventListener('click', e => {
  if (e.target === modal) toggleModal(false);
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') toggleModal(false);
});

const btnTema = document.getElementById('btn-mudar-tema');
const body = document.body;

btnTema?.addEventListener('click', () => {
  body.classList.toggle('tema-escuro');

  btnTema.textContent = body.classList.contains('tema-escuro')
    ? '☀️ '
    : '🌙 ';
});

// Init
renderGrid();