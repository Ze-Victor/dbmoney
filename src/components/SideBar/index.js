import React from "react";
import "./style.css";
import DashboardIcon from "../../icons/dashboard.png";
import DepositoIcon from "../../icons/deposito.png";
import ExtratoIcon from "../../icons/extrato.png";
import PixIcon from "../../icons/pix.png";
import RecargaIcon from "../../icons/recarga.png";
import TransferenciaIcon from "../../icons/transferencia.png";

export const SideBar = () => {
  return (
    <div class="sidebar">
      <div class="avatar">
        <div class="user-pic"></div>
        <div class="user-infos">
          <p class="user-name"></p>
          <p class="user-account">123456789-0</p>
        </div>
      </div>
      <a class="active" href="dashboard">
        <img src={DashboardIcon} alt="Dashboard icon" class="icon-sidebar" />
        Dashboard
      </a>
      <a href="deposit">
        <img src={DepositoIcon} alt="Deposito icon" class="icon-sidebar" />
        Depósito
      </a>
      <a href="statement">
        <img src={ExtratoIcon} alt="Extrato icon" class="icon-sidebar" />
        Extrato
      </a>
      <a href="dashboard">
        <img src={PixIcon} alt="Pix icon" class="icon-sidebar" />
        Pix
      </a>
      <a href="dashboard">
        <img src={RecargaIcon} alt="Recarga icon" class="icon-sidebar" />
        Recarga
      </a>
      <a href="dashboard">
        <img
          src={TransferenciaIcon}
          alt="Transferencia icon"
          class="icon-sidebar"
        />
        Transferência
      </a>

      <h3 class="section-sidebar">GERENCIAMENTO</h3>
      <a href="accountconfigurations">Configurações da Conta</a>
      <a href="dashboard">Atendimento ao Cliente</a>
      <h3 class="section-sidebar">
        <a href="/">SAIR</a>
      </h3>
    </div>
  );
};
