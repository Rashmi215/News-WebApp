import React, { Component } from 'react';
import SourceList from '../container/source_list';
import SelectedSource from '../container/selected_source';
import DetailSource from '../container/source_detail';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
             <Route exact path='/' component={SourceList} />
             <Route exact path='/news/:id' component={SelectedSource} />
             <Route exact path='/news/detail/:id' component={DetailSource} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
