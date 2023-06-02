import styled from "styled-components";

export default function Historico(){
    return (
    <ContainerHistorico>
        <h1>Historico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        
    </ContainerHistorico>
    )
}

const ContainerHistorico = styled.div`
    h1{
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }
    p{
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        width: 338px;
    }
`