<template>
  <div></div>
</template>

<script>
//import pdf from "vue-pdf";
export default {
  components: {},
  data() {
    return {
      cert: "./alc_sdg_certs.pdf",
    };
  },
  mounted() {
    window.open(this.cert);
    var dwnloader = document.getElementById("downloader");
    dwnloader.download = "Shalom_Joseph_certificate";
  },
  methods: {},
};
</script>

<style>
#wrapperx {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
#resume-wrapper {
  width: 100%;
  height: calc(100vh - 47.8px);
  background-color: #000;
  color: #000;
  overflow: auto;
}

a {
  text-decoration: none;
}

@media screen and (min-width: 767px) {
  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgb(17, 17, 17);
  }

  *::-webkit-scrollbar {
    width: 10px;
    background-color: rgb(17, 17, 17);
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgb(17, 17, 17);
    border: 1px solid #7c7b7b;
    border-radius: 1px;
  }
}

.xdivider {
  display: block;
  width: 100%;
  height: 3px;
}
</style>
