import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { DadosProvider } from './hooks/Dados';
import './reset.css';

function App() {

  
  
  return (
    <div>
      <DadosProvider>      
      <Header/>
      <Hero/>
      <Services/>
      <FormularioCadastro />
      </DadosProvider>
    </div>
  )
}

export default App
