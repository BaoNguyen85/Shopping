import { createStore } from 'vuex';
import product from './modules/product';
import cart from './modules/cart';
import { auth } from "./auth.module";

const state = {
  notes: [],
  timestamps: [],
};

const mutations = {
  ADD_NOTE(state, payload) {
      let newNote = payload;
      state.notes.push(newNote);
  },
  ADD_TIMESTAMP(state, payload) {
      let newTimeStamp = payload;
      state.timestamps.push(newTimeStamp);
  },
};

const actions = {
  addNote(context, payload) {
      context.commit("ADD_NOTE", payload);
  },
  addTimestamp(context, payload) {
      context.commit("ADD_TIMESTAMP", payload);
  },
};

const getters = {
  getNotes: (state) => state.notes,
  getTimestamps: (state) => state.timestamps,
};


export default createStore({
  modules: {
    product,
    cart,
    auth,
  },
  state,
  mutations,
  actions,
  getters,
});
