import styled from 'styled-components'
import logo from './logo.svg'
import Matchess from './matches.png'

const Logo = styled.img`
max-height: 80%;
grid-column-start: 3;
`

const Headerr = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
grid-template-rows: 50px;
`
const Match = styled.img`
max-height: 80%;
grid-column-start: 5;
`
export function Head(){

    return (
        <Headerr>
    <Logo src={logo}/>
<Match src={Matchess} />
</Headerr>
)
}