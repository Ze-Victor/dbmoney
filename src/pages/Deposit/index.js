import React, { useContext, useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { changeField } from "../../utils/validations";
import { ButtonSmall } from "../../components/ButtonSmall";
import "./style.css";

import { AccountContext } from "../../context/accountContext";

export const Deposit = () => {
  const context = useContext(AccountContext);

  const registerDeposit = (e, value) => {
    e.preventDefault();
    context.deposit(context.userLogged, value);
  };

  const [deposito, setDeposito] = useState([]);

  return (
    <div className="containerDeposit">
      <SideBar />
      <div>
        <Header title="Depósito" />
        <div className="leftComponents">
          <div>
            <h1 className="titleValue">Valor:</h1>
            <Input
              type="number"
              placeholder="Valor que deseja depositar"
              name="value"
              onChange={(e) => {
                changeField(e, setDeposito, deposito);
              }}
            />
          </div>
          <div className="containerButtons">
            <ButtonSmall textButton="Cancelar" buttonColorPadrao={false} />
            <ButtonSmall
              textButton="Depositar"
              buttonColorPadrao={true}
              onClick={(e) => registerDeposit(e, deposito.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
