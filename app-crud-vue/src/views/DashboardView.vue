<!--!Crea un archivo llamado DashboardView.vue en la carpeta src/views/. Esta vista tiene el objetivo de mostrar la interfaz de la administración del sistema, si el usuario se logueo correctamente.-->
<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="navbar-brand ps-3">pane</div>
            <ul class="navbar-nav">
                <li class="nav-item"><router-link to="/productos" class="nav-link">Productos</router-link></li>
                <li class="nav-item"><a @click="logout" class="nav-link" href="#">Cerrar Sesión</a></li>
            </ul>
        </nav>
        <producto-form></producto-form>
        </div>
        </template>
<script>
import productoForm from '@/components/productoForm.vue';
export default {
    name: 'DashboardView',
    components: {
        productoForm
    },
    methods: {
        logout() {
            localStorage.removeItem('user');
            this.$router.push('/login');
        }
    }
}
</script>
<style scoped>
</style>
