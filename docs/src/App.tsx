import React from 'react'

// import { GraphCircular } from 'react-graphical-ui'
import 'react-graphical-ui/dist/index.css'
import * as Graph from 'react-graphical-ui';
import { Circular } from 'react-graphical-ui';
import { Histogram } from 'react-graphical-ui';

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
    <h2>Histogram graphs components</h2>
      <h3>&lt;Histogram values=&#123;[47,...]&#125;  max=&#123;150&#125; notAllreadyFull=&#123;false&#125;  withGrid=&#123;false&#125;  gridDivisionCount=&#123;10&#125; display="inline" /&gt;</h3>
    <Histogram values={[ 20, 80, 19, 63, 80, 99, 56, 8, 49, 19, 21, 69, 56, 12, 23, 25, 10, 80, 25, 56, 2]} notAllreadyFull={false} whithGrid={true} gridDivisionCount={10} max={150} display="inline" />
      <Histogram values={[ 20, 80, 19, 63, 80, 99, 56, 8, 49, 19, 21, 69, 56, 12, 23, 25, 10, 80, 25, 56, 2]} notAllreadyFull={true} whithGrid={true} gridDivisionCount={5} max={150} />
    </div>
  </>
}

export default App;
