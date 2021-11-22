import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { DadosProvider } from './hooks/Dados';
import { Footer } from './components/Footer';
import './reset.css';

function App() {

  
  
  return (
    <>
      <DadosProvider>      
      <Header/>
      <Hero/>
      <Services/>
      <FormularioCadastro />
      </DadosProvider>
      <Footer/>
    </>
  )
}

export default App
