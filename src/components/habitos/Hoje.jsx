import styled from "styled-components";
import ContainerHabitos from "../styles/habitos";


export default function Hoje(){
    return (
    <DiaHoje>
        <h1>Segunda, 29/05</h1>
        <p>Nenhum hábito concluído ainda</p>
        <HabitosDeHoje>
            <CardHabito>
                <div>
                    <h2>Aqui vai ficar o hábito</h2>
                    <p>Sequência atual: 3 dias</p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <button>X</button>
            </CardHabito>
        </HabitosDeHoje>
    </DiaHoje>
    )
}

const DiaHoje = styled.div`
    
    h1{
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    p{
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
        margin-bottom: 28px;
    }
`

const HabitosDeHoje = styled.div`
    display: flex;
    flex-direction: column;
`
const CardHabito = styled.div`
    width: 340px;
    height: auto;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 13px 13px 12px 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    div{
        display: flex;
        flex-direction: column;
        h2{
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        width: 208px;
        }
        p{
            width: 146px;
            font-size: 13px;
            line-height: 16px;
            color: #666666;
        }
        margin-right: 35px;
    }
    
    button{
        width: 69px;
        height: 69px;
        background-color: #EBEBEB;
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
`