import React from 'react'
import Header from './HeaderComponent'
import Body from './BodyComponent'
require('styles//App.scss');
const App = () => (
  <div id="myssApp" className="app-component">
    <Header />
    <Body/>
  </div>
)

export default App
