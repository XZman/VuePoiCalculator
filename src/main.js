import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        poiScreenContent: ''
    },
    mutations: {
        push: (state, poiText) => state.poiScreenContent += poiText,
        pop: state => {
            if (state.poiScreenContent.length == 0) {
                return
            }
            let poiLastChar = state.poiScreenContent.slice(-1)
            state.poiScreenContent = state.poiScreenContent.slice(0, -1)
            return poiLastChar
        },
        evaluate: state => state.poiScreenContent = eval(state.poiScreenContent),
        clear: state => state.poiScreenContent = '',
        setPoiScreenContent: (state, poiNewContent) => state.poiScreenContent = poiNewContent
    },
    actions: {
        number(context, num) {
            if (context.state.poiScreenContent.slice(-1) === '.' && num === '.') {
                return
            }
            if (context.state.poiScreenContent.length == 0 && num === '0') {
                return
            }
            context.commit('push', num)
        },
        operator(context, op) {
            if (op === '=') {
                let result = ''
                try {
                    result += eval(context.state.poiScreenContent)
                } catch(err) {
                    result = err.message
                }
                context.commit('setPoiScreenContent', result)
            } else {
                context.commit('push', op)
            } 
        },
        util(context, ut) {
            if (ut === 'CE' || ut === 'C') {
                context.commit('clear')
            }
            if (ut === 'delete') {
                context.commit('pop')
            }
        }
    }
})

// eslint-disable-next-line
let app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
