import './InformacoesPessoais.css'

const dados = {

    nome: 'Júlio César Machado Fernandes',
    idade: 18,
    email: 'juliocesarmf.1412@gmail.com',
    estadoCivil :'Solteiro'

}

export default function InformacoesPessoais() {

    return (

        <div className="infos">

            <h1>Informações Pessoais</h1>

            <ul>
                <li> <span className="dados">Nome:</span> {dados.nome}</li>
                <li> <span className="dados">Idade:</span> {dados.idade} anos</li>
                <li> <span className="dados">Email:</span> {dados.email} </li>
                <li> <span className="dados">Estado Civil:</span>  {dados.estadoCivil} </li>
            </ul>

        </div>

    )

}