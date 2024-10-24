import './InformacoesPessoais.css'

const projetos = [

    {
        nome:"Site de Loja Esportiva",
        link: "https://github.com/JulioFernandes14/projetoWeb"
    },
    {
        nome:"Conversor de moedas",
        link: "https://github.com/JulioFernandes14/ConversorMoedasJs"
    },
    {
        nome:"Consumo de API's",
        link: "https://github.com/JulioFernandes14/ConsumoJsonAPIs"
    },
    {
        nome:"To do list",
        link: "https://github.com/JulioFernandes14/ToDoListJS"
    },
    {
        nome:"Simulador de transações JS",
        link: "https://github.com/JulioFernandes14/bancoDigitalJS"
    },
    {
        nome:"Front-end Simulador de Caixa eletrônico",
        link: "https://github.com/JulioFernandes14/bancoDigitalJS"
    },

]

export default function Portifolio() {

    return (

        <div className="infos">

            <h1>Projetos</h1>

            <ul id='qualificacoes'>
                {
                    projetos.map(projeto => <li>{projeto.nome} | <a href={projeto.link} target='_blank'>Acessar no GitHub</a> </li>)
                }
            </ul>

        </div>

    )

}