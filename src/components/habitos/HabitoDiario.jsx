import styled from "styled-components";
import { IoIosCheckmark } from "react-icons/io";
import axios from "axios";
import { TokenContext } from "../../context/TokenContext";
import { useContext } from "react";


export default function HabitoDiario({id, texto, feito, currentSequence, highestSequence, check, setCheck}) {
    
    const { token } = useContext(TokenContext);
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }

    function marcarFeito(id, feito){
        if(feito){
            const URL2 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            axios.post(URL2, {}, config)
            .then((resp) => {(check) ? setCheck(false) : setCheck(true)})
            .catch((erro) => console.log(erro.response.data))
        }
        else{
            const URL2 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            axios.post(URL2, {}, config)
            .then((resp) => {(check) ? setCheck(false) : setCheck(true)})
            .catch((erro) => console.log(erro.response.data))
        }
    }

    return (
        <CardHabito feito={feito} nAtual={currentSequence} nRecord={highestSequence} data-test="today-habit-container">
            <div>
                <h2 data-test="today-habit-name" >{texto}</h2>
                <h3 data-test="today-habit-sequence">Sequência atual: <p className="atual">{currentSequence + " dias"}</p></h3>
                <h3 data-test="today-habit-record">Seu recorde: <p className="record">{highestSequence + " dias"}</p></h3>
            </div>
            <button data-test="today-habit-check-btn" onClick={() => marcarFeito(id, feito)}><IoIosCheckmark className="icon" /></button>
        </CardHabito>
    );
}

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
        width: 200px;
        display: flex;
        margin-right: 35px;
        flex-direction: column;
        h2{
            font-size: 20px;
            line-height: 25px;
            color: #666666;
            width: 208px;
            margin-bottom: 7px;
        }
        h3{
            display: flex; 
            width: 160px;
            font-size: 13px;
            line-height: 16px;
            color: #666666;
            > p{
                margin: 0 5px;
            }
        }
        .atual{
            color: ${(p) => (p.feito) ? "#8FC549" : "#666666"};
        }
        .record{
            color: ${(p) => (p.nAtual === p.nRecord && p.nAtual > 0) ? "#8FC549" : "#666666"};
        }
    }
    
    button{
        width: 69px;
        height: 69px;
        background-color: ${(p) => (p.feito) ? "#8FC549" : "#EBEBEB"};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon{
        font-size: 150px;
        color: #FFFFFF;
    }

`