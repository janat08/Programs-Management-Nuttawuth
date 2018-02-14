import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Store } from "../stores/store.js"


@withRouter
@observer
@inject('store')
export default class App extends React.Component {
  render() {
    
    return (
    <div>
     <Card
    cover={
    <div> which is actually a grid item
    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/> 
    test inside image? use grid to position it? there's align to bottom
        </div>
}
  >
  use layout here for aside
  </Card>
    </div>
    );
  }
}


