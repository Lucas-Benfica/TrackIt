import styled from "styled-components"; 
import { BsTrash } from 'react-icons/bs'

const SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];


export default function Habito(){

    return(
        <HabitoDiv>
            <h1>Vamos ter um texto aqui</h1>
            <BotoesSemana>
                    {SEMANA.map((letra, i) => <button key={i} >{letra}</button>)}
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
    }
`
const BotoesSemana = styled.div`

    width: 340px;
    margin-top: 8px;

    button{
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        color: #D5D5D5;
        font-size: 20px;
        margin-right: 4px;
    }
    
    
`