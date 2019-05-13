import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        getdata(state, res) {
            state.data = res
            // console.log("1")
            // console.log(state.data)

        }
    },
    actions: {
        getdata(context) {
            Axios.get('http://10.35.164.66:3000/usersee/api/get').then((res) => {
                // console.log("2")
                context.commit('getdata', res.data)// 通过接口获取的后台数据保存到store中，等待组件取用
            })
        }
    },
   
})

export default store;

//bug是不能同步


