import { createContext, useState } from "react";

export const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      nome: "André Maurício",
      cpf: "485164613-48",
      telefone: "(84) 98684-5874",
      email: "andremauricio@gmail.com",
      dataNascimento: "14/08/1998",
      endereco: "Rua Elviro de Freitas, 10, Centro, Natal",
      password: "12345678",
    },
  ]);
  const accounts = [
    {
      cpf: "485164613-48",
      numeroConta: "123456789-0",
      saldo: 0,
    },
  ];

  const [userLogged, setUserLogged] = useState({ cpf: "" });

  const addUser = (newUser) => {
    const userRecived = {
      nome: newUser.nome,
      cpf: newUser.cpf,
      telefone: newUser.telefone,
      email: newUser.email,
      dataNascimento: newUser.dataNascimento,
      endereco: newUser.endereco,
      password: newUser.password,
    };
    setUser([...user, userRecived]);
    accounts.push({
      cpf: newUser.cpf,
      numeroConta: "123456789-0",
      saldo: 0,
    });
  };

  const loginUser = (cpf) => {
    setUserLogged(cpf);
  };

  const deposit = (cpf, value) => {
    accounts.forEach((account, index) => {
      if (account.cpf === cpf) {
        accounts[index].saldo += parseFloat(value);
      }
    });
  };

  const pix = (cpfSender, cpfRecipient, value) => {
    accounts.forEach((account, index) => {
      if (account.cpf === cpfSender) accounts[index].saldo -= value;
      else if (account.cpf === cpfRecipient) accounts[index].saldo += value;
    });
  };

  return (
    <AccountContext.Provider
      value={{ user, accounts, addUser, deposit, pix, userLogged, loginUser }}
    >
      {children}
    </AccountContext.Provider>
  );
};
