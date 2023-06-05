import styled from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useContext, useEffect, useState } from "react";
import { PercentContext } from "../../context/PercentContext";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";

dayjs.locale('pt-br');


export default function Hoje() {

    const[listaDeHabitos, setListaDeHabitos] = useState([]);

    const { token } = useContext(TokenContext);
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const {percent, calcPorcentagem} = useContext(PercentContext);
    const [numConcluidos, setNumConcluidos] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

        axios.get(URL, config)
        .then( (resp) => {
            console.log(resp.data);

            let contarConcuidos = 0;
            let contarTotal = resp.data.length;

            resp.data.forEach((habito) => {
                if(habito.done){
                    contarConcuidos++;
                }
            })

            setListaDeHabitos(resp.data); 
            setTotal(contarTotal);
            setNumConcluidos(contarConcuidos);
            calcPorcentagem(contarTotal, contarConcuidos)
        })
        .catch((erro) => console.log(erro));

    }, []);


    return (
        <DiaHoje percent={percent}>
            <DiaDeHoje />
            {(percent === 0) ? <p>Nenhum hábito concluído ainda</p> : <p>{percent}% dos hábitos concluídos</p>}
            <HabitosDeHoje>
                {listaDeHabitos.map((habito) => <Habito key={habito.id} texto={habito.name} feito={habito.done} currentSequence={habito.currentSequence} highestSequence={habito.highestSequence} />)}
            </HabitosDeHoje>


        </DiaHoje>
    )
}

function DiaDeHoje() {
    const diaDaSemana = dayjs().day();
    const diaAtual = dayjs().format('DD/MM');

    const nomeDiaDaSemana = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ][diaDaSemana];

    return (
        <h1>
            {nomeDiaDaSemana}, {diaAtual}
        </h1>
    );
}
function Habito({texto, feito, currentSequence, highestSequence }) {

    return (
        <CardHabito >
            <div>
                <h2>{texto}</h2>
                <h3>Sequência atual: {currentSequence} dias</h3>
                <h3>Seu recorde: {highestSequence} dias</h3>
            </div>
            <button>X</button>
        </CardHabito>
    );
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
        color: ${ (p) => (p.percent === 0) ? "#BABABA" : "#8FC549" };
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
        margin-bottom: 7px;
        }
        h3{
            width: 150px;
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