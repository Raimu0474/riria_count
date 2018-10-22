<template>
  <section class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Login" name="first"><button @click="googleLogin">googleでログイン</button></el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs>

    <div>
      <div class="block">
        <h4>Nuxt.js + Element？</h4>
        <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .block {
    padding: 0 20px;
  }
</style>

<script>
import firebase from '@/plugins/firebase'
 export default {
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>