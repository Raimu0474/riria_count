<template>
  <div class="block">
    <no-ssr>
      <FirebaseAuth/>
    </no-ssr>
    <h4>Nuxt.js + Element？</h4>
    <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate>
  </div>
</template>

<style scoped>
  .block {
    padding: 0 20px;
  }
</style>

<script>
import firebase from '@/plugins/firebase'
import FirebaseAuth from '~/components/FirebaseAuth.vue'

 export default {
  components: {
    FirebaseAuth,
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>