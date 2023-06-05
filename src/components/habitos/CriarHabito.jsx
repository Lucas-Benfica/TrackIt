import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";


const SEMANA = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function CriarHabito({ queroAdd }) {

    const { token } = useContext(TokenContext);
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    
    const [newName, setNewName] = useState('');
    const [diasTarefa, setDiasTarefa] = useState([]);

    const [disabled, setDisabled] = useState(false);

    function addDia(i) {
        if (diasTarefa.includes(i)) {
            const retirarDia = diasTarefa.filter((dia) => dia !== i);
            setDiasTarefa(retirarDia);
        } else {
            setDiasTarefa([...diasTarefa, i]);
        }
    }

    function addTarefa(ev) {
        ev.preventDefault();
        console.log("entrou aqui");
        const tarefa = { name: newName, days: diasTarefa };
        setDisabled(true);

        axios.post(URL, tarefa, config)
            .then((resp) => { setDisabled(false); queroAdd() })
            .catch((erro) => { alert(erro.response.data.messege); setDisabled(false) })
    }


    return (
        <NewHabito>
            <form onSubmit={(ev) => addTarefa(ev)}>
                <input type="text" required placeholder="Nome do hábito" name="newHabito"
                    value={newName} onChange={(e) => setNewName(e.target.value)} disabled={disabled}
                />
                <BotoesSemana>
                    {SEMANA.map((letra, i) => <StyledButton id={i} key={i} type="button" onClick={() => addDia(i)} diasTarefa={diasTarefa} disabled={disabled}>{letra}</StyledButton>)}
                </BotoesSemana>
                <BotoesFinalizar>
                    <p onClick={queroAdd} disabled={disabled}>Cancelar</p>
                    <button type="submit" disabled={disabled}>
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
                            : "Salvar"}
                    </button>
                </BotoesFinalizar>

            </form>
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

    form{
        display: flex;
        flex-direction: column;

        input{
            width: 303px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-size: 20px;
            line-height: 25px;
            color: #666666;    
        }
    }
`
const BotoesSemana = styled.div`

    width: 340px;
    margin-top: 8px;
    margin-bottom: 29px;
    
`
const StyledButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${(p) => (p.diasTarefa.includes(p.id)) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${(p) => (!p.diasTarefa.includes(p.id)) ? "#D5D5D5" : "#FFFFFF"} ;
    font-size: 20px;
    margin-right: 4px;
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
        cursor: pointer;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    `
