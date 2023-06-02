import { Link } from "react-router-dom";
import styled from "styled-components";
import Historico from "../components/habitos/Historico";
import Hoje from "../components/habitos/Hoje";
import MeusHabitos from "../components/habitos/MeusHabitos";
import ContainerHabitos from "../components/styles/habitos";

export default function Habitos(){



    let pagina = "hoje";

    return (
    <ContainerPaginaHabitos className="page">

        <Header>
            <p>TrackIt</p>
            <img src="https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-sublimado-bob-esponja-17984.png" />
        </Header>

        <ContainerHabitos>
            {(pagina === 'meus') ? <MeusHabitos /> : ((pagina === 'hoje') ? <Hoje /> : <Historico />)}        
        </ContainerHabitos>

        <Footer>
            <p>Hábitos</p>
            <p>Histórico</p>
        </Footer>

    </ContainerPaginaHabitos>
    );
}   

const ContainerPaginaHabitos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;

`
const Header = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-family: 'Playball', cursive;
        width: 97px;
        height: 49px;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img{
        width: 60px;
        height: 60px;
        border-radius: 50px;
    }

    
`

const Footer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0 36px; 
`