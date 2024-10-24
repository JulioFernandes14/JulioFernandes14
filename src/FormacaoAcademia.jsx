import './InformacoesPessoais.css'

const formacoes = [

    'Ensino Médio Técnico em Informática | Centro Educacional Órion | 2021-2023',
    'Análise e Desenvolvimento de Sistemas | Universidade Estácio de Sá | 2024-2026',

]

export default function FormacaoAcademica() {

    return (

        <div className="infos">

            <h1>Formação Acadêmica</h1>

            <ul id='qualificacoes'>
                {
                    formacoes.map(formacao => <li>{formacao}</li>)
                }
            </ul>

        </div>

    )

}