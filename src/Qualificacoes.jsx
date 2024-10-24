import './InformacoesPessoais.css'

const conhecimentos = [

    'Conhecimento sólido em HTML, CSS e JavaScript para desenvolvimento de interfaces web.',
    'Experiência com React para criação de aplicações web dinâmicas e interativas.',
    'Familiaridade com linguagens de programação, incluindo Java, Python e C.',
    'Conhecimento em PHP para desenvolvimento de back-end.',
    'Experiência com bancos de dados relacionais e não relacionais, como MySQL e MongoDB.',
    'Habilidade no uso de ferramentas de versionamento de código, como Git.',
    'Capacidade de aprender rapidamente novas linguagens e tecnologias.'

]

export default function Qualificacoes() {

    return (

        <div className="infos">

            <h1>Qualificações</h1>

            <ul id='qualificacoes'>
                {
                    conhecimentos.map(conhecimento => <li>{conhecimento}</li>)
                }
            </ul>

        </div>

    )

}