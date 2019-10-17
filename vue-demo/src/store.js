import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 其实真实项目中
// state、actions、mutations、getters
// 每个都抽取成一个独立的文件，再一起引入

// state 相当于数据库
const state = {
  number: 1
};

// actions 相当于 业务逻辑层 serviceImpl
const actions = {
  increment({commit}) {
    // 调用 mutations 中的方法
    commit('inc');
  },
  decrement({commit, state}) {
    // 这里也可以通过 state 进行业务逻辑处理
    if (state.number > 0) {
      // 调用 mutations 中的方法
      commit('dec');
    }
  }
};

// mutations 相当于 数据访问层 dao
const mutations = {
  inc(state) {
    state.number++;
  },
  dec() {
    state.number--;
  }
};

const getters = {
  evenOrOdd(state) {
    return state.number % 2 === 0 ? '偶数' : '奇数';
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
