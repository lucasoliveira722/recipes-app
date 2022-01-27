import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../Context/AppContext';

export default function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    enable,
    setEnable,
  } = useContext(AppContext);

  const history = useHistory();

  // FUNÇÃO DE VALIDAÇÃO DO BOTÃO DE LOGIN: O MESMO DEVE TER UM DISABLED BASEADO NO ESTADO, E DEVE MUDAR QUANDO CUMPRIR OS REQUISITOS DESSA FUNÇÃO

  // regex de validação de email tirado de https://www.w3resource.com/javascript/form/email-validation.php
  useEffect(() => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordMin = 6;
    if ((password.length > passwordMin) && (email.match(mailformat))) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [email, password, setEnable]);

  function handleClick() {
    const emailToken = { email };
    localStorage.setItem('mealsToken', '1');
    localStorage.setItem('cocktailsToken', '1');
    localStorage.setItem('user', JSON.stringify(emailToken));
    history.push('/foods');
  }

  // lidar com o input nos hooks tirado de: https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
  return (
    <div>
      <form>
        <label htmlFor="email">
          Insira o email:
          <input
            data-testid="email-input"
            id="email"
            type="text"
            value={ email }
            onChange={ (event) => setEmail(event.target.value) }
          />
        </label>
        <label htmlFor="senha">
          Insira a senha:
          <input
            data-testid="password-input"
            id="senha"
            type="text"
            value={ password }
            onChange={ (event) => setPassword(event.target.value) }
          />
          <button
            data-testid="login-submit-btn"
            type="submit"
            onClick={ handleClick }
            disabled={ enable }
          >
            Entrar
          </button>
        </label>
      </form>
    </div>
  );
  // Comment
}
