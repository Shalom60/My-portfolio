<template>
  <div id="projects">
    <h3 class="subheading grey--text">Projects</h3>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6 lg3 v-for="project in projects" :key="project.name">
        <v-card class="ma-3 d-block" flat dark>
          <v-card-text>
            <div class="subheading">
              <h3>{{ project.name }}</h3>
            </div>
            <div class="grey--text">{{ project.describe }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn v-if="project.github" :href="project.github" class="text-none">
              <v-icon left>mdi-github </v-icon><span>Github </span>
            </v-btn>
            <v-spacer> </v-spacer>
            <v-btn v-if="project.live" :href="project.live" class="text-none">
              <v-icon left>mdi-web</v-icon><span>Live </span>
            </v-btn>
            <v-btn v-else class="text-none">
              <v-icon left>mdi-pencil </v-icon><span> under development</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      projects: [
        {
          name: "Fancy Quiz App",
          describe:
            "A quiz web application created with Vue.js and VueBootstrap, the questions are gotten from an API question database and are randomly shuffled on rendering.",
          github: "https://github.com/Shalom60/fancy-quiz-app",
          live: "https://pappy-fancy-quiz-app.herokuapp.com/",
        },
        {
          name: "LSP API",
          describe: "An API for a website using Laravel.",
          github: "https://github.com/Shalom60/LSP-API/tree/master",
        },
        {
          name: "Transcript & GPA Builder",
          describe:
            "A web application that takes necessary data from students and calculates the GPA of each year in a trancript format.",
          github:
            "https://github.com/Shalom60/Transcript-GPA-Builder-Uniben-/tree/master",
        },
        {
          name: "Arcadia",
          describe:
            "Frontend Engineer at the Saucecode2020 Hackathon. A web application that links students with tutors.",
          live: "https://arcadialive.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style></style>
