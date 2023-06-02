import { useState } from "react";
import styled from "styled-components";

const SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function CriarHabito(){
    
    const [newTarefa,setNewTarefa] = useState('');

        
    return (
        <NewHabito>
            <FormAdd>
                <input type="text" placeholder="Nome do hábito" name="newHabito" value={newTarefa} onChange={(e) => setNewTarefa(e.target.value)} />
                <BotoesSemana>
                    {SEMANA.map((letra, i) => <button key={i} >{letra}</button>)}
                </BotoesSemana>
                <BotoesFinalizar>
                    <p>Cancelar</p>
                    <button>Salvar</button>
                </BotoesFinalizar>

            </FormAdd>
        </NewHabito>
    );
}

const NewHabito = styled.div`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 28px;
    padding: 18px 18px 15px;
`
const FormAdd = styled.div`
    display: flex;
    flex-direction: column;

    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;    
    }
`

const BotoesSemana = styled.div`

    width: 340px;
    margin-top: 8px;
    margin-bottom: 29px;


    button{
        width: 30px;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        color: #D5D5D5;
        font-size: 20px;
        margin-right: 4px;
    }
    
`

const BotoesFinalizar = styled.div`

    display: flex;
    align-items: center;
    width: 303px;
    height: 35px;
    justify-content: end;

    p{
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        margin-right: 23px;
    }

    button{
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        color: #FFFFFF;
        font-size: 16px;
        text-align: center;
        border: none;
    }
    
    `
