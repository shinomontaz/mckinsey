import React, { Component } from 'react';
import Select from 'react-select';

import {
  Grid,
} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './App.css';

import ReportList from './components/reportList';
import api from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currState: null,
      currType: null,
      listReports: [],
      listStates: [],
      listTypes: []
    };
  }

  async componentDidMount() {
    var listStates = await api.loadStates();
    var listTypes = await api.loadTypes();

    this.setState({
      currState: listStates[0],
      currType: listTypes[0],
      listStates,
      listTypes
    });
  }

  async handleFilterState(selected) {
      this.setState({
          currState: selected
      })
  }

  async handleFilterType(selected) {
    this.setState({
        currType: selected
    })
  }

  async handleResolve(id) {
    alert("handleResolve" + id)
  }

  async handleBlock(id) {
    alert("handleBlock"+id)
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.currState !== this.state.currState || prevState.currType !== this.state.currType ) {
      var listReports = await api.loadReports(this.state.currState.value, this.state.currType.value);
      this.setState({listReports});
    }
  }

  render() {
    const { currState, currType, listReports, listStates, listTypes } = this.state;
    return (
      <div className="App">
      <Grid>
      <Grid.Column width={2} textAlign='left'>
        <Select value={currState} onChange={this.handleFilterState.bind(this)} options={listStates} placeholder='Статус...' className="inline-element"/>
      </Grid.Column>
      <Grid.Column width={10}>
        <Select value={currType} onChange={this.handleFilterType.bind(this)} options={listTypes} placeholder='Тип...' className="inline-element"/>
      </Grid.Column>
      </Grid>
      <ReportList reports={listReports} handleResolve={this.handleResolve} handleBlock={this.handleBlock}/>
      </div>
    );
  }
}

export default App;
