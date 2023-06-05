import { Link } from "react-router-dom";
import styled from "styled-components";
import Historico from "../components/habitos/Historico";
import Hoje from "../components/habitos/Hoje";
import MeusHabitos from "../components/habitos/MeusHabitos";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useContext, useState } from "react";
import { PercentContext } from "../context/PercentContext";
import { TokenContext } from "../context/TokenContext";


export default function Habitos(props) {
    const { tela } = props;

    const {img} = useContext(TokenContext);
    const {percent} = useContext(PercentContext);

    return (
        <ContainerPaginaHabitos className="page">
            <DivHeader>
                <Header data-test="header">
                    <p>TrackIt</p>
                    <img src={img} data-test="avatar"/>
                </Header>
            </DivHeader>
            <ContainerHabitos>

                {(tela === 'habitos') && <MeusHabitos />}
                {(tela === 'hoje') && <Hoje />}
                {(tela === 'historico') && <Historico />}

            </ContainerHabitos>
            <DivFooter>
                <Footer data-test="menu">
                    <StyledLink to='/habitos' data-test="habit-link">
                        <p>Hábitos</p>
                    </StyledLink>

                    <StyledCirc to='/hoje' data-test="today-link">
                        <CircularProgressbar
                            value={percent}
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

                    <StyledLink to='/historico' data-test="history-link" >
                        <p>Histórico</p>
                    </StyledLink>
                </Footer>
            </DivFooter>
        </ContainerPaginaHabitos>
    );
}



const ContainerPaginaHabitos = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    position: relative;

`
const ContainerHabitos = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 22px 17px;
    margin-top: 70px;
    margin-bottom: 140px;
`
const DivHeader = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 70px;
`
const Header = styled.div`
    width: 375px;
    height: 70px;
    margin: 0 auto;
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
const DivFooter = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 70px;
`
const Footer = styled.div`
    width: 375px;
    height: 70px;
    margin: 0 auto;
    background-color: #FFFFFF;
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px 0 36px; 
    position: relative;
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