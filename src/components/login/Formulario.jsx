import FormLogin from "../styles/FormLogin";

export default function FormularioLogin(){
    const disabled = false;

    return (
        <FormLogin>
            <input
                id="email"
                placeholder="email"
                required
                disabled={disabled}

            />
            <input
                id="senha"
                placeholder="senha"
                required
                disabled={disabled}
                
            />
            <button type="submit" disabled={disabled}>Entrar</button>
        </FormLogin>
    );
}


