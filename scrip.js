const products = [
  { id: "P01", name: "Tomate Selección", price: "$4.500", desc: "Tomate fresco de alta rotación.", img: "https://images.unsplash.com/photo-1546470427-e5ac89f5d38d?auto=format&fit=crop&w=800&q=80" },
  { id: "P02", name: "Papa Criolla", price: "$3.200", desc: "Ideal para cocina diaria.", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80" },
  { id: "P03", name: "Cebolla Larga", price: "$2.800", desc: "Muy usada en recetas caseras.", img: "https://images.unsplash.com/photo-1594282486552-05f8de3f2b0a?auto=format&fit=crop&w=800&q=80" },
  { id: "P04", name: "Aguacate", price: "$6.000", desc: "Fruta premium para venta.", img: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=800&q=80" },
  { id: "P05", name: "Limón Tahití", price: "$5.100", desc: "Perfecto para jugos y cocina.", img: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=800&q=80" },
  { id: "P06", name: "Yuca Fresca", price: "$2.900", desc: "Producto básico de gran demanda.", img: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb3?auto=format&fit=crop&w=800&q=80" },
  { id: "P07", name: "Plátano Verde", price: "$4.000", desc: "Muy vendido en plaza y tienda.", img: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80" },
  { id: "P08", name: "Pepino Cohombro", price: "$3.700", desc: "Fresco y liviano para ensaladas.", img: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80" },
  { id: "P09", name: "Pimentón Rojo", price: "$5.400", desc: "Color atractivo y gran calidad.", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80" },
  { id: "P10", name: "Zanahoria", price: "$3.100", desc: "Buena presentación y rendimiento.", img: "https://images.unsplash.com/photo-1447175008436-0534d9487fbd?auto=format&fit=crop&w=800&q=80" },
  { id: "P11", name: "Lechuga", price: "$2.600", desc: "Fresca y lista para entrega.", img: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=800&q=80" },
  { id: "P12", name: "Mango", price: "$4.800", desc: "Dulce y de excelente sabor.", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80" },
  { id: "P13", name: "Piña", price: "$6.500", desc: "Fruta llamativa y rentable.", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80" },
  { id: "P14", name: "Fresa", price: "$7.200", desc: "Producto premium y delicado.", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80" },
  { id: "P15", name: "Banano", price: "$3.900", desc: "Fácil de vender y empacar.", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80" }
];

const grid = document.getElementById("productsGrid");
const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const resultText = document.getElementById("resultText");

function renderProducts(list) {
  grid.innerHTML = list.map(product => `
    <article class="product-card" data-id="${product.id}">
      <img class="product-image" src="${product.img}" alt="${product.name}">
      <div class="product-info">
        <span class="product-badge">${product.id}</span>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <div class="price">${product.price}</div>
        <button class="buy-btn">Ver producto</button>
      </div>
    </article>
  `).join("");
}

function searchById() {
  const id = input.value.trim().toUpperCase();
  const found = products.find(p => p.id === id);

  if (found) {
    renderProducts([found]);
    resultText.textContent = `Producto encontrado: ${found.id} - ${found.name}`;
    resultText.classList.remove("not-found");
  } else {
    renderProducts([]);
    resultText.textContent = `No se encontró el producto con ID "${id}".`;
    resultText.classList.add("not-found");
  }
}

function resetView() {
  input.value = "";
  resultText.textContent = "";
  resultText.classList.remove("not-found");
  renderProducts(products);
}

searchBtn.addEventListener("click", searchById);
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchById();
});
resetBtn.addEventListener("click", resetView);

renderProducts(products);