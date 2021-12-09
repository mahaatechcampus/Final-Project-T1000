import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Pay from './Component/Pay'
import Success from './Component/Success'
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <Home/>
      <Routes>
        <Route path="/pay" element=  {<Pay/>} />
        <Route path="/success" element= {<Success/>} />
        </Routes>
    </Router>
  );
}

export default App;
