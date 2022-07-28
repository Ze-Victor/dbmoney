import React, { useContext, useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import "./style.css";

import { AccountContext } from "../../context/accountContext";

export const Dashboard = () => {
  const context = useContext(AccountContext);

  const [dataAccountUserLogged, setDataAccountUserLogged] = useState([
    {
      saldo: 0,
      dependentes: [
        {
          nome: "Dependente 1",
          saldo: 0,
        },
        {
          nome: "Dependente 2",
          saldo: 0,
        },
      ],
      fatura: 0,
    },
  ]);

  return (
    <div className="containerDashboard">
      <SideBar />
      <div>
        <Header title="Dashboard" />
        <div className="content">
          <div style={{ width: "fit-content" }}>
            <div className="row justify-content-between">
              <div className="col-sm">
                <div className="card">Saldo</div>
                <div>
                  <h1>R$ {dataAccountUserLogged.saldo}</h1>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <div style={{ width: "fit-content" }}>
                    R$ {dataAccountUserLogged.fatura}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card">
                Dependentes
                <div className="row">
                  <div className="col-8">Nome da pessoa</div>
                  <div className="col-4">Saldo</div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="card">
                Últimos 30 dias
                <div className="row">
                  <div className="col-6">Nome da pessoa</div>
                  <div className="col-2">Transação</div>
                  <div className="col-2">Valor</div>
                  <div className="col-2">Data</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
