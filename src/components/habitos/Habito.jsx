import styled from "styled-components"; 
import { BsTrash } from 'react-icons/bs'
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];


export default function Habito({id, nome, days, config, atualizar, setAtualizar}){

    const [excluir, setExcluir] = useState(false);
    const [disabled, setDisabled] = useState(false);

    function queroExcluir(){
        (excluir) ? setExcluir(false) : setExcluir(true);
    }

    function excluirHabito(){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        setDisabled(true);
        axios.delete(URL, config)
        .then((resp) => {
            queroExcluir();
            setDisabled(false);
            (atualizar) ? setAtualizar(false) : setAtualizar(true);
        })
        .catch((erro) => {
            alert(erro.response.data.messege);
            queroExcluir();
        })
        
    }

    function Excluir(){

        return (
            <DivExcluir>
                <p>Deseja excluir?</p>
                <div>
                    <button onClick={queroExcluir} >Cancelar</button>
                    <button onClick={excluirHabito} >
                    {(disabled) ?
                                <ThreeDots
                                    height="35"
                                    width="35"
                                    radius="9"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                                : "Excluir"}
                    </button>
                </div>
            </DivExcluir>
        );
    }

    return(
        <HabitoDiv data-test="habit-container" >
            <h1 data-test="habit-name">{nome}</h1>
            <BotoesSemana>
                    {SEMANA.map((letra, i) => <StyledButton data-test="habit-day" key={i} id={i} days={days} disabled={true} >{letra}</StyledButton>)}
            </BotoesSemana>
            <BsTrash data-test="habit-delete-btn" className="icon" onClick={queroExcluir}/>
            {excluir && <Excluir  />}
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
const DivExcluir = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 340px;
    height: 100%;
    background: rgba(255, 255, 255, 0.85);;
    border-radius: 5px;

    font-size: 16px;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p{
        color: #52B6FF;
        margin-bottom: 5px;
    }
    div{
        width: 190px;
        display: flex;
        justify-content: space-between;
    }
    button{
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #52B6FF;
        border: none;
        color: white;
    }
`