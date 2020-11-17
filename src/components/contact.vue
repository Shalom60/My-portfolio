<template>
  <div id="contact">
    <v-layout wrap my-8 xs2>
      <v-flex>
        <v-card-actions>
          <v-btn dark rounded href="mailto: shalomjsph@gmail.com">
            <v-icon class="blue--text"> mdi-gmail </v-icon>
          </v-btn>
        </v-card-actions>
      </v-flex>
      <v-flex>
        <v-card-actions>
          <v-btn dark rounded href="https://twitter.com/J_bowlu?s=09">
            <v-icon class="blue--text"> mdi-twitter </v-icon>
          </v-btn>
        </v-card-actions>
      </v-flex>
      <v-flex>
        <v-card-actions>
          <v-btn
            dark
            rounded
            href="https://www.linkedin.com/in/shalom-joseph-90b844199"
          >
            <v-icon class="blue--text"> mdi-linkedin </v-icon>
          </v-btn>
        </v-card-actions>
      </v-flex>
      <v-flex>
        <v-card-actions>
          <v-btn dark rounded href="https://github.com/Shalom60">
            <v-icon class="blue--text"> mdi-github </v-icon>
          </v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
    <v-bottom-navigation class="center transparent" absolute dark>
      <v-card dark flat color="transparent grey--text">
        <v-card-actions>
          <v-icon left class="blue--text"> mdi-copyright </v-icon>
          <span> Joseph Shalom 2020</span>
        </v-card-actions>
      </v-card>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  props: [],
};
</script>

<style></style>
