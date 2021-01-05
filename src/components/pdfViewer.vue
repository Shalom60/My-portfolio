<template>
  <div id="pageContainer">
    <!-- <div id="viewer" class="pdfViewer"></div> -->
  </div>
</template>

<script>
// import pdfjsLib from "pdfjs-dist/build/pdf.min.js";
// import { PDFViewer } from "pdfjs-dist/lib/web/pdf_viewer";
// //import "pdfjs-dist/web/pdf_viewer.css";

// pdfjsLib.GlobalWorkerOptions.workerSrc =
//   "https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.943/build/pdf.worker.js";

export default {
  props: [],
  name: "pdfViewer",
  mounted() {
    this.getPdf();
  },
  methods: {
    async getPdf() {
      let container = document.getElementById("pageContainer");
      let pdfViewer = new PDFViewer({
        container: container,
      });
      let loadingTask = pdfjsLib.getDocument("./Shalom_Joseph_certificate.pdf");
      let pdf = await loadingTask.promise;
      pdfViewer.setDocument(pdf);
    },
  },
};
</script>

<style>
#pageContainer {
  margin: auto;
  width: 80%;
}

div.page {
  display: inline-block;
}
</style>
