import styled from 'styled-components'
import Header from './componentes/Header/index.jsx';
import Pesquisa from './componentes/Pesquisa/index.jsx';
import UlitmoLancamentos from './componentes/UltimoLancamentos/index.jsx';
const AppContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {

  return (
    <AppContainer>
     <Header/>
     <Pesquisa/>
     <UlitmoLancamentos/>
    </AppContainer>
  )
}

export default App
