import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_IP+':'+process.env.REACT_APP_BACKEND_PORT

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

  blockContent = async id => {
    await axios.post(API_URL+"/block/"+id, {}); // TODO - send current User there
  }

  resolveReport = async id => {
    //reports
    await axios.put(API_URL+"/reports/"+id);
  }
}

const api = new Api();

export default api;
