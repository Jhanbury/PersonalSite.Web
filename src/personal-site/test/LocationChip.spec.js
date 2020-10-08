import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import LocationChip from '@/components/shared/LocationChip.vue'

Vue.use(Vuetify)

describe('Location Chip', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  test('is Vue instance', () => {
    const wrapper = mount(LocationChip, { localVue, vuetify, propsData: {} })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('props populate as expected', () => {
    const wrapper2 = mount(LocationChip, {
      localVue,
      vuetify,
      propsData: {
        color: 'white',
        backgroundColor: 'red',
        location: 'Galway'
      }
    })
    wrapper2.html()
    const chip = wrapper2.find('.v-chip')
    expect(chip.text()).toContain('Galway')
    expect(chip.classes()).toContain('red')
    const icon = wrapper2.find('.v-icon')
    expect(icon.classes()).toContain('white--text')
  })
})
