import React from "react";
import { Input } from "../../components/Input";
import { ButtonLarge } from "../../components/ButtonLarge";
import "./style.css";

export const Login = () => {
  return (
    <div className="containerPageLogin">
      <div className="boxLogin">
        <h1>Bem-vindo!</h1>

        <Input type="text" placeholder="CPF" />
        <Input type="password" placeholder="Senha" />
        <a href="/">Esqueceu as credenciais? </a>

        <div className="checkboxCredentials">
          <input type="checkbox" />
          <label>Salvar credenciais</label>
        </div>

        <ButtonLarge textButton="Acessar" />

        <div className="registerLink">
          Ainda não possui conta? <a href="register">Registre-se</a>
        </div>
      </div>
    </div>
  );
};
