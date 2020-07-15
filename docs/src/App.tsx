import React from 'react'

// import { GraphCircular } from 'react-graphical-ui'
import 'react-graphical-ui/dist/index.css'
import * as Graph from 'react-graphical-ui';
import { Circular } from 'react-graphical-ui';
import { CloudPoints } from 'react-graphical-ui';

const App = () => {
  return <>
    <Graph.ExampleComponent text="react-graphical-ui 😄"></Graph.ExampleComponent>
    <div style={{textAlign:'center'}}>
      <h2>Circular graphs components</h2>
      <h3>&lt;Circular value=&#123;47&#125;  max=&#123;100&#125; display="inline" withGrid=&#123;false&#125; /&gt;</h3>
      <Circular value={33} ></Circular>
      <Circular value={10} ></Circular>
      <Circular value={47} ></Circular>
      <Circular value={77} ></Circular>
      <Circular value={47}  max={100} display="inline" withGrid={true} />
    </div>
    <div style={{textAlign:'center'}}>
    <h2>CloudPoints graphs components</h2>
      <h3>&lt;CloudPoints values=&#123;[125,547,451,123,40,330]&#125; max=&#123;550&#125;/&gt;</h3>
      <CloudPoints values={[125,547,451,123,40,330]} max={550}></CloudPoints>
      <CloudPoints values={[12,60,51,23,40,30]}></CloudPoints>
    </div>
  </>
}

export default App;
