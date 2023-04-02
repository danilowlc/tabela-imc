import { useState } from "react"
import style from './Formulario.module.css'

const Formulario = () => {

    const [altura, setAltura] = useState()
    const [peso, setPeso] = useState()
    const [resultado, setResultado] = useState()

    const calculaImc = (e) => {
        e.preventDefault()
        if (peso <= 0) {
            alert('Insira um peso valido')
            return
        }
        const imc = peso / (altura * altura)
        setResultado(imc.toFixed(2))
    }

    const riscoIMC = () => {
        if (resultado >= 40) {
            return (
                <span>Seu IMC é {resultado} sua <b>classificação é Obsidade III</b></span>
            )
        }
        else if (resultado < 40 && resultado >= 35) {
            return (
                <span>Seu IMC é {resultado} sua <b>classificação é Obsidade II</b></span>
            )
        }
        else if (resultado < 35 && resultado >= 30) {
            return (
                <span>Seu IMC é {resultado} sua <b>classificação é Obsidade I</b></span>
            )
        }
        else if (resultado < 30 && resultado >= 25) {
            return (
                <span>Seu IMC é {resultado} sua classificação é <b>Acima do peso (sobrepeso)</b></span>
            )
        }
        else if (resultado < 25 && resultado >= 18.5) {
            return (
                <span>Seu IMC é {resultado} sua classificação é <b>Peso Normal</b></span>
            )
        }
        else if (resultado < 18.5) {
            return (
                <span>Seu IMC é {resultado} sua classificação é <b>Abaixo do peso</b></span>
            )
        }
    }

    return (
        <div className="container">
            <form onSubmit={calculaImc}>
                <div className="row">
                    <div className="col-md-4">
                        <input type="text" inputMode="numeric" placeholder="Altura (m)" className="form-control" onChange={e => setAltura(parseFloat(e.target.value))} />
                    </div>
                    <div className="col-md-4">
                        <input type="text" inputMode="numeric" placeholder="Peso (kg)" className="form-control" onChange={e => setPeso(parseFloat(e.target.value))} />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="form-control btn btn-primary">
                            Calcular
                        </button>
                    </div>
                </div>
                <div className="row">
                    {resultado > 0 && (
                        <div className={style.resultado}>
                            {riscoIMC()}
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Formulario