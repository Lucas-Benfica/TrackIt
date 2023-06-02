import FormLogin from "../styles/FormLogin";

export default function Cadastro(){
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
            <input
                id="nome"
                placeholder="nome"
                required
                disabled={disabled}
                
            />
            <input
                id="foto"
                placeholder="foto"
                required
                disabled={disabled}
                
            />
            <button type="submit" disabled={disabled}>Cadastrar</button>
        </FormLogin>
    );
}


