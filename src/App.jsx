import { useState } from 'react'
import './App.css'
import axios from 'axios';
import InformacoesCidade from './components/InformacoesCidade.jsx/InformacoesCidade';
import InformacoesDetalhadas from './components/InformacoesDetalhadas.jsx/InformacoesDetalhadas';

function App() {
  const [cidade, setCidade] = useState('');
  const [dados, setDados] = useState();
  const [dados5dias, setDados5dias] = useState();

  const apikey = '3b0998770f55ec57793c03c92e408c0b'

  async function buscarCidade(){

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&units=metric&lang=pt_br`
    const data = await axios.get(url)
    
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apikey}&units=metric&lang=pt_br`
    const data2 = await axios.get(url2);

    setDados(data.data)
    setDados5dias(data2.data)
    console.log(data.data)
    console.log(data2.data)
  }

  return (
   <div className='div1'>
    <h1 className='txtTitulo'>Previsão do Tempo</h1>
    <div>
    <input className='input'
    placeholder='Digite o nome da cidade'
    value={cidade}
    onChange={(e)=>setCidade(e.currentTarget.value)}
    />
    <button className='btn'
    onClick={buscarCidade}
    >Buscar</button>
    </div>

    {dados && (
     <InformacoesCidade cfg = {dados}/>
    )
    }
    {dados && (
      <InformacoesDetalhadas cfg = {dados5dias}/>
    )}

   </div>
  )
}

export default App
