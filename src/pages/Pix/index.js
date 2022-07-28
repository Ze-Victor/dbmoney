import React, { useContext, useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { changeField } from "../../utils/validations";
import { ButtonSmall } from "../../components/ButtonSmall";
import "./style.css";

import { AccountContext } from "../../context/accountContext";

export const Pix = () => {
  const context = useContext(AccountContext);

  const sendPix = (e, formPixRecived) => {
    console.log(formPixRecived);
    console.log(context.userLogged);
  };

  const [formPix, setFormPix] = useState([]);

  return (
    <div className="containerDeposit">
      <SideBar />
      <div>
        <Header title="Pix" />
        <div className="leftComponents">
          <div className="containerInput">
            <h1 className="titleValue">Chave Pix:</h1>
            <Input
              type="number"
              placeholder="Chave"
              name="chave"
              onChange={(e) => {
                changeField(e, setFormPix, formPix);
              }}
            />
          </div>
          <div className="containerInput">
            <h1 className="titleValue">Valor:</h1>
            <Input
              type="number"
              placeholder="Valor que deseja depositar"
              name="value"
              onChange={(e) => {
                changeField(e, setFormPix, formPix);
              }}
            />
          </div>

          <div className="containerButtons">
            <ButtonSmall textButton="Cancelar" buttonColorPadrao={false} />
            <ButtonSmall
              textButton="Confirmar"
              buttonColorPadrao={true}
              onClick={(e) => sendPix(e, formPix)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
