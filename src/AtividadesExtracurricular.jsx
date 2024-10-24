import './InformacoesPessoais.css'

const atividades = [

    'Monitor de Grupo de Estudos em Desenvolvimento Web',
    'Líder de Projeto | Simulador de Caixa Eletrônico em Java',
    'Participante do Programa LTD (Laboratório de Tecnologias Digitais) da Universidade Estácio de Sá'

]

export default function AtividadesExtracurricular() {

    return (

        <div className="infos">

            <h1>Atividades Extracurriculares</h1>

            <ul id='qualificacoes'>
                {
                    atividades.map(atividade => <li>{atividade}</li>)
                }
            </ul>

        </div>

    )

}