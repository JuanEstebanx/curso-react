import React from "react";
import '../styles/TaskCard.scss';
import { Button } from "./Button";

export function TaskCard ({ready}){

return <div className="card">

    <h1>Mi primer tarea</h1>
    <p
        style={ready ? {background: 'green'} : {background: 'red'}}
    >{ready ? "Tarea Realiza" : "Tarea Super Pendiente  "}</p>

    <Button text="PERRO"/>
    <input onChange={function (){
        console.log('Esta escribiendo el muchacho...')
    }}/>
</div>

}