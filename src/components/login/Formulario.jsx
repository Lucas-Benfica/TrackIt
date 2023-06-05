import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export default function FormularioLogin() {

    const padrao = { email: '', password: '' }

    const [userLogin, setUserLogin] = useState(padrao);
    const [disabled, setDisabled] = useState(false);

    const {token, setToken, img, setImg} = useContext(TokenContext);

    const navigate = useNavigate();

    function atualizarInfos(info, newValor) {
        setUserLogin(prevState => {
            return {
                ...prevState,
                [info]: newValor
            };
        });
    };

    function verificarUser(ev) {
        ev.preventDefault();
        setDisabled(true);

        console.log(token, img);

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        
        axios.post(URL, userLogin)
            .then(resp => {
                console.log(resp.data);

                setToken(resp.data.token);
                setImg(resp.data.image);

                localStorage.setItem('token', resp.data.token);
                localStorage.setItem('image', resp.data.image);

                navigate('/hoje');

                setDisabled(false);
                setUserLogin(padrao);
            })
            .catch(erro => {
                alert(erro.response.data.messege);
                setDisabled(false);
                setUserLogin(padrao);
            })
        
    }

    return (
        <FormLogin onSubmit={verificarUser} desabilitado={disabled}>
            <input  data-test="email-input"
                id="email"
                placeholder="email"
                required
                disabled={disabled}
                value={userLogin.email}
                onChange={ev => atualizarInfos('email', ev.target.value)}
            />
            <input data-test="password-input"
                id="senha"
                type="password"
                placeholder="senha"
                required
                disabled={disabled}
                value={userLogin.password}
                onChange={ev => atualizarInfos('password', ev.target.value)}
            />
            <button data-test="login-btn" className='desbotado' type="submit" disabled={disabled}>
                
                {(disabled) ? 
                    <ThreeDots
                        height="50"
                        width="50"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                    :  'Entrar'
                }

            </button>
        </FormLogin>
    );
}

const FormLogin = styled.form`
    gap: 6px;
    display: flex;
    flex-direction: column;

    input{
        opacity: ${(props) => (props.desabilitado) ? '0.5' : '1'};
        background-color: ${(props) => (props.desabilitado) ? '#F2F2F2' : '#FFFFFF'};;
    }

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
        opacity: ${(props) => (props.desabilitado) ? '0.5' : '1'};
    }
`