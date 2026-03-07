const productos = [
  {
    nombre: "Laptop",
    precio: 1200,
    link: "https://www.itsitio.com/dispositivos/una-laptop-para-el-gamer-de-entrada/",
    descripcion: "Laptop Gamer de alto rendimiento"
  },
  {
    nombre: "Mouse",
    precio: 250,
    link: "https://example.com/mousehttps://www.falabella.com.co/falabella-co/product/141196759/Mouse-Inalambrico-Gamer-Rgb-Q6-Recargable-6-Botones/141196760",
    descripcion: "Mouse inalámbrico con luz RGB"
  },
  {
    nombre: "Teclado",
    precio: 400,
    link: "https://www.omega-store.co/producto/teclado-gamer-rgb-led-gaming-ref-180603/",
    descripcion: "Teclado mecánico de alta calidad"
  }
];

class ProductCard extends HTMLElement {
  connectedCallback() {
    const nombre = this.getAttribute('nombre');
    const precio = this.getAttribute('precio');
    const descripcion = this.getAttribute('descripcion');
    const link = this.getAttribute('link');

    this.innerHTML = `
      <div class="card">
        <h3>${nombre}</h3>
        <p class="precio">$${precio}</p>
        <p>${descripcion}</p>
        <button onclick="alert('${nombre} agregado')">Agregar</button>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('productos-container');
  productos.forEach(producto => {
    const card = document.createElement('product-card');
    card.setAttribute('nombre', producto.nombre);
    card.setAttribute('precio', producto.precio);
    card.setAttribute('descripcion', producto.descripcion);
    contenedor.appendChild(card);
  });
});
const carrito = [];

function agregarAlCarrito(nombre) {
    const producto = productos.find(p => p.nombre === nombre);
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} agregado al carrito`);
    }
}