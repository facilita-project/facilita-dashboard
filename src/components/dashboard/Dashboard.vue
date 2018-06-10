<template>
  <div class="dashboard">

    <dashboard-info-widgets></dashboard-info-widgets>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget" headerText="Analise dos dados e predição para futuro">
          <vuestic-chart :data="lineChartData" type="line"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div>
    <!-- <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs
        :names="[$t('dashboard.dataVisualization'), $t('dashboard.usersAndMembers'), $t('dashboard.setupProfile'), $t('dashboard.features')]"
        ref="tabs">
        <div :slot="$t('dashboard.dataVisualization')">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
        <div :slot="$t('dashboard.usersAndMembers')">
          <users-members-tab></users-members-tab>
        </div>
        <div :slot="$t('dashboard.setupProfile')">
          <setup-profile-tab></setup-profile-tab>
        </div>
        <div :slot="$t('dashboard.features')">
          <features-tab></features-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget> -->

    <!-- <dashboard-bottom-widgets></dashboard-bottom-widgets> -->

  </div>
</template>

<script>
/* eslint-disable */
  import axios from 'axios'
  // import LineChartData from 'data/charts/LineChartData'
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import DashboardBottomWidgets from './DashboardBottomWidgets.vue'
  import store from 'vuex-store'
  import utils from 'services/utils'

  let palette = store.getters.palette

  export default {
    name: 'dashboard',
    components: {
      DataVisualisationTab,
      DashboardInfoWidgets,
      UsersMembersTab,
      SetupProfileTab,
      FeaturesTab,
      DashboardBottomWidgets
    },
    data: () => ({
      lineChartData: {}
    }),
    mounted () {
      axios.post('https://facilitafn.azurewebsites.net/api/FacilitaPrediction2?code=DhCI4eDE/YattX8HnXUc8rLKT85B3UnXy8NSbfxWFbSQeVIML/Txqw==', {
          "nome": "G4 INFO SERVICOS DE INFORMATICA LTDA"
        })
        .then(result => JSON.parse(result.data))
        .then(response => {
          console.log('response', response)
          this.lineChartData = {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março'],
            datasets: [
              {
                label: 'Original',
                backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
                borderColor: palette.transparent,
                data: response.datasets[0].data
              },
              {
                label: 'Predição',
                backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
                borderColor: palette.transparent,
                data: response.datasets[1].data
              }
            ],
          }
      })
    },
    methods: {
      launchEpicmaxToast () {
        this.showToast(`Let's work together!`, {
          icon: 'fa-star-o',
          position: 'top-right',
          duration: Infinity,
          action: {
            text: 'Hire us',
            href: 'http://epicmax.co/#/contact',
            class: 'vuestic-toasted-link'
          }
        })
      }
    }
  }

</script>
<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
