<template>
  <div class="row">
    <WidgetCard
      v-for="(info, index) in infos"
      :key="index"
      :ob="info"
    />
  </div>
</template>

<script>
import WidgetCard from './WidgetCard'

export default {
  name: 'Informations',
  components: { WidgetCard },
  data: () => ({
    infos: []
  }),
  mounted () {
    fetch('https://facilitafn.azurewebsites.net/api/FacilitaList?code=xaZoGbIBCY16Gh5hG4gfBQACv2j6i6qVmKFDfGtxDPL5GNncvE7nuA==')
      .then(res => res.text())
      .then(JSON.parse)
      .then(JSON.parse)
      .then(res => {
        res.forEach(item => {
          if (item.NF) this.infos.push({...item.NF, imgUrl: item.path})
        })
      })
  }
}
</script>
