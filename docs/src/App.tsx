import React from 'react'

// import { GraphCircular } from 'react-graphical-ui'
import 'react-graphical-ui/dist/index.css'
import * as Graph from 'react-graphical-ui';
import { Circular } from 'react-graphical-ui';

const App = () => {
  return <>
    <Graph.ExampleComponent text="react-graphical-ui"></Graph.ExampleComponent>
    <div style={{textAlign:'center'}}>
      <h2>Circular graphs components</h2>
      <h3>&lt;Circular value=&#123;47&#125;  max=&#123;100&#125; display="inline" withGrid=&#123;false&#125; /&gt;</h3>
      <Circular value={33} ></Circular>
      <Circular value={10} ></Circular>
      <Circular value={47} ></Circular>
      <Circular value={77} ></Circular>
      <Circular value={47}  max={100} display="inline" withGrid={true} />
    </div>
  </>
}

export default App;
