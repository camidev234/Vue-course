<template>
  <div class="container">
    <form @submit.prevent>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="password"/>
    </div>
    <button type="submit" class="btn btn-primary" @click="authUser">Submit</button>
  </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

let email = ref('')
let password = ref('')

const authUser = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
        alert('succes login');
    })
    .catch((error) => {
        alert('error ' + error.message);
    })
}

</script>

<style scoped>


</style>