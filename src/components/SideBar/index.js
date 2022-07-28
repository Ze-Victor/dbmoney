import React from "react";
import "./style.css";
import DashboardIcon from "../../icons/dashboard.png";
import DepositoIcon from "../../icons/deposito.png";
import ExtratoIcon from "../../icons/extrato.png";
import PixIcon from "../../icons/pix.png";
import RecargaIcon from "../../icons/recarga.png";
import TransferenciaIcon from "../../icons/transferencia.png";

import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigation = useNavigate();

  return (
    <div class="sidebar">
      <div class="avatar">
        <div class="user-pic"></div>
        <div class="user-infos">
          <p class="user-name"></p>
          <p class="user-account">123456789-0</p>
        </div>
      </div>
      <button class="active" onClick={() => navigation("/dashboard")}>
        <img src={DashboardIcon} alt="Dashboard icon" class="icon-sidebar" />
        Dashboard
      </button>
      <button onClick={() => navigation("/deposit")}>
        <img src={DepositoIcon} alt="Deposito icon" class="icon-sidebar" />
        Depósito
      </button>
      <button onClick={() => navigation("/statement")}>
        <img src={ExtratoIcon} alt="Extrato icon" class="icon-sidebar" />
        Extrato
      </button>
      <button onClick={() => navigation("/pix")}>
        <img src={PixIcon} alt="Pix icon" class="icon-sidebar" />
        Pix
      </button>
      <button onClick={() => navigation("/dashboard")}>
        <img src={RecargaIcon} alt="Recarga icon" class="icon-sidebar" />
        Recarga
      </button>
      <button onClick={() => navigation("/dashboard")}>
        <img
          src={TransferenciaIcon}
          alt="Transferencia icon"
          class="icon-sidebar"
        />
        Transferência
      </button>

      <h3 class="section-sidebar">GERENCIAMENTO</h3>
      <button onClick={() => navigation("/accountconfigurations")}>
        Configurações da Conta
      </button>
      <button onClick={() => navigation("/dashboard")}>
        Atendimento ao Cliente
      </button>
      <h3 class="section-sidebar">
        <button onClick={() => navigation("/")}>SAIR</button>
      </h3>
    </div>
  );
};
