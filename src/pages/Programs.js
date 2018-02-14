import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"
import {ProgramsTable, data, columns} from "../comps/ProgramsTable"
import {ProgramsList, data as data2} from "../comps/ProgramsList"
import moment from "moment";

@withRouter
@observer
@inject('store')
export default class Programs extends React.Component {
  render() {
    
    return (
    <div>
      <h1>Lists or Tables? Tables are easier to filter/sort</h1>
      {/* <ProgramsTable data={data} columns={columns}/> */}
    </div>
    );
  }
}


