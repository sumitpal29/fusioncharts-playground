<template>
  <div class="container">
    <div class="container-iframe"></div>
    <div class="container-tabs">
      <ul class="nav nav-pills mb-1" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="pill" href="#js" role="tab">JS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="pill" href="#html" role="tab">HTML</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="pill" href="#css" role="tab">CSS</a>
        </li>
      </ul>
      <div class="btn btn-primary-grad">RUN</div>
    </div>
    <Editor />
  </div>
</template>

<script>
import Editor from "@/components/Editor.vue";

export default {
  name: "Playground",
  components: { Editor }
};
</script>

<style lang="scss">
.container {
  width: 80%;
  margin: 0 auto;
  height: 400px;
  background-color: inherit;

  &-tabs{
    display: flex;
  }
}
</style>
