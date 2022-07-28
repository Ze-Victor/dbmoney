import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { changeField, required, isEquals } from "../../utils/validations";
import { Input } from "../../components/Input";
import { ButtonLarge } from "../../components/ButtonLarge";
import "./style.css";
import { AccountContext } from "../../context/accountContext";

export const Register = () => {
  const navigation = useNavigate();

  const firstCol = [
    ["nome", "Nome*", "text"],
    ["cpf", "CPF*", "text"],
    ["telefone", "Telefone*", "text"],
    ["email", "Email*", "email"],
  ];
  const secondCol = [
    ["dataNascimento", "Data de nascimento*", "text"],
    ["endereco", "Endereço*", "text"],
    ["password", "Senha*", "password"],
    ["confir_senha", "Confirmar senha", "password"],
  ];

  const context = useContext(AccountContext);
  
  const [registerForm, setRegisterForm] = useState([
    {
      nome: '',
      cpf: '',
      telefone: '',
      email: '',
      dataNascimento: '',
      endereco: '',
      password: '',
      confir_senha: ''
    }
  ]);

  const [ errors, setErrors ] = useState({});
  function setError(name, error) {
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }))
  }

  function check(value, validateFunc, name) {
    const error = validateFunc(value)
    setError(name, error)
    return error === null
  }

  function checkPassword(value1, value2, validateFunc, name) {
    const error = validateFunc(value1, value2)
    setError(name, error)
    return error === null
  }

  function submit(e) {
    e.preventDefault()
    const formOk = 
        Object.keys(registerForm[0])
        .map(key => check(registerForm[key], required, key))
        .every(f => f);

    const passwordOk = checkPassword(registerForm['password'], registerForm['confir_senha'], isEquals, 'confir_senha');

    if (formOk) {
      if(passwordOk) {
        registerUser(e, registerForm);
        alert('CADASTRO REALIZADO COM SUCESSO');
        navigation("/");
      }
    }
  }

  const registerUser = (e, registerUser) => {
    e.preventDefault();
    const newUser = {
      nome: registerUser.nome,
      cpf: registerUser.cpf,
      telefone: registerUser.telefone,
      email: registerUser.email,
      dataNascimento: registerUser.dataNascimento,
      endereco: registerUser.endereco,
      password: registerUser.password,
    };
    context.addUser(newUser);
  };

  return (
    <div className="containerPageRegister">
      <div className="container-sm">
        <div className="row justify-content-around p-4">
          {[firstCol, secondCol].map((array, key) => {
            return (
              <div className="col col-lg-4" key={key}>
                {array.map((item, key) => {
                  return (
                    <div className="row p-3" key={item[0]}>
                      <Input
                        key={key}
                        name={item[0]}
                        type={item[2]}
                        placeholder={item[1]}
                        onChange={(e) => {
                          changeField(e, setRegisterForm, registerForm);
                        }}
                      />
                      <div className="error">{ errors[item[0]] }</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="row justify-content-around p-4">
          <div className="col-md-auto">
            <div className="checkboxRegister">
              <input type="checkbox" />
              <label>Li e concordo com os termos de uso.</label>
            </div>
            <ButtonLarge
              textButton="Cadastrar"
              onClick={(e) => submit(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
