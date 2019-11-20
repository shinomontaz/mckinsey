import React, { Component } from "react";
import { Button, Segment } from 'semantic-ui-react'

class ReportItem extends Component {
  render() {
    const { report, handleResolve, handleBlock } = this.props;

    let resolve, block

    if (report.state === 1) {
      resolve = <Button primary onClick={() => handleResolve(report.id)} >Resolve</Button>;
      block = <Button secondary onClick={() => handleBlock(report.id)} >Block</Button>;
    }

    return (
      <div>
      <div>
      <p>ID: {report.id}</p>
      <p>Type: {report.type}</p>
      </div>
      <div>
      <p>State: {report.state}</p>
      <p>Message: {report.message}</p>
      </div>
      <div>
      {resolve}
      {block}
      </div>
      </div>
    );
  }
}

class ReportList extends Component {
  render() {
    const { reports, handleResolve, handleBlock } = this.props;
    return (
      <Segment>
      { reports.map((item)  => <ReportItem report={item} key={item.id} handleResolve={handleResolve} handleBlock={handleBlock} /> ) }
      </Segment>
    );
  }
}



export default ReportList;
