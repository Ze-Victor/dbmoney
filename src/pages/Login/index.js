import React from "react";
import { Input } from "../../components/Input";
import { ButtonLarge } from "../../components/Button";
import "./style.css";

export const Login = () => {
  return (
    <div className="containerPageLogin">
      <div className="boxLogin">
        <h1>Bem-vindo!</h1>

        <Input type="text" placeholder="CPF" />
        <Input type="password" placeholder="Senha" />
        <a href="https://www.google.com/">Esqueceu as credenciais? </a>

        <div className="checkboxCredentials">
          <input type="checkbox" />
          <label>Salvar credenciais</label>
        </div>

        <ButtonLarge textButton="Acessar" />

        <div className="registerLink">
          Ainda não possui conta?{" "}
          <a href="https://www.google.com/">Registre-se</a>
        </div>
      </div>
    </div>
  );
};
