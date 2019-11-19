import React, { Component } from "react";
import { Grid, Button, Segment } from 'semantic-ui-react'

class ReportItem extends Component {
  render() {
    const { report, handleResolve, handleBlock } = this.props;

    let resolve, block

    if (report.state == 1) {
      resolve = <Button primary onClick={this.handleResolve} />;
      block = <Button secondary onClick={this.handleBlock} />;
    }

    return (
      <Grid columns={3}>
      <Grid.Row>
      <Grid.Column>ID: {report.id}
      </Grid.Column>
      <Grid.Column>Type: {report.type}
      </Grid.Column>
      <Grid.Column width={10} textAlign='right'>
      {resolve}
      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>State: {report.state}
      </Grid.Column>
      <Grid.Column>Message: {report.message}
      </Grid.Column>
      <Grid.Column width={10} textAlign='right'>
      {block}
      </Grid.Column>
      </Grid.Row>

      </Grid>
    );
  }
}

class ReportList extends Component {
  render() {
    const { reports, handleResolve, handleBlock } = this.props;
    return (
      <Segment>
      { reports.map(item  => <ReportItem item={item} handleResolve={handleResolve} handleBlock={handleBlock} /> ) }
      </Segment>
    );
  }
}



export default ReportList;
