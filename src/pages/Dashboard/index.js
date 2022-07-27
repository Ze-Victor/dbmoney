import React from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import "./style.css";

export const Dashboard = () => {
    return (
        <div className="containerDashboard">
            <SideBar />
            <div>
                <Header title="Dashboard" />
                <div className="container">
                <div class="row">
                    <div class="col-sm">
                    Uma de três colunas
                    </div>
                    <div class="col-sm">
                    Uma de três colunas
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};
