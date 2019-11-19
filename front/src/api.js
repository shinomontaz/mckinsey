import axios from "axios";

const API_URL = "http://localhost:2222";

class Api {

  loadStates = async () => {
    var { data: states } = await axios.get(API_URL+"/states");
    states = states.map(s => { return { value: s.id, label: s.title } });
    return states
  }

  loadTypes = async () => {
    var { data: types } = await axios.get(API_URL+"/types");
    types = types.map(t => { return { value: t.id, label: t.title } });
    return types
  }

  loadReports = async (state, type) => {
    var { data: reports } = await axios.get(API_URL+"/reports?state="+state+"&type="+type);
    return reports
  }
}

const api = new Api();

export default api;
