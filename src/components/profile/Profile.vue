<template>
  <vuestic-widget>
    <div class="row">
      <div class="col-3">
        <vuestic-profile-card
          :name="name" 
          :location="location" 
          :photoSource="photoSource"
          :social="social">
        </vuestic-profile-card>
      </div>
      <div class="col-6" style="margin-top: 50px">
        <ul style="list-style: none; padding-left: 0px">
          <li><strong>CNPJ</strong>: 29070762000146</li>
          <li><strong>Abertura</strong>: 14/11/2017</li>
          <li><strong>Status</strong>: OK</li>
          <li><strong>Atividade</strong>: Desenvolvimento de software</li>
        </ul>
        <button class="btn btn-primary btn-sm">
          SOLICITAR DADOS
        </button>
      </div>
      <div class="col-3" style="margin-top: 50px;">
        <vuestic-widget class="info-widget brand-info">
          <div class="info-widget-inner">
            <div class="info-widget-inner has-chart">
              <div class="stats">
                <div class="stats-number">
                  4
                </div>
                <div class="stats-title">Baixo Risco</div>
              </div>
            </div>
          </div>
        </vuestic-widget>

      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: { type: String, default: 'Veronique Lee' },
    location: { type: String, default: 'Malaga, Spain' },
    photoSource: { type: String, default: 'http://i.imgur.com/NLrdqsk.png' },
    social: { type: Array, default: [] }
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
