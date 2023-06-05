import styled from "styled-components";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useContext, useEffect, useState } from "react";
import { PercentContext } from "../../context/PercentContext";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";
import { IoIosCheckmark } from "react-icons/io";

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

       
    function Habito({id, texto, feito, currentSequence, highestSequence, check, setCheck}) {
    
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
            <CardHabito feito={feito} >
                <div>
                    <h2>{texto}</h2>
                    <h3>Sequência atual: {currentSequence} dias</h3>
                    <h3 className="record">Seu recorde: {highestSequence} dias</h3>
                </div>
                <button onClick={() => marcarFeito(id, feito)}><IoIosCheckmark className="icon" /></button>
            </CardHabito>
        );
    }

    return (
        <DiaHoje percent={percent}>
            <DiaDeHoje />
            {(percent === 0 ) ? <p>Nenhum hábito concluído ainda</p> : <p>{percent}% dos hábitos concluídos</p>}
            {(listaDeHabitos) && (<HabitosDeHoje>
                {listaDeHabitos.map((habito) => <Habito key={habito.id} id={habito.id} texto={habito.name} feito={habito.done} 
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
        <h1>
            {nomeDiaDaSemana}, {diaAtual}
        </h1>
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
        width: 200px;
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
            width: 160px;
            font-size: 13px;
            line-height: 16px;
            color: #666666;
            /*{ continuar aqui
                font-size: 13px;
                margin: 0;
            }*/
        }
        margin-right: 35px;
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