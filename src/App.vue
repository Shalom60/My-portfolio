<template>
  <v-app id="app">
    <div id="route">
      <router-view />
    </div>

    <navbar />

    <v-card flat class="avatar mt-15" dark color="transparent">
      <v-row align="end" class="fill-height">
        <v-col align-self="start" class="pa-0" cols="12">
          <v-avatar class="profile" color="grey" size="150" height="200" width="170">
            <v-img src="./assets/avatar.jpg"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="py-0">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title"> Joseph Shalom </v-list-item-title>
              <v-list-item-subtitle>Web Developer</v-list-item-subtitle>
              <v-list-item-subtitle> Student</v-list-item-subtitle>
              <v-list-item-subtitle>University Of Benin</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>
    <v-container class="my-5">
      <about :stat="stat" />
      <works />
      <contact />
    </v-container>
  </v-app>
</template>

<script>
import about from "./components/about.vue";
import contact from "./components/contact.vue";
import works from "./components/works.vue";
import navbar from "./components/navbar.vue";

export default {
  name: "App",

  components: {
    about,
    contact,
    works,
    navbar,
  },

  data() {
    return {
      stat: true,
    };
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #212121;
}

.avatar {
  margin-top: 5%;
}
</style>
