<template>
  <vuestic-widget>
    <h3>Solititação de {{type}}</h3>
    <p>A empresa Brasdesco esta solicitando acesso aos seus dados para {{type}}, deseja conceder?</p>
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-primary btn-sm">
          ACEITAR
        </button>
        <button class="btn btn-danger btn-sm">
          RECUSAR
        </button>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  name: 'WidgetMessage',
  props: {
    type: String
  }
}
</script>

