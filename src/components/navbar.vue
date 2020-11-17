<template>
  <nav>
    <v-app-bar dark dense app>
      <v-spacer> </v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer dark temporary right v-model="drawer" app>
      <v-list>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="menu in menus"
            :key="menu.text"
            :href="menu.route"
          >
            <v-list-item-icon>
              <v-icon v-text="menu.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="menu.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  props: [],

  data() {
    return {
      drawer: false,
      menus: [
        {
          icon: "mdi-account-question",
          text: "About Me",
          route: "#about",
        },
        {
          icon: "mdi-clipboard-file",
          text: "My Projects",
          route: "#projects",
        },
        {
          icon: "mdi-card-account-mail",
          text: "Contact Me",
          route: "mailto:shalomjsph@gmail.com",
        },
      ],
    };
  },
};
</script>

<style></style>
