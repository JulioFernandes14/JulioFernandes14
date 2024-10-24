import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar.jsx'
import InformacoesPessoais from './InformacoesPessoais.jsx'
import ObjetivoProfissional from './ObjetivoProfissional.jsx'
import Qualificacoes from './Qualificacoes.jsx'
import AtividadesExtracurricular from './AtividadesExtracurricular'
import Cursos from './Cursos.jsx'
import {

  createBrowserRouter,
  RouterProvider

}from "react-router-dom"
import FormacaoAcademica from './FormacaoAcademia.jsx'
import Idiomas from './Idiomas.jsx'
import HistoricoProfissional from './HistoricoProfissional.jsx'
import Portifolio from './Portifolio.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Sidebar/>,
    children: [
      {
        path:'/informacoes',
        element: <InformacoesPessoais/>
      },
      {
        path:'/objetivo',
        element: <ObjetivoProfissional/>
      },
      {
        path:'/formacao',
        element: <FormacaoAcademica/>
      },
      {
        path:'/qualificacoes',
        element: <Qualificacoes/>
      }, 
      {
        path:'/idiomas',
        element:<Idiomas/>
      },
      {
        path:'/atividades',
        element:<AtividadesExtracurricular/>
      },
      {
        path:'/cursos',
        element:<Cursos/>
      },
      {
        path:'/historico',
        element:<HistoricoProfissional/>
      },
      {
        path:'/portifolio',
        element:<Portifolio/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
