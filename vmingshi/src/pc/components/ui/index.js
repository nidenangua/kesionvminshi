import card from './card'
import container from './container'
import empty from './empty'
import image from './image'
import backtop from './backtop'
const components = {
    install(Vue) {
        Vue.use(card);
        Vue.use(container);
        Vue.use(empty);
        Vue.use(image);
        Vue.use(backtop);
    }
}
export default components