import { createStore } from 'vuex'

const vuexs = createStore({
    state:{
        tags:[{name:'首页',path:'/'}],
    },
    getters:{

    },
    mutations:{
        SETTAGS(state,payload){
            let arrName = []
            for(let i = 0;i < state.tags.length;i++){
                arrName.push(state.tags[i].name)
            }
            if(arrName.indexOf(payload.name) == -1){
                state.tags.push(payload)
            }
        }
    },
    actions:{

    },
})
export default vuexs