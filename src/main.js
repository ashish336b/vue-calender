import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
    apiKey: "AIzaSyAR8O-GfNDveKeZZ2VYB5aW1_A0NksWrAg",
    authDomain: "vue-calender-c5d44.firebaseapp.com",
    databaseURL: "https://vue-calender-c5d44.firebaseio.com",
    projectId: "vue-calender-c5d44",
    storageBucket: "vue-calender-c5d44.appspot.com",
    messagingSenderId: "921260481889",
    appId: "1:921260481889:web:f1f2ae8d4a2dc136507920"
});

export const db = firebase.firestore();

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app');
