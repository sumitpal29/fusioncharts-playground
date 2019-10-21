<template>
  <div class="container">
    <h1>FusionCharts PlayGround</h1>
    <ControlPanel />
    <IframeComp class="mb-1" />
    <div class="container-tabs mb-1">
      <ul class="container-tabs-nav">
        <li class="nav-item" v-for="tab in tabs" :key="tab">
          <a :class="['nav-link', {'active': activeTab === tab}]" @click.prevent="changeActiveTab(tab)" :href="tab">{{ tab.toUpperCase() }}</a>
        </li>
      </ul>
      <ul>
        <button class="btn btn-outline-primary btn-sm mr-1">copy code</button>
        <button class="btn btn-primary-grad btn-sm">RUN</button>
      </ul>
    </div>

    <Editor ref="editor" />
  </div>
</template>

<script>
import Editor from "@/components/Editor.vue";
import IframeComp from "@/components/Screen.vue";
import ControlPanel from "@/components/ControlPanel.vue";


export default {
  name: "Playground",
  components: { Editor, IframeComp, ControlPanel },
  data () {
    return {
      activeTab: 'js',
      tabs: ['js', 'css', 'html']
    }
  },
  methods: {
    changeActiveTab(lang) {
      this.activeTab = lang;
      this.$refs.editor.changeTab(lang);
    }
  },

};
</script>

<style lang="scss">
@import "@/assets/main.scss";

.btn-outline-primary {
  padding: 0.8rem 1.2rem;
}

.container {
  width: 80%;
  margin: 0 auto;
  height: 400px;
  background-color: inherit;

  h1{
    color: $primary-dark;
  }

  &-tabs {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;

    &-nav {
      list-style-type: none;
      padding: 0;
      border: 1px solid $primary;
      border-radius: 4px;
      li {
        float: left;

        a {
          font-size: 1.3rem;
          line-height: 1;
          padding: 0.9rem 1.2rem;
          color: $primary;

          &.active {
            color: $light;
            background-color: $primary;
          }
        }
      }
    }
  }
}
</style>
