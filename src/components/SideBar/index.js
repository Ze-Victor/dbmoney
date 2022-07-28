import React from "react";
import "./style.css";
import DashboardIcon from "../../icons/dashboard.png";
import DepositoIcon from "../../icons/deposito.png";
import ExtratoIcon from "../../icons/extrato.png";
import PixIcon from "../../icons/pix.png";
import RecargaIcon from "../../icons/recarga.png";
import TransferenciaIcon from "../../icons/transferencia.png";

import { useNavigate } from "react-router-dom";

export const SideBar = (props) => {
  const navigation = useNavigate();

  return (
    <div className="sidebar">
      <div className="avatar">
        <div className="user-pic">{props.name[0]}</div>
        <div className="user-infos">
          <p className="user-name">{props.name}</p>
          <p className="user-account">{props.cpf}</p>
        </div>
      </div>
      <button className="active" onClick={() => navigation("/dashboard")}>
        <img
          src={DashboardIcon}
          alt="Dashboard icon"
          className="icon-sidebar"
        />
        Dashboard
      </button>
      <button onClick={() => navigation("/deposit")}>
        <img src={DepositoIcon} alt="Deposito icon" className="icon-sidebar" />
        Depósito
      </button>
      <button onClick={() => navigation("/statement")}>
        <img src={ExtratoIcon} alt="Extrato icon" className="icon-sidebar" />
        Extrato
      </button>
      <button onClick={() => navigation("/pix")}>
        <img src={PixIcon} alt="Pix icon" className="icon-sidebar" />
        Pix
      </button>
      <button onClick={() => navigation("/dashboard")}>
        <img src={RecargaIcon} alt="Recarga icon" className="icon-sidebar" />
        Recarga
      </button>
      <button onClick={() => navigation("/dashboard")}>
        <img
          src={TransferenciaIcon}
          alt="Transferencia icon"
          className="icon-sidebar"
        />
        Transferência
      </button>

      <h3 className="section-sidebar">GERENCIAMENTO</h3>
      <button onClick={() => navigation("/accountconfigurations")}>
        Configurações da Conta
      </button>
      <button onClick={() => navigation("/dashboard")}>
        Atendimento ao Cliente
      </button>
      <h3 className="section-sidebar">
        <button onClick={() => navigation("/")}>SAIR</button>
      </h3>
    </div>
  );
};
