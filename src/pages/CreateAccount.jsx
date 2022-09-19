import React from "react";
import '../styles/CreateAccount.scss';

const CreateAccount = () => {

    return (
        <div className="CreateAccount">
            <div className="CreateAccount-container">
                <h1 className="title"> My Account</h1>
                <form action="/" className="FORM">
                    <div>
                        <label for="name" className="label">Nombre</label>
                        <input type="text" id="name" placeholder="Teff" className="input input-name" />

                        <label for="email" className="label">Email</label>
                        <input type="text" id="email" placeholder="...@gmail.com" className="input input-email"></input>
                        
                        <label for="password" className="label">Password</label>
                        <input type="text"  id="password" placeholder="**conttrasena**" className="input input-password"/>
                    </div>
                    <input type="submit" value="Crear Usuarsio" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );

}

export default CreateAccount;

/*
<div class="login">
    <div class="form-container">
      <h1 class="title">My account</h1>

      <form action="/" class="form">
        <div>
          <label for="name" class="label">Name</label>
          <input type="text" id="name" placeholder="Teff" class="input input-name">

          <label for="email" class="label">Email</label>
          <input type="text" id="email" placeholder="platzi@example.com" class="input input-email">

          <label for="password" class="label">Password</label>
          <input type="password" id="password" placeholder="*********" class="input input-password">
        </div>

        <input type="submit" value="Create" class="primary-button login-button">
      </form>
    </div>
*/