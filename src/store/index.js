import Vue from "vue";
import Vuex from "vuex";

// Import axios for making HTTP requests
import axios from "axios";

Vue.use(Vuex);

// Set the base URL for the API
const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export default new Vuex.Store({
  state: {
    contacts: [], // State to store the list of contacts
  },
  getters: {
    // Getter to access the contacts from the state
    contacts(state) {
      return state.contacts;
    },
  },
  mutations: {
    // Mutation to update the contacts in the state
    SET_CONTACTS(state, contacts) {
      state.contacts = contacts;
    },
  },
  actions: {
    // Action to fetch all contacts from the API
    async getAllContactsData({ commit }) {
      try {
        const response = await axios.get(`${BASE_URL}/contacts`);
        commit('SET_CONTACTS', response.data.data); // Commit the response data to the state
        return response;
      } catch (error) {
        console.error("Error fetching contacts:", error);
        return error;
      }
    },
  },
  modules: {},
});
