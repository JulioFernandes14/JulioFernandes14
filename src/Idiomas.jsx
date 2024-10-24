import './InformacoesPessoais.css'

const idiomas = [

    'Português - Avançado',
    'Inglês - Intermediário',
    'Espanhol - Básico'

]

export default function Idiomas() {

    return (

        <div className="infos">

            <h1>Idiomas</h1>

            <ul id='qualificacoes'>
                {
                    idiomas.map(idioma => <li>{idioma}</li>)
                }
            </ul>

        </div>

    )

}