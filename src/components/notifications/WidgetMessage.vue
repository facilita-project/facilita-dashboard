<template>
  <transition name="fade">
    <div class="col-6" v-if="show">
      <vuestic-widget>
        <h3>Solicitação de {{type}}</h3>
        <p>A empresa {{company}} esta solicitando acesso aos seus dados para {{type}}, deseja conceder?</p>
        <div class="row">
          <div class="col-md-12">
            <button
              @click="close(id)"
              class="btn btn-primary btn-sm">
              ACEITAR
            </button>
            <button
              @click="close(id)"
              class="btn btn-danger btn-sm">
              RECUSAR
            </button>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'WidgetMessage',
  props: {
    type: String,
    id: String,
    company: { type: String, default: 'Brasdesco' }
  },
  data: () => ({
    show: true
  }),
  methods: {
    close (id) {
      fetch('https://facilitafn.azurewebsites.net/api/FacilitaNotificacaoDelete?code=xaZoGbIBCY16Gh5hG4gfBQACv2j6i6qVmKFDfGtxDPL5GNncvE7nuA==', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ _id: id })
      })
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
