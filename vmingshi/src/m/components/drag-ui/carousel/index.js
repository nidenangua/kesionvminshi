import Carousel from './Carousel';

/* install component */
Carousel.install = function(Vue) {
    Vue.component(Carousel.name, Carousel);
};

export default Carousel;