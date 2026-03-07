const productos = [
  {
    nombre: "Laptop",
    precio: 1200,
    descripcion: "Laptop Gamer de alto rendimiento"
  },
  {
    nombre: "Mouse",
    precio: 250,
    descripcion: "Mouse inalámbrico con luz RGB"
  },
  {
    nombre: "Teclado",
    precio: 400,
    descripcion: "Teclado mecánico de alta calidad"
  }
];

class ProductCard extends HTMLElement {
  connectedCallback() {
    const nombre = this.getAttribute('nombre');
    const precio = this.getAttribute('precio');
    const descripcion = this.getAttribute('descripcion');

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