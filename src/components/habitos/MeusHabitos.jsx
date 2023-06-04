import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import CriarHabito from "./CriarHabito";
import Habito from "./Habito";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";


export default function MeusHabitos(){

    const { token } = useContext(TokenContext);
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    const[listaDeHabitos, setListaDeHabitos] = useState([]);

    const [adicionar, setAdicionar] = useState(false);
    function queroAdd(){
        (adicionar) ? setAdicionar(false) : setAdicionar(true);
    }
    
    useEffect(() => {
        axios.get(URL, config)
        .then( (resp) => {
            setListaDeHabitos(resp.data);
            console.log(resp.data);
        })
        .catch((erro) => console.log(erro.response.data));

    }, [adicionar]);

    return (
        <>
            <ContainerAdicionar>
                <h1>Meus hábitos</h1>
                <button onClick={queroAdd} >+</button>
            </ContainerAdicionar>

            {(adicionar) && <CriarHabito queroAdd={queroAdd} /> }

            {(listaDeHabitos.length === 0) && <TxtNone>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TxtNone>}
            
            {(listaDeHabitos.length !== 0) && listaDeHabitos.map((habito) => <Habito key={habito.id} nome={habito.name} days={habito.days} />)}
            
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