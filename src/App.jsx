import { Route, Routes } from 'react-router-dom';

import Form from './components/main/Formulario/Form';
import ResultDate from './components/main/Resultados/ResultDate';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { firebaseConfig } from './utils/firebase';

import './App.css';


firebaseConfig();

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/resultDate" element={<ResultDate />} />    
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App;
