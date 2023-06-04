import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const padrao = {email: '', name: '', image: '', password: ''}

export default function Cadastro(){

    const [infoCadastro, setInfoCadastro] = useState(padrao);

    const [disabled, setDisabled] = useState(false);

    function atualizarInfos(info, newValor){
        setInfoCadastro( prevState => {
            return{
                ...prevState,
                [info]: newValor
            };
        });
    };

    function cadastrar(ev){
        ev.preventDefault();
        setDisabled(true);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

        axios.post(URL, infoCadastro)
        .then( resp => {
            console.log(resp.data);
            setDisabled(false);
            setInfoCadastro(padrao);
        })
        .catch( erro => {
            console.log(erro.response.data);
            alert(erro.response.data.messege);
            setDisabled(false);
            setInfoCadastro(padrao);
        })
    }

    return (
        <FormLogin onSubmit={cadastrar}>
            <input
                id="email"
                placeholder="email"
                required
                disabled={disabled}
                value={infoCadastro.email}
                onChange={ ev => atualizarInfos('email', ev.target.value)}
            />
            <input
                id="senha"
                type="password"
                placeholder="senha"
                required
                disabled={disabled}
                value={infoCadastro.password}
                onChange={ ev => atualizarInfos('password', ev.target.value)}
            />
            <input
                id="nome"
                placeholder="nome"
                required
                disabled={disabled}
                value={infoCadastro.name}
                onChange={ ev => atualizarInfos('name', ev.target.value)}
            />
            <input
                id="foto"
                placeholder="foto"
                required
                disabled={disabled}
                value={infoCadastro.image}
                onChange={ ev => atualizarInfos('image', ev.target.value)}
            />
            <button type="submit" disabled={disabled}>Cadastrar</button>
        </FormLogin>
    );
}

const FormLogin = styled.form`
gap: 6px;
display: flex;
flex-direction: column;

button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    line-height: 26px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
`