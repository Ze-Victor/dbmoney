import React from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import "./style.css";

export const AccountConfigurations = () => {
  return (
    <div className="containerDeposit">
      <SideBar />
      <div>
        <Header title="Configurações da Conta" />
        <div className="leftComponents">
          <h1>Inserir Informações Aqui</h1>
        </div>
      </div>
    </div>
  );
};
