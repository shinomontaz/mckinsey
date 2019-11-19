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
    this.handleResolve = this.handleResolve.bind(this)
    this.handleBlock = this.handleBlock.bind(this)

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

  async handleResolve(id) {
     await api.resolveReport(id);
     await this.loadReports();
  }

  async handleBlock(id) {
    await api.blockContent(id);
    await this.loadReports();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.currState !== this.state.currState || prevState.currType !== this.state.currType ) {
      await this.loadReports()
    }
  }

  async loadReports() {
    var listReports = await api.loadReports(this.state.currState.value, this.state.currType.value);
    this.setState({listReports});
  }

  render() {
    const { currState, currType, listReports, listStates, listTypes } = this.state;
    return (
      <div className="App">
      <Grid>
      <Grid.Column width={2} textAlign='left'>
        <Select value={currState} onChange={(selected) => this.setState({ currState: selected })} options={listStates} placeholder='Статус...' className="inline-element"/>
      </Grid.Column>
      <Grid.Column width={10}>
        <Select value={currType} onChange={(selected) => this.setState({ currType: selected })} options={listTypes} placeholder='Тип...' className="inline-element"/>
      </Grid.Column>
      </Grid>
      <ReportList reports={listReports} handleResolve={this.handleResolve} handleBlock={this.handleBlock}/>
      </div>
    );
  }
}

export default App;
