import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { changeField } from "../../utils/validations";
import { ButtonLarge } from "../../components/ButtonLarge";
import "./style.css";

import { AccountContext } from "../../context/accountContext";

export const Login = () => {
  const navigate = useNavigate();

  const context = useContext(AccountContext);

  const userData = context.user;

  const login = () => {
    let loginValid = false;
    userData.map((user) => {
      if (user.cpf === formLogin.cpf && user.password === formLogin.senha) {
        loginValid = true;
      }
      return loginValid;
    });

    if (loginValid === false) alert("CPF E/OU SENHA INCORRETOS!");
    else {
      context.loginUser(formLogin.cpf);
      navigate("/dashboard");
    }
  };

  const [formLogin, setFormLogin] = useState([]);

  return (
    <div className="containerPageLogin">
      <div className="boxLogin">
        <h1>Bem-vindo!</h1>

        <Input
          type="text"
          placeholder="CPF"
          name="cpf"
          onChange={(e) => {
            changeField(e, setFormLogin, formLogin);
          }}
        />
        <Input
          type="password"
          placeholder="Senha"
          name="senha"
          onChange={(e) => {
            changeField(e, setFormLogin, formLogin);
          }}
        />
        <a href="/">Esqueceu as credenciais? </a>

        <div className="checkboxCredentials">
          <input type="checkbox" />
          <label>Salvar credenciais</label>
        </div>

        <ButtonLarge textButton="Acessar" onClick={() => login()} />

        <div className="registerLink">
          Ainda não possui conta? <a href="register">Registre-se</a>
        </div>
      </div>
    </div>
  );
};
