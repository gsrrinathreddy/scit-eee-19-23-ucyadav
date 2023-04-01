import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Aboutme from './pages/Aboutme';
import Hobbies from './pages/Hobbies';
import Qualifications from './pages/Qualifications';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>

     <Route path="Aboutme" element={<Aboutme/>}/>
     <Route path="Skills" element={<Skills/>}/>
     <Route path="Qualifications" element={<Qualifications/>}/>
     <Route path="Hobbies" element={<Hobbies/>}/>

     </Routes>
     </BrowserRouter>
     

    </div>
  );
}

export default App;
