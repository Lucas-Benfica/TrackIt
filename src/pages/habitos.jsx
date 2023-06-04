import { Link } from "react-router-dom";
import styled from "styled-components";
import Historico from "../components/habitos/Historico";
import Hoje from "../components/habitos/Hoje";
import MeusHabitos from "../components/habitos/MeusHabitos";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";


export default function Habitos(props) {
    const { tela } = props;

    const [percentage, setPercentage] = useState(60);



    return (
        <ContainerPaginaHabitos className="page">

            <Header>
                <p>TrackIt</p>
                <img src="https://static.adecoretecidos.com.br/public/adecoretecidos/imagens/produtos/painel-sublimado-bob-esponja-17984.png" />
            </Header>

            <ContainerHabitos>

                {(tela === 'habitos') && <MeusHabitos />}
                {(tela === 'hoje') && <Hoje percentage={percentage} setPercentage={setPercentage} />}
                {(tela === 'historico') && <Historico />}

            </ContainerHabitos>



            <Footer>
                <StyledLink to='/habitos'>
                    <p>Hábitos</p>
                </StyledLink>

                <StyledCirc to='/hoje'>
                    <CircularProgressbar
                        value={percentage}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </StyledCirc>

                <StyledLink to='/historico'>
                    <p>Histórico</p>
                </StyledLink>
            </Footer>

        </ContainerPaginaHabitos>
    );
}

const ContainerPaginaHabitos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;

`
const ContainerHabitos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 22px 17px;
    margin-top: 70px;
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
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #52B6FF;
`

const StyledCirc = styled(Link)`
    width: 91px;
    height: 91px;
    background-color: #52B6FF;
    border-radius: 100px;
    position: absolute;
    left: 142px;
    bottom: 10px;
    z-index: 3;
`