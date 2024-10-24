import './InformacoesPessoais.css'

const historico = [

    'Estagiário de TI | RM Advogados Associados | 2024'

]

export default function HistoricoProfissional() {

    return (

        <div className="infos">

            <h1>Historico Profissional</h1>

            <ul id='qualificacoes'>
                {
                    historico.map(atividade => <li>{atividade}</li>)
                }
            </ul>

        </div>

    )

}