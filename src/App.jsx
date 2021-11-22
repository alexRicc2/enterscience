import axios from 'axios';
import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Form } from './components/Form';
import './reset.css';

function App() {

  
  const [text, setText] = useState("");
  const handleText = async e => {
    await setText(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log(text)
    let formData = new FormData();
    formData.append("text", text);
    const url = "http://localhost:80/react-backend/"
    console.log(formData);
    axios.post(url, formData)
      .then(res=>console.log(res.data))
      .catch(err=> console.log(err));
  }
  return (
    <div>
      <Header/>
      <Hero/>
      <Services/>
      <Form/>
      <form>
        <input type="text" id="text" 
          onChange={handleText}  
          value={text}
          required
        />
        <button id="submit" type="submit"
          onClick={handleSubmit}
        >Enviar</button>
      </form>
    </div>
  )
}

export default App
