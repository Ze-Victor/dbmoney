import React, { useState } from "react";
import { changeField } from "../../utils/validations";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import "./style.css";

export const Register = () => {
    const firstCol = [["nome", "Nome*"], ["cpf", "CPF*"], ["telefone", "Telefone*"], ["email", "Email"]];
    const secondCol = [["data_nasc", "Data de nascimento*"], ["endereco", "Endereço*"], ["senha", "Senha*"], ["confir_senha", "Confirmar senha*"]];

    const [registerForm, setRegisterForm] = useState([]);

    return (
        <div className="containerPageRegister">
            <div className="container-sm">
                <div className="row justify-content-around p-4">
                    {[firstCol, secondCol].map((array, key) => {
                        return (
                            <div className="col col-lg-4" key={key}>
                                {array.map((item) => {
                                    return (
                                        <div className="row p-3" key={item[0]}>                                
                                            <Input 
                                                key={item[0]}
                                                name={item[0]} 
                                                type="text" 
                                                placeholder={item[1]}
                                                onChange={(e) => {changeField(e, setRegisterForm, registerForm)}}/>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>                
                <div className="row justify-content-around p-4">
                    <div className="col-md-auto">
                        <div className="checkboxRegister">
                            <input type="checkbox" />
                            <label>Li e concordo com os termos de uso.</label>
                        </div>
                        <Button 
                            textButton="Cadastrar"
                            onClick={(e) => { alert(registerForm["nome"])}} />
                    </div>    
                </div> 
            </div>           
        </div>
    );
};