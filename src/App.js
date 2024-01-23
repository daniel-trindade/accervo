import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainContainer from "./Components/Layout/MainContainer";
import Converter from "./Components/Pages/Converter";
import Navbar from "./Components/Layout/Navbar";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";


function App() {
  return (
    <Router>
      
      <Navbar/>

      <MainContainer customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/conversor' element={<Converter/>}/>
          <Route path='/sobre' element={<About/>}/>
        </Routes>
      </MainContainer>

      

    </Router>
  );
}

export default App;
