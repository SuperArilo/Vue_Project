import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        test: 'sss',
        top_shop_car: '0',
        shop_char_sum_price: '0'
    },
    mutations: {
        top_shop_car(state, Value) {
            state.top_shop_car = Value
        },
        shop_char_sum_price(state, Value) {
            state.shop_char_sum_price = Value
        }
    }
})
export default store
