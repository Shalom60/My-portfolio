<template>
  <div id="about">
    <v-card class="mx-auto my-5" dark color="grey--text" shaped>
      <v-card-title> Bio </v-card-title>
      <v-card-text class="text-md-60px"
        >Student in the Department of Computer Engineering at the University of
        Benin. <br />
        Certified google fundamental digital marketer. An enthusiast of
        everything tech, recently ventured into web development, started with an
        internship at Start.ng on March 2020, learnt the basics of web
        development using HTML5, CSS, JavaScript and PHP, did different frontend
        tasks and built an authentication system for a hospital-like website,
        graduated and thereafter started Hngi7 internship.<br />
        I also partook in the 2020 Google/Andela #Buildforsdg 2020 challenge,
        where i mostly helped with my technical skills. I make use of some
        technologies and frameworks such as these.
      </v-card-text>
      <v-layout row wrap>
        <v-flex xs6 sm4 md3 v-for="tech in techs" :key="tech.name">
          <v-card-actions>
            <v-btn class="text-none mx-3" rounded>
              <v-icon class="blue--text" left> {{ tech.icon }} </v-icon>
              <span>{{ tech.name }}</span>
            </v-btn>
          </v-card-actions>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      techs: [
        {
          name: "Vue",
          icon: "mdi-vuejs",
        },
        {
          name: "Vuetify",
          icon: "mdi-vuetify",
        },
        {
          name: "Laravel",
          icon: "mdi-laravel",
        },
        {
          name: "MySQL",
          icon: "mdi-database",
        },
        {
          name: "Javascript",
          icon: "mdi-language-javascript",
        },
        {
          name: "Nuxt",
          icon: "mdi-nuxt",
        },
        {
          name: "Material Design",
          icon: "mdi-material-design",
        },
        {
          name: "DevOps(Heroku)",
          icon: "mdi-cloud",
        },
        {
          name: "Github",
          icon: "mdi-github",
        },
      ],
    };
  },
};
</script>

<style></style>
