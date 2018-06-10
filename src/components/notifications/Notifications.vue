<template>
  <div class="row">
    <div class="col">
      <WidgetMessage type="analise de crédito" />
    </div>

    <div class="col">
      <WidgetMessage type="extensão de prazo" />
    </div>
  </div>
</template>

<script>
import WidgetMessage from './WidgetMessage'

export default {
  name: 'Notifications',
  components: { WidgetMessage }
}
</script>

