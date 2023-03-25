import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import Pokemones from "./views/Pokemones"
import Detalles from "./views/Detalles";


function App() {
  

  return (
    <div className="App">
      
      <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/pokemones" element={<Pokemones />}/>
           <Route path="/pokemon/:name" element={<Detalles />} />
         </Routes>
       </BrowserRouter>
     
    </div>
  );
}

export default App;
