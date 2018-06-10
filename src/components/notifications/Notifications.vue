<template>
  <div class="row">
    <WidgetMessage type="analise de crédito" v-for="n in 5" :key="n"/>
  </div>
</template>

<script>
import WidgetMessage from './WidgetMessage'

export default {
  name: 'Notifications',
  components: { WidgetMessage }
}
</script>

