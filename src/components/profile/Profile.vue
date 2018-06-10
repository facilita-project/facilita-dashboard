<template>
  <vuestic-widget>
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="row">
      <div class="col-3">
        <vuestic-profile-card
          style="text-align: center"
          :name="profile.razao_social"
          :location="profile.cidade.toLowerCase()" 
          :photoSource="profile.imageUrl"
          :social="[]">
        </vuestic-profile-card>
      </div>
      <div class="col-6" style="margin-top: 50px">
        <ul style="list-style: none; padding-left: 0px">
          <li><strong>CNPJ</strong>: {{profile.cnpj}}</li>
          <li><strong>Abertura</strong>: {{formatDate(profile.data_fundacao)}}</li>
          <li><strong>Status</strong>: OK</li>
          <li><strong>Atividade</strong>: {{profile.atividades}}</li>
        </ul>
        <button
          @click="request(profile)"
          class="btn btn-primary btn-sm">
          SOLICITAR DADOS
        </button>
      </div>
      <div class="col-3" style="margin-top: 50px;">
        <vuestic-widget :class="`info-widget brand-${profile.brand}`">
          <div class="info-widget-inner">
            <div class="info-widget-inner has-chart">
              <div class="stats">
                <div class="stats-number">
                  {{(profile.score || {}).value}}
                </div>
                <div class="stats-title">{{(profile.score || {}).label}}</div>
              </div>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
    <hr>
  </vuestic-widget>
</template>

<script>
import moment from 'moment'
import {mapActions} from 'vuex'

export default {
  name: 'Profile',
  props: {
    profiles: Array
  },
  methods: {
    ...mapActions([
      'changeSearchBarStatus'
    ]),
    formatDate (date) {
      return moment(date).format('DD/MM/YYYY')
    },
    request (profile) {
      fetch('https://facilitafn.azurewebsites.net/api/FacilitaNotificacaoInsert?code=zXnBK7Pf13eer8AtHm767IXAZ2Po8/cvDlYPUcI/Mx2C2jEgXbDHZQ==', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ company: 'Itau', type: 'solicitação de crédito' })
      })
      this.changeSearchBarStatus(false)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }
</style>
