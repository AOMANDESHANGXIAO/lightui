import lfButton from './button.vue'
import lfCarousel from './carousel.vue'
import lfCarouselItem from './carouselItem.vue'
import lfCol from './col.vue'
import lfCollapse from './collapse.vue'
import lfCollapseItem from './collapseItem.vue'
import lfDialog from './dialog.vue'
import lfH from './h.vue'
import lfInput from './input.vue'
import lfLink from './link.vue'
import lfProgress from './progress.vue'
import lfRadio from './radio.vue'
import lfRadioGroup from './radioGroup.vue'
import lfRow from './row.vue'
import lfSwitch from './switch.vue'
import lfText from './text.vue'

const components = {
  lfButton,
  lfCarousel,
  lfCarouselItem,
  lfCol,
  lfCollapse,
  lfCollapseItem,
  lfDialog,
  lfH,
  lfInput,
  lfLink,
  lfProgress,
  lfRadio,
  lfRadioGroup,
  lfRow,
  lfSwitch,
  lfText
}

function install(Vue) {
  const keys = Object.keys(components)
  keys.forEach((name) => {
    const component = components[name]
    Vue.component(component.name || name, component)
  })
}

export default {
  install,
  ...components
}
