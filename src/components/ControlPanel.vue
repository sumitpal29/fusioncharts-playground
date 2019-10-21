<template>
  <div class="control-panel">
    <div class="control-panel-first">
      <p @click="$modal.show('chart-configuration')" class="control-panel-first-header mb-0">
        {{ noChartConf ? 'Add' : 'Edit' }} Chart Configuration
        <i class="fc_edit" />
      </p>
      <div v-if="!noChartConf" class="information-container">
        <h2>{{ chartCategory.display }}</h2>
        <h3>{{ chartType }}</h3>
        <span class="version">{{ selectedVersion }}</span>
      </div>
    </div>

    <!-- modal -->
    <modal class="chart-conf-modal" :scrollable="true" name="chart-configuration">
      <div class="card">
        <div class="card-header">
          Chart Configuration
          <i class="fc_close" @click="$modal.hide('chart-configuration')" />
        </div>
        <div class="card-body">
          <select v-model="chartCategory" class="select-css ml-1">
            <option>Select Categories</option>
            <option
              :value="item"
              v-for="(item, index) in categoriesList"
              :key="index"
            >{{item.display}}</option>
          </select>

          <select v-model="chartType" class="select-css ml-1">
            <option>Selct Chart Type</option>
            <option
              :value="item.value"
              v-for="(item, index) in getCategoryCharts"
              :key="index"
            >{{item.display}}</option>
          </select>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ControlPanel",
  computed: {
    ...mapGetters(['product/GETCATEGORY', 'product/GETCATEGORYCHARTS']),
    categoriesList () {
      return this['product/GETCATEGORY'];
    },
    getCategoryCharts () {
      return this['product/GETCATEGORYCHARTS'](this.chartCategory.value)
    }
  },

  data() {
    return {
      noChartConf: true,
      FusionChartsVersion: ["3.14.4"],
      selectedVersion: null,
      supportedLanguages: ["plainJS", "vue", "react"],
      showModal: false,
      chartType: "",
      chartCategory: ""
    };
  },
  mounted () {
    console.log(this.chartCategory, this.$store);
  },
  watch: {
    chartCategory(val) {
      console.log(val)
      if(val.value && this.noChartConf) {
        this.noChartConf = false;
      }
    }
  },
  methods: {}
};
</script>

<style lang="scss">
@import "@/assets/main.scss";

.control-panel {
  &-first {
    .information-container{
      display: flex;
      align-items: baseline;

      h2{
        font-size: 18px;
        color: $light;
      }
      h3{
        font-size: 15px;
        color: $light;
        margin-left: 10px;
      }
    }
    &-header {
      cursor: pointer;

      &:hover {
        .fc_edit {
          opacity: 1;
        }
      }
      .fc_edit {
        transition: opacity ease-in-out 0.35s;
        opacity: 0;
      }
    }
  }
}

.chart-conf-modal {
  color: $color3;

  .fc_close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    transition: color ease-in-out 0.35s;

    &:hover {
      color: $primary-dark;
    }
  }
}
</style>
