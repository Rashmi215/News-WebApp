import React, { Component } from 'react';
import SourceList from '../container/source_list';
import SelectedSource from '../container/selected_source';

class App extends Component {
  render() {
    return (
      <div>
        <SourceList />
        <SelectedSource />
      </div>
    );
  }
}

export default App;
