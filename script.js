const INSTAGRAM_URL = 'https://www.instagram.com/titanslife_sup';



const products = [
{id:1, title:'Whey Baunilha', desc:'Whey protein sabor baunilha - alta concentração de proteína.', price:'R$ 140,00', img:'wheybaunilha.jpeg'},
{id:2, title:'Pré-treino Max 300g', desc:'Energia e foco para treinos intensos.', price:'R$ 90,00', img:'pretreinomax300g.jpeg'},
{id:3, title:'Creatine DarkLab', desc:'Creatina monohidratada - força e explosão.', price:'R$ 65,00', img:'Creatinedarklab.jpeg'},
{id:4, title:'Colágeno', desc:'Colágeno hidrolisado para pele e articulações.', price:'R$ 70,00', img:'Colagen.jpeg'},
{id:5, title:'Pasta de Amendoim', desc:'Pasta natural de amendoim - rica em calorias boas.', price:'R$ 30,00', img:'PastadeAmendoim.jpeg'},
{id:6, title:'Pré-treino Maçã Verde', desc:'Sabor maçã verde - energia prolongada.', price:'R$ 90,00', img:'pretreinomacaverde.jpeg'},
{id:7, title:'Pré-treino Max 300g (var.)', desc:'Versão alternativa do pré-treino.', price:'R$ 90,00', img:'pretreinomax300g.jpeg'},
{id:8, title:'Colágeno Tipo 2', desc:'melhora da articulação.', price:'R$ 59,90', img:'Colagentipo2.jpeg'},
];



const grid = document.getElementById('productGrid');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const modalBuy = document.getElementById('modalBuy');
const closeModal = document.getElementById('closeModal');


console.log('script.js carregado');


function renderGrid(){
if(!grid) return;
grid.innerHTML = '';
products.forEach(p => {
const card = document.createElement('article');
card.className = 'card';
card.innerHTML = `
<img src="${p.img}" alt="${p.title}">
<div class="info">
<h3>${p.title}</h3>
<p>${p.desc}</p>
<p class="price">${p.price}</p>
</div>
<div class="actions">
<button class="view">Ver</button>
</div>
`;


// evento Ver
card.querySelector('.view').addEventListener('click', (e)=>{ e.stopPropagation(); openModal(p); });


grid.appendChild(card);
});
}


function openModal(p){
modalImg.src = p.img;
modalTitle.textContent = p.title;
modalDesc.textContent = p.desc;
modalPrice.textContent = p.price;
if(modalBuy) modalBuy.href = INSTAGRAM_URL;
modal.classList.remove('hidden');
modal.setAttribute('aria-hidden','false');
}


function closeModalFunc(){
modal.classList.add('hidden');
modal.setAttribute('aria-hidden','true');
}


if(closeModal) closeModal.addEventListener('click', closeModalFunc);
if(modal) modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModalFunc(); });
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModalFunc(); });



renderGrid();
console.log('renderGrid executado');

// Tema Claro/ Escuro
const btnTema = document.getElementById('btn-mudar-tema');
const body = document.body;

btnTema.addEventListener('click', () => {
    body.classList.toggle('tema-escuro');
    
    // Troca o texto do botão conforme o tema
    if (body.classList.contains('tema-escuro')) {
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = "🌙 Modo Escuro";
    }
});
// No seu script.js, apenas insira o texto:
modalDesc.textContent = descricao; // O CSS cuidará da cor automaticamente