<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3>Iniciar Sesión</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input type="text" class="form-control" id="username" v-model="username" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usuarios from '@/assets/usuarios.json';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      const user = usuarios.find(u => u.userName === this.username && u.password === this.password);
      if (user) {
        // Guardar sesión
        localStorage.setItem('user', JSON.stringify(user));
        this.$router.push('/dashboard');
      } else {
        this.error = 'Credenciales incorrectas';
      }
    }
  }
};
</script>

<style scoped>
</style>