import axios from "axios";

const API_URL = "http://localhost:2222";

class Api {

  loadStates = async () => {
    var { data: states } = await axios.get(API_URL+"/states");
    states = states.map(r => { return { value: r, label: r.name } });
    return states
  }

  loadTypes = async () => {
    var { data: types } = await axios.get(API_URL+"/types");
    types = types.map(r => { return { value: r, label: r.name } });
    return types
  }

  loadReports = async (state, type) => {
    var { data: reports } = await axios.get(API_URL+"/reports?state="+state+"&type="+type);
    reports = reports.map(r => { return { value: r, label: r.name } });
    return reports
  }
}

const api = new Api();

export default api;
