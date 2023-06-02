import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormLogin from "../styles/FormLogin";

export default function Cadastro(){

    const navigate = useNavigate();

    const [infoCadastro, setInfoCadastro] = useState({
        email: '',
        name: '',
        image: '',
        password: '',
    });

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

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

        axios.post(URL, infoCadastro)
        .then( resp => {
            console.log(resp.data);
            navigate('/');
        })
        .catch( erro => {
            alert(erro.response.data.messege);
        })

        
    }

    const disabled = false;

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
            <SubmitButton type="submit" disabled={disabled}>Cadastrar</SubmitButton>
        </FormLogin>
    );
}

const SubmitButton = styled.button`
    font-size: 21px;
    line-height: 26px;
    color: #FFFFFF;
`
