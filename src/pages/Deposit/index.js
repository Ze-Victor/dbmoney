import React from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonSmall } from "../../components/ButtonSmall";
import "./style.css";

export const Deposit = () => {
  return (
    <div className="containerDeposit">
      <SideBar />
      <div>
        <Header title="Depósito" />
        <div className="leftComponents">
          <h1 className="titleValue">Valor:</h1>
          <Input type="text" placeholder="Valor que deseja depositar" />
          <div className="containerButtons">
            <ButtonSmall textButton="Cancelar" buttonColorPadrao={false} />
            <ButtonSmall textButton="Depositar" buttonColorPadrao={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
