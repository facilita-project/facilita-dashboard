<template>
  <transition name="fade">
    <div class="col-6" v-if="show">
      <vuestic-widget>
        <h3>Solicitação de {{type}}</h3>
        <p>A empresa {{company}} esta solicitando acesso aos seus dados para {{type}}, deseja conceder?</p>
        <div class="row">
          <div class="col-md-12">
            <button
              @click="close"
              class="btn btn-primary btn-sm">
              ACEITAR
            </button>
            <button
              @click="close"
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
    company: { type: String, default: 'Brasdesco' }
  },
  data: () => ({
    show: true
  }),
  methods: {
    close () {
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
