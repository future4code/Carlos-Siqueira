import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
state= {
perfis:[
 {
          nomeUsuario :'paulinha',
          fotoUsuario :'https://picsum.photos/50/50',
          fotoPost :'https://picsum.photos/200/150'
        }
          ,
      {   
        nomeUsuario :'joao.97',
          fotoUsuario :'https://picsum.photos/50/49',
          fotoPost :'https://picsum.photos/200/120'
        }
          ,

          {nomeUsuario:'ped.93',
          fotoUsuario:'https://picsum.photos/50/89',
          fotoPost:'https://picsum.photos/200/150'
        }
]
};

  render() {
    const postes = this.state.perfis.map((profile) => {
      return (<Post nomeUsuario = {profile.nomeUsuario} fotoUsuario = {profile.fotoUsuario} fotoPost = {profile.fotoPost} />
    )})
    return (
      <MainContainer>
      {postes}
      </MainContainer>
    );
  }
}

export default App;
