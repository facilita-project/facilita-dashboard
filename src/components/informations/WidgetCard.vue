<template>
  <div class="col-6">
    <vuestic-widget>
      <h3>Nota fiscal</h3>
        <ul style="list-style: none; padding-left: 0px">
          <li><strong>CNPJ</strong>: {{ob.CNPJ}}</li>
          <li><strong>Data</strong>: {{ob.data}}</li>
          <li><strong>Valor</strong>: {{ob.valor}}</li>
          <li><strong>Nome</strong>: {{ob.nome}}</li>
        </ul>
      <div class="row">
        <div class="col-md-12">
          <button
            @click="openModal(ob.imgUrl)"
            class="btn btn-primary btn-sm">
            VER NOTA FISCAL
          </button>
        </div>
      </div>
    </vuestic-widget>


    <vuestic-modal
      :show.sync="show"
      :large="true"
      :force="true"
      ref="staticModal"
      :cancelClass="'none'"
      okText="FECHAR">
      <div slot="title">Imagem da nota</div>
      <div>
        <img :src="currentImage" style="width: 100%">
      </div>
    </vuestic-modal>

  </div>
</template>

<script>
export default {
  name: 'WidgetCard',
  props: {
    ob: Object
  },
  data: () => ({
    currentImage: true,
    show: false
  }),
  methods: {
    openModal (url) {
      this.currentImage = url
      this.$refs.staticModal.open()
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
