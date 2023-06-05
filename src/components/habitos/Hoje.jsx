import styled from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useContext, useEffect, useState } from "react";
import { PercentContext } from "../../context/PercentContext";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";
import HabitoDiario from "./HabitoDiario";

dayjs.locale('pt-br');

export default function Hoje() {

    const[listaDeHabitos, setListaDeHabitos] = useState(undefined);
    const [check, setCheck] = useState(false);

    const { token } = useContext(TokenContext);
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const {percent, calcPorcentagem} = useContext(PercentContext);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        
        axios.get(URL, config)
        .then( (resp) => {

            let contarConcuidos = 0;
            let contarTotal = (resp.data.length === 0) ? 1 : resp.data.length ;

            resp.data.forEach((habito) => {
                if(habito.done){
                    contarConcuidos++;
                }
            })

            setListaDeHabitos(resp.data); 
            calcPorcentagem(contarTotal, contarConcuidos);

        })
        .catch((erro) => console.log(erro));

    }, [check]);

    return (
        <DiaHoje percent={percent}>
            <DiaDeHoje />
            {(percent === 0 ) ? <p data-test="today-counter" >Nenhum hábito concluído ainda</p> : <p data-test="today-counter" >{percent}% dos hábitos concluídos</p>}
            {(listaDeHabitos) && (<HabitosDeHoje>
                {listaDeHabitos.map((habito) => <HabitoDiario key={habito.id} id={habito.id} texto={habito.name} feito={habito.done} 
                        currentSequence={habito.currentSequence} highestSequence={habito.highestSequence} check={check} setCheck={setCheck} />)}
            </HabitosDeHoje>)}


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
        <h1 data-test="today">
            {nomeDiaDaSemana}, {diaAtual}
        </h1>
    );
}


const DiaHoje = styled.div`
    
    & h1{
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
    > p{
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
