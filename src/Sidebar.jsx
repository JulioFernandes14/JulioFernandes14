import './Sidebar.css'
import { Outlet,Link } from 'react-router-dom'

export default function() {

    return (

        <div className='row'>
        
            <div className="col-3 bg-dark sidebar">

                <ul>

                    <li><Link to={'/informacoes'} className='link'>Informações Pessoais</Link></li>
                    <li><Link to={'/objetivo'} className='link'>Objetivo Profissional</Link></li>
                    <li><Link to={'/formacao'} className='link'>Formações Acadêmicas</Link></li>
                    <li><Link to={'/qualificacoes'} className="link">Qualificações</Link></li>
                    <li><Link to={'/idiomas'} className="link">Idiomas</Link></li>
                    <li><Link to={'/atividades'} className="link">Atividades Extracurriculares</Link></li>
                    <li><Link to={'/cursos'} className="link">Cursos</Link></li>
                    <li><Link to={'/historico'} className="link">Histórico Profissional</Link></li>
                    <li><Link to={'/portifolio'} className="link">Portifólio</Link></li>

                </ul>

            </div>

            <div className="detail col-9">

                <Outlet/>

            </div>
        
        </div>

    )

}