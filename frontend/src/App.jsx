import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NeverMiss from "./components/NeverMiss"
import Footer from "./components/Footer"

const App = () => {
  return (
    
    <div className='container'>
    <Router>
     <Routes>
      <Route path="/" element={<NeverMiss/>}/>
     </Routes>
     </Router>
     <Footer/>
    </div>
  )
}

export default App
