<template>
  <div class="row">
    <WidgetMessage v-for="(card, index) in cards" :key="index" :type="card.type" :id="card._id" :company="card.company" />
  </div>
</template>

<script>
import WidgetMessage from './WidgetMessage'

export default {
  name: 'Notifications',
  components: { WidgetMessage },
  data: () => ({
    cards: []
  }),
  created () {
    fetch('https://facilitafn.azurewebsites.net/api/FacilitaNotificacaoList?code=UKzmByPl0SPALMp2guJQSaPLNDX9DTF2Fs3E/uqFaYzQMsYuuwIqvg==')
      .then(res => res.text())
      .then(JSON.parse)
      .then(JSON.parse)
      .then((res) => {
        console.log(res)
        this.cards = res
      })
  }
}
</script>

