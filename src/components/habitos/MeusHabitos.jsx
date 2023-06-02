import { useState } from "react";
import styled from "styled-components";
import CriarHabito from "./CriarHabito";
import Habito from "./Habito";



export default function MeusHabitos(){
    let teste = [];

    const [adicionar, setAdicionar] = useState(true);

    return (
        <>
            <ContainerAdicionar>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </ContainerAdicionar>

            {(teste.length === 0) && <CriarHabito /> }

            {(teste.length === 0) && <TxtNone>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TxtNone>}
            
            {(teste.length !== 0) && <Habito /> }
            
        </>
    );
}

const ContainerAdicionar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    width: 340px;
    margin-bottom: 20px;

    h1{
    width: 148px;
    height: 29px;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    }

    button{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 27px;
        color: #FFFFFF;
    }
`

const ContainerTarefas = styled.div`
    background-color: #e5e5e5

`
const TxtNone = styled.div`
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`