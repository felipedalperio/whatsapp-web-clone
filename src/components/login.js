import React from "react";
import './login.css';
import Api from "../Api";

export default({onReceive}) =>{

        const handleFacebookLogin = async () =>{
                
                let result = await Api.fbPopup( );
                if(result){
                        onReceive(result.user);
                }else{
                        alert("Error !")
                }
        }

        return(
            <div className="login">
                    <button onClick={handleFacebookLogin} >Logar com o facebook</button>
            </div>
        );
}