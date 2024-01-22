import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Converter from "./Components/Pages/Converter";
import Home from "./Components/Pages/Home";


function App() {
  return (
    <Router>
      
      <Navbar/>

      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/conversor' element={<Converter/>}/>
        </Routes>
      </Container>

      <Footer/>

    </Router>
  );
}

export default App;
