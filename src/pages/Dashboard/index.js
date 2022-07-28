import React, { useContext, useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import "./style.css";

import { AccountContext } from "../../context/accountContext";

export const Dashboard = () => {
  const context = useContext(AccountContext);

  let balance = 0;
  let name = "";

  context.accounts.forEach((account, index) => {
    if (context.userLogged === account.cpf) {
      balance = account.saldo;
      name = context.user[index].nome;
    }
  });

  const [dataAccountUserLogged, setDataAccountUserLogged] = useState([
    {
      saldo: balance,
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
      <SideBar cpf={context.userLogged} name={name} />
      <div>
        <Header title="Dashboard" />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <div className="card">
                  <h5>Saldo</h5>
                  <h1>R$ {dataAccountUserLogged[0].saldo}</h1>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <h5>Fatura</h5>
                  <h1>R$ {dataAccountUserLogged[0].fatura}</h1>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="card-md">
                <h5>Dependentes</h5>
                {dataAccountUserLogged[0].dependentes.map((dependente, key) => {
                  return (
                    <div className="row justify-content-start" key={key}>
                      <div className="col-6" style={{ marginBottom: "8px" }}>
                        {dependente.nome}
                      </div>
                      <div
                        className="col-2"
                        style={{ color: "#70E000", fontSize: "20px" }}
                      >
                        R$ {dependente.saldo}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
