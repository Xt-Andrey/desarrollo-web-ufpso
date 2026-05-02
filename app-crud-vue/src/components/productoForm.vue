<template> 
    <div class="container mt-4">
        <h3>Gestion de Productos</h3>
        <div class="mb-3">
            <input v-model="nuevo.producto" class="form-control mb-2" placeholder="Nombre del producto">
            <input v-model="nuevo.precio" class="form-control mb-2" placeholder="Precio del producto">
            <button class="btn btn-success" @click="agregar"> Agregar </button>
        </div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(p,i) in productos" :key="i">
                    <td>{{ p.producto }}</td>
                    <td>{{ p.precio }}</td>
                    <td>
                        <button @click="eliminar(i)" class="btn btn-danger btn-sm">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nuevo: {
                producto: '',
                precio: ''
            },
    crested () {
        const data = localStorage.getItem('productos');
        this.productos = data ? JSON.parse(data) : [];
        },
        methods: {
            agregar() {
                if (this.nuevo.producto && this.nuevo.precio) {
                    this.productos.push({ ...this.nuevo });
                    localStorage.setItem('productos', JSON.stringify(this.productos));
                    this.nuevo.producto = '';
                    this.nuevo.precio = '';
                }
            },
            eliminar(index) {
                this.productos.splice(index, 1);
                localStorage.setItem('productos', JSON.stringify(this.productos));
            }
        }
    }
}
</script>