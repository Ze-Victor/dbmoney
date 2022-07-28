import React, { useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import "./style.css";

export const Statement = () => {
    const [dataAccountUserLogged, setDataAccountUserLogged] = useState([
        {
            operacao: "Pix",
            valor: "R$20.00",
            beneficiario: "Dependente 1",
            data: "20/07/2022 20:30"
        },
        {
            operacao: "Depósito",
            valor: "R$200.00",
            beneficiario: "Dependente 2",
            data: "24/07/2022 20:30"
        },
      ]);

    return (
        <div className="containerStatement">
            <SideBar />
            <div>
                <Header title="Extrato" />
                <div className="content">
                    <div className="container">
                        <div className="row" style={{marginTop: "50px"}}>
                            <div className="col">
                                <div className="title">Transações recentes</div> 
                            </div>
                            <div className="col">
                                <label className="selectByDate">
                                    Período do Extrato
                                </label>
                                <select name="date" id="date" style={{borderRadius: "5px", marginLeft: "10px"}}>
                                    <option value="ontem">Ontem</option>
                                    <option value="7dias">Últimos 7 dias</option>
                                    <option value="15dias">Últimos 15 dias</option>
                                    <option value="30dias">Últimos 30 dias</option>
                                </select>
                            </div>
                        </div>
                        <div className="row" style={{marginTop: "50px"}}>
                            <div className="conatiner-sm">                                
                                {
                                    dataAccountUserLogged
                                    .map((transacao, key) => {
                                    return (
                                        <div className="row justify-content-md-center" style={{marginBottom: "15px"}} key={key} >
                                            <div className="col-6" style={{color: "white", fontSize: "18px"}}>
                                                <div className="row"> {transacao.operacao} </div>
                                                <div className="row"> {transacao.beneficiario} </div>
                                                <div className="row"> {transacao.data} </div>
                                            </div>
                                            <div className="col-2" style={{color: "#70E000", fontSize: "18px"}}>
                                                R$ {transacao.valor}
                                            </div>
                                        </div>
                                    );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
