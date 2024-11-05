import './InformacoesCidade.css'

export default function InformacoesCidade({cfg}){
    const urlimg = `https://openweathermap.org/img/wn/${cfg.weather[0].icon}@2x.png`
    return(
        <div className="containerCidade">
            <h2 className='txtTituloCidade'>{cfg.name}, {cfg.sys.country}</h2>
            <div className='imgeTemp'>
                <img src={urlimg}/>
                <h2 className='letratemp'>{Math.round(cfg.main.temp)} °C</h2>
            </div>
            <h2 className='descricao'>{cfg.weather[0].description}</h2>
            <div className='tresinfos'>
                <p>Sensação térmica: {Math.round(cfg.main.feels_like)} °C</p>
                <p>Umidade: {cfg.main.humidity}%</p>
                <p>Velocidade do Vento: {Math.round(cfg.wind.speed * 3.6)} km/h</p>
            </div>
        </div>
    )
}