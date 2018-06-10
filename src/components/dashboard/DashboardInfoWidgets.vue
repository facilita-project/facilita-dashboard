<template>
  <div class="row dashboard-info-widgets">
    <div class="col">
      <vuestic-widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              <i class="ion ion-md-arrow-up text-primary stats-icon"></i>
              R$2.567,00
            </div>
            <div class="stats-title">Saldo do mês anterior</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col">
      <vuestic-widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              <i class="ion ion-md-arrow-down text-danger stats-icon"></i>
              R$8.321,00
            </div>
            <div class="stats-title">Receita de vendas</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col">
      <vuestic-widget class="info-widget brand-danger">
        <div class="info-widget-inner">
          <div class="info-widget-inner has-chart">
            <div class="stats">
              <div class="stats-number">
                R$8.321,00
              </div>
              <div class="stats-title">Total de pagamentos</div>
            </div>
            <div class="chart-container">
              <vuestic-progress-bar type="circle" ref="circleProgress" :colorName="'white'" :backgroundColorName="'danger'"
                            :startColorName="'warn'"></vuestic-progress-bar>
            </div>
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col-md-12">
      <vuestic-widget class="info-widget brand-info" style="background-color: #96edb8; border-color: #96edb8; color: #444">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              Baixo Risco - 1
            </div>
            <div class="stats-title">Ao indo cadastrando mais daos você aumenta seu score</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard-info-widgets',

    mounted () {
      this.$refs.circleProgress.$data.value = 70
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
    width: 100%;

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
