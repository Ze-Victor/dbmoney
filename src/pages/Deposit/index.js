import React from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import "./style.css";

export const Deposit = () => {
  return (
    <div className="containerDeposit">
      <SideBar />
      <div>
        <Header title="Depósito" />
        <div className="leftComponents">
          <h1>Valor:</h1>
          <Input type="text" placeholder="Valor que deseja depositar" />
          <div className="containerButtons">
            <Button textButton="Depositar" />
            <Button textButton="Cancelar" />
          </div>
        </div>
      </div>
    </div>
  );
};
