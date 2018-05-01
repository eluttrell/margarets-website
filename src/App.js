import React, { Component } from 'react';
import WorkItemButton from './components/work-item-button/work-item-button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>home</p>
          <p>page1</p>
          <p>page2</p>
          <p>page3</p>
          <p>page4</p>
          <p>page5</p>
          <p>page6</p>
          <p>contact</p>
        </header>
        <div className="app-title">
          <div className="app-title-main">Maelstrom Fine Arts</div>
          <small className="app-title-footer">Artist | Teacher</small>
        </div> 
        <div className="app-content">
          <WorkItemButton className="app-content-work-item-button"/>
          <WorkItemButton className="app-content-work-item-button"/>
          <WorkItemButton className="app-content-work-item-button"/>
          <WorkItemButton className="app-content-work-item-button"/>
          <WorkItemButton className="app-content-work-item-button"/>
          <WorkItemButton className="app-content-work-item-button"/>
        </div>
     </div>
    );
  }
}

export default App;
