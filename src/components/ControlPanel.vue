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
        <div class="card-header bold pb-0">
          Select Chart Configuration
          <i
            class="fc_close"
            @click="$modal.hide('chart-configuration')"
          />
        </div>
        <div class="card-body">
          <select v-model="chartCategory" class="select-css">
            <option>Select Categories</option>
            <option
              :value="item.value"
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
        <div class="card-header bold pb-0 pt-0">
          Select FusionCharts version
          <i
            class="fc_close"
            @click="$modal.hide('chart-configuration')"
          />
        </div>
        <div class="card-body">
          <select v-model="selectedFCVersion" class="select-css">
            <option>Select version</option>
            <option :value="item" v-for="(item, index) in versionList" :key="index">{{item}}</option>
          </select>
        </div>
        <div class="card-footer text-right">
          <div @click="saveConf" class="btn btn-secondary-grad btn-sm">Done</div>
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
    ...mapGetters(["product/GETCATEGORY", "product/GETCATEGORYCHARTS"]),
    categoriesList() {
      return this["product/GETCATEGORY"];
    },
    getCategoryCharts() {
      return this["product/GETCATEGORYCHARTS"](this.chartCategory);
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
      chartCategory: "",
      selectedFCVersion: "latest",
      versionList: [
        "latest",
        "develop",
        "3.14.1",
        "3.14.0",
        "3.14.0-sr.1",
        "3.13.5"
      ]
    };
  },
  mounted() {
    console.log(this.chartCategory, this.$store);
  },
  watch: {
    chartCategory(val) {
      if (val.value && this.noChartConf) {
        this.noChartConf = false;
      }
    }
  },
  methods: {
    saveConf() {
      this.$modal.hide("chart-configuration");
      const conf = {
        chartType: this.chartType,
        chartCategory: this.chartCategory,
        selectedFCVersion: this.selectedFCVersion
      }
      // this.$emit("configuration-changed", conf);
      // this.$store.dispatch('product/UPDATE_PRODUCT',conf)
      console.log('configuration Changed', this, conf);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/main.scss";

.control-panel {
  &-first {
    .information-container {
      display: flex;
      align-items: baseline;

      h2 {
        font-size: 18px;
        color: $light;
      }
      h3 {
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
