import styled from "styled-components"; 
import { BsTrash } from 'react-icons/bs'

const SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];


export default function Habito({nome, days}){

    return(
        <HabitoDiv>
            <h1>{nome}</h1>
            <BotoesSemana>
                    {SEMANA.map((letra, i) => <StyledButton key={i} id={i} days={days} disabled={true} >{letra}</StyledButton>)}
            </BotoesSemana>
            <BsTrash className="icon"/>
        </HabitoDiv>
    );
}

const HabitoDiv = styled.div`
    width: 340px;
    height: auto;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 13px 10px 15px 15px;
    margin-bottom: 10px;
    h1{
        width: 280px;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
    position: relative;
    .icon{
        position: absolute;
        right: 10px;
        top: 11px;
        cursor: pointer;
    }
`
const BotoesSemana = styled.div`
    width: 340px;
    margin-top: 8px; 
`
const StyledButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${(p) => (p.days.includes(p.id)) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    color:  ${(p) => (!p.days.includes(p.id)) ? "#D5D5D5" : "#FFFFFF"} ;
    font-size: 20px;
    margin-right: 4px;
    cursor: default;
`