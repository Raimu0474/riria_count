<template>
    <div id="firebaseui-auth-container"/>
</template>

<script>
import firebase from '@/plugins/firebase'
import firebaseui from 'firebaseui'
import 'firebase/auth'

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

export default {
  mounted() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  },
}
</script>