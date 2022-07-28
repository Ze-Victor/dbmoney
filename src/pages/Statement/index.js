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
            </div>
        </div>
    );
};
