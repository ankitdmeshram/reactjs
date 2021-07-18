import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponents from './ClassComponents'
import FunctionComponent from './FunctionComponent'
import Props from './Props'
import State from './State'
import HideAndShow from './HideAndShow'
import EventHandling from './EventHandling';
import StateFunctionalComponent from './StateFunctionalComponent';
import PropsFunctitonalComponent from './PropsFunctitonalComponent';
function App() {

  const [name, setName] = useState("Ankit");

  return (
    <div className="App">

        {/* <ClassComponents /> */}
        {/* <FunctionComponent text="i am happy" /> */}
        {/* <Props text={{name: 'ankit'}} /> */}
        {/* <State /> */}
        {/* <HideAndShow /> */}

        {/* <EventHandling /> */}

        {/* <StateFunctionalComponent /> */}
        <PropsFunctitonalComponent name={name} />
          <button onClick={() => setName("karan")} >Update Name</button>
        {/* <PropsFunctitonalComponent  name="ankit" email="ankitdm69@gmail.com" other={{address: 'mumbai', mobile: '24234'}} /> */}

    </div>


  );
}

export default App;
