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
  const [accounts, setAccounts] = useState([
    {
      cpf: "485164613-48",
      numeroConta: "123456789-0",
      saldo: 0,
    },
  ]);

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
    const newAccount = {
      cpf: newUser.cpf,
      numeroConta: "123456789-0",
      saldo: 0,
    };
    setUser([...user, userRecived]);
    setAccounts([...accounts, newAccount]);
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
    let isValidPix = false;

    accounts.forEach((account, index) => {
      if (account.cpf === cpfSender) {
        if (account.saldo >= value) {
          accounts[index].saldo -= parseFloat(value);
          alert("PIX ENVIADO COM SUCESSO!");
          isValidPix = true;
        } else {
          alert("SALDO INSUFICIENTE!");
        }
      }
      if (account.cpf === cpfRecipient && isValidPix) {
        accounts[index].saldo += parseFloat(value);
      }
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
