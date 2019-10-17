<template>
  <div ref="rootCodeContainer" class="editor-container"></div>
</template>

<script>
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export default {
  name: 'Editor',
  data() {
    return {
      activeTab: "js",
      editorData: {
        js: {
          model: null,
          state: null,
        },
        css: {
          model: null,
          state: null,
        },
        html: {
          model: null,
          state: null,
        },
      },
    };
  },
  mounted() {
    this.editorData.js.model = monaco.editor.createModel(
      "// Type your javascript code here",
      "javascript"
    );
    this.editorData.css.model = monaco.editor.createModel(
      "/* Type your CSS code here */",
      "css"
    );
    this.editorData.html.model = monaco.editor.createModel(
      "<!-- Type your HTML code here -->",
      "html"
    );

    this.monacoJSEditor = monaco.editor.create(this.$refs.rootCodeContainer, {
      theme: "vs-dark",
      model: this.editorData.js.model,
      // minimap: {
      //   enabled: false
      // }
    });

    // this.newIframe();
  },
  methods: {
    changeTab(tab) {
      const currentState = this.monacoJSEditor.saveViewState();
      const currentModel = this.monacoJSEditor.getModel();

      if (currentModel === this.editorData.js.model) {
        this.editorData.js.state = currentState;
      } else if (currentModel === this.editorData.css.model) {
        this.editorData.css.state = currentState;
      } else if (currentModel === this.editorData.html.model) {
        this.editorData.html.state = currentState;
      }

      this.activeTab = tab;
      this.monacoJSEditor.setModel(this.editorData[tab].model);
      this.monacoJSEditor.restoreViewState(this.editorData[tab].state);
      this.monacoJSEditor.focus();
    },
    getLang(lang) {
      return this.editorData[lang].model.getValue();
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
      this.runIframe.style.border = "1px solid lightgrey";
      this.runIframe.style.borderRadius = "4px";
      this.runIframe.frameborder = "0";
      this.$refs.iframeContainer.appendChild(this.runIframe);
    },
  },
}
</script>

<style lang="scss" scoped>
.editor-container {
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 300px;
      border-radius: 4px;
      overflow: hidden;
}
</style>
