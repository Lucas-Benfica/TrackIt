import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from "react-loader-spinner";

const padrao = {email: '', name: '', image: '', password: ''}

export default function Cadastro(){

    const [infoCadastro, setInfoCadastro] = useState(padrao);

    const [disabled, setDisabled] = useState(false);

    const navigate = useNavigate();

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
            navigate("/");
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
            <input data-test="email-input"
                id="email"
                placeholder="email"
                required
                disabled={disabled}
                value={infoCadastro.email}
                onChange={ ev => atualizarInfos('email', ev.target.value)}
            />
            <input data-test="password-input"
                id="senha"
                type="password"
                placeholder="senha"
                required
                disabled={disabled}
                value={infoCadastro.password}
                onChange={ ev => atualizarInfos('password', ev.target.value)}
            />
            <input data-test="user-name-input" 
                id="nome"
                placeholder="nome"
                required
                disabled={disabled}
                value={infoCadastro.name}
                onChange={ ev => atualizarInfos('name', ev.target.value)}
            />
            <input data-test="user-image-input"
                id="foto"
                placeholder="foto"
                required
                disabled={disabled}
                value={infoCadastro.image}
                onChange={ ev => atualizarInfos('image', ev.target.value)}
            />
            <button data-test="signup-btn" type="submit" disabled={disabled}>
                
                {(disabled) ?
                        <ThreeDots
                            height="40"
                            width="40"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                        : "Cadastrar"}
                
            </button>
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