import React, { Component } from 'react'
import Widget from '../../components/Widget'

import './loginPage.css'


class LoginPage extends Component {

    loggingIntoTwitelum = (event) => {
      
      event.preventDefault();
      
      const login = this.login.value;
      const password = this.password.value;
      const user = {login, senha: password};
      console.log(user);
      console.log(JSON.stringify(user));

      fetch('http://twitelum-api.herokuapp.com/login', {
          method: 'POST',
          body: JSON.stringify(user)
        })
        .then( (response) => {
          if(!response.ok) {
            throw response;
          }
          return response.json(); //Do not forget of 'return'
        })
        .then( (validUser) => {
          localStorage.setItem('TOKEN', validUser.token);
          console.log(validUser.token);
        })
        .catch( (error) => {
          console.error(error);
        })
    }

    render() {
        return (
            <div className="loginPage">
                <div className="container">
                    <Widget>
                        <h1 className="loginPage__title">Twitelum</h1>
                        <form className="loginPage__form" action="/" onSubmit={this.loggingIntoTwitelum}>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="login">Login</label> 
                                <input 
                                  className="loginPage__input" 
                                  type="text" 
                                  id="login" 
                                  ref={ (inputLogin) => this.login = inputLogin }
                                  name="login"/>
                            </div>
                            <div className="loginPage__inputWrap">
                                <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                <input 
                                  className="loginPage__input" 
                                  type="password" 
                                  id="senha" 
                                  ref={ (inputPassword) => this.password = inputPassword }
                                  name="senha"/>
                            </div>
                            {/* <div className="loginPage__errorBox">
                                Mensagem de erro!
                            </div> */}
                            <div className="loginPage__inputWrap">
                                <button className="loginPage__btnLogin" type="submit">
                                    Logar
                                </button>
                            </div>
                        </form>
                    </Widget>
                </div>
            </div>
        )
    }
}


export default LoginPage