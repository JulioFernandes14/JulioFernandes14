import './ObjetivoProfissional.css'

const objProfissional = 'Busco uma oportunidade de estágio na área de desenvolvimento web, tanto em front-end quanto em back-end, onde possa aplicar e aprimorar minhas habilidades. Tenho grande facilidade em aprender novas tecnologias e estou motivado a contribuir com soluções inovadoras, ao mesmo tempo em que continuo a me desenvolver profissionalmente no setor.'

export default function ObjetivoProfissional() {

    return (

        <div className="objetivo-profissional">

            <h1>Objetivo Profissional</h1>

            <p>
                {objProfissional}
            </p>

        </div>

    )

}