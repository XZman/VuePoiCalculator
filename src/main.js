import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        poiScreenContent: '',
        poiAns: 0
    },
    mutations: {
        push: (state, poiText) => {
            if (state.poiScreenContent.slice(-1) === '.' &&  poiText === '.') {
                return
            }
            if (state.poiScreenContent === '0' && poiText == '0') {
                return
            }
            state.poiScreenContent += poiText
        },
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
        setPoiScreenContent: (state, poiNewContent) => state.poiScreenContent = poiNewContent,
        setPoiAns: (state, ans) => state.poiAns = ans
    },
    actions: {
        number(context, num) {
            context.commit('push', num)
        },
        operator(context, op) {
            if (op === '=') {
                let resultStr = ''
                try {
                    let resultNum = eval(context.state.poiScreenContent)
                    context.commit('setPoiAns', resultNum)
                    resultStr = '' + resultNum
                } catch(err) {
                    resultStr = err.message
                }
                context.commit('setPoiScreenContent', resultStr)
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
            if (ut === '(' || ut === ')') {
                context.commit('push', ut)
            }
            if (ut === 'Ans') {
                context.commit('push', context.state.poiAns) 
            }
        },
        mathFunction(context, func) {
            context.commit('push', func + '(')
        }
    }
})

// eslint-disable-next-line
let app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
