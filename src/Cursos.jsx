import './InformacoesPessoais.css'

const cursos = [

    'Desenvolvimento Web Full Stack | Step Computer Academy | 2023-2026'

]

export default function Cursos() {

    return (

        <div className="infos">

            <h1>Cursos</h1>

            <ul id='qualificacoes'>
                {
                    cursos.map(curso => <li>{curso}</li>)
                }
            </ul>

        </div>

    )

}