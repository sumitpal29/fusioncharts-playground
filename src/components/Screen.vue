<template>
  <div class="container-iframe">
    <div ref="iframeContainer" />
  </div>
</template>

<script>
export default {
  name: "IframeContainer",
  data() {
    return {
      runIframe: null,
      runIframeHeight: 250
    };
  },
  mounted() {
    this.newIframe();
  },
  methods: {
    run() {
      const scr = "script";
      const css = "style";
      const code = this.runIframe.contentWindow.document;

      code.open();
      code.writeln(
        `${this.getLang("html")} \n <${css}>\n ${this.getLang(
          "css"
        )} \n </${css}> \n <${scr}> \n ${this.getLang("js")} \n </${scr}>`
      );
      code.close();
      // eslint-disable-next-line
      fusionDesign.scroll.to(0);
    },
    newIframe() {
      if (this.runIframe) {
        // Unload old iframe
        this.$refs.iframeContainer.removeChild(this.runIframe);
      }

      // Load new iframe
      this.runIframe = document.createElement("iframe");
      this.runIframe.id = "runner";
      // this.runIframe.src = 'playground/playground-runner.html';
      this.runIframe.className = "run-iframe";
      this.runIframe.style.boxSizing = "border-box";
      this.runIframe.style.height = this.runIframeHeight + "px";
      this.runIframe.style.width = "100%";
      this.runIframe.style.border = "1px solid rgba(240, 237, 238, 1)";
      this.runIframe.style.borderRadius = "4px";
      this.runIframe.frameborder = "0";
      this.$refs.iframeContainer.appendChild(this.runIframe);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/main.scss";

.container-iframe{
  width: 100%;
  background-color: $light;
  overflow: hidden;
  border-radius: 4px;
}
</style>
