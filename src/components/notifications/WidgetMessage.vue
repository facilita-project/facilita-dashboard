<template>
  <vuestic-widget>
    <h3>Solicitação de {{type}}</h3>
    <p>A empresa {{company}} esta solicitando acesso aos seus dados para {{type}}, deseja conceder?</p>
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
    type: String,
    company: { type: String, default: 'Brasdesco' }
  }
}
</script>

