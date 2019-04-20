<template>
  <div>
    <h1>Register your username!</h1>
    <input type="email" id="userEmail" v-model="email" placeholder="johnsmith@gmail.com" name="email">
    <br/>
    <input type="text" id="userPW" v-model="password" placeholder="password" name="password">
    <br/>
    <button id="registerButton" @click="register">Register</button>
  </div>
</template>

<script>
import authentication from '@/services/authentication'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await authentication.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
