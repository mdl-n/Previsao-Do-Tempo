import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import './InformacoesDetalhadas.css'

export default function InformacoesDetalhadas({ cfg }) {
    const dadosObj = cfg.list;
    const dadosFiltrados = dadosObj.filter((e) => e.dt_txt.endsWith('12:00:00'));
    console.log(dadosFiltrados)
    return (
        <div>
            
            <div className="containerdetalhado">
            <h2 className="titulo5dias">Previsão para os próximos 5 dias</h2>
            <div className="container5dias">
                {dadosFiltrados.map((e) => {
                    const diaFormatado = format(parseISO(e.dt_txt), 'EEEE, dd', {locale:ptBR});
                    const urlIcon = `https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`
                    return (
                        <div key={e.dt} className="containerindividual">
                        <p className="diaformatado">{diaFormatado}</p>
                        <img src={urlIcon}
                        style={{marginTop:-20}}
                        />
                        <p className="descricao">{e.weather[0].description}</p>
                        <p className="temp">{Math.round(e.main.temp)} °C</p>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}