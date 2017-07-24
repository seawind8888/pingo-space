import Vue from 'vue';
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions,
    mutations,
    state: {
        learnex: '',
        learn: '',
        schoolex: '',
        schoolexDateBox: [],
        schoolexCell: '',
        enrollments: '',
        user: '',
        isReady: false
    }
})

export default store