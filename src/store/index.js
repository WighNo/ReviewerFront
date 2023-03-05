import CatalogRequests from '@/requests/catalogRequests';
import { createStore } from 'vuex'

export default createStore({
  state: {
    companies: [],
    selectedCompany: null,
  },
  getters: {
    getCompanies(state) {
      return state.companies;
    },
    getSelectedCompany(state) {
      return state.selectedCompany;
    },
  },
  mutations: {
    updateCompanies(state, data) {
      state.companies = data
    },
    setSelectedCompany(state, data) {
      state.selectedCompany = data;
    },
  },
  actions: {
    async updateCompanies(state) {
      const data = await CatalogRequests.getAllCompanies();
      state.commit('updateCompanies', data);
    },
    setSelectedCompany(state, company) {
      state.commit('setSelectedCompany', company);
    }
  },
  modules: {

  }
})
