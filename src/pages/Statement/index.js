import React from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import "./style.css";

export const Statement = () => {
    return (
        <div className="containerStatement">
            <SideBar />
            <div>
                <Header title="Extrato" />
                <div className="content">
                    <div className="title">
                        Transações
                        <div className="selectByDate">
                            Período do Extrato
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
