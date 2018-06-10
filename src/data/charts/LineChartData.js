import utils from 'services/utils'
import store from 'vuex-store'

let palette = store.getters.palette

export default {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março'],
  datasets: [
    {
      label: 'Original',
      backgroundColor: utils.hex2rgb(palette.primary, 0.6).css,
      borderColor: palette.transparent,
      data: [8000, 8500, 9000, 9000, 8000, 8000, 9000, 9000, 8000, 8300, 9000, 8200, 0, 0, 0]
    },
    {
      label: 'Predição',
      backgroundColor: utils.hex2rgb(palette.info, 0.6).css,
      borderColor: palette.transparent,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8518.2, 8848.6, 8851.4]
    }
  ],
}
