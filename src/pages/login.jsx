import { Link } from "react-router-dom";
import styled from "styled-components";
import LOGO from "../assets/Logo_PNG.png"
import Cadastro from "../components/login/Cadastro";
import FormularioLogin from "../components/login/Formulario";


export default function LoginPage(props){
    const {page} = props;

    return (
        <div className="page">
            <Login>
                <img src={LOGO} />
                {(page === "login") ? <FormularioLogin /> : <Cadastro /> }
                
                <Link to={`/cadastro`}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </Login>
        </div>
    );
}

const Login = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 180px;
        height: 178px;
        margin-bottom: 32px;
    }
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
        &:hover{
            mouse: pointer;
        }
    }
`