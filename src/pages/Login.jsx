import React, { useContext, useEffect } from 'react';
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
  // function enableEnterButton() {
  //   const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  //   const passwordMin = 6;
  //   const { password, email } = this.state;
  //   if ((password.length >= passwordMin) && (email.match(mailformat))) {
  //     this.setState({
  //       enterEnabled: false,
  //     });
  //   } else {
  //     this.setState({
  //       enterEnabled: true,
  //     });
  //   }
  // }
  // FUNÇÃO DE VALIDAÇÃO DO BOTÃO DE LOGIN: O MESMO DEVE TER UM DISABLED BASEADO NO ESTADO, E DEVE MUDAR QUANDO CUMPRIR OS REQUISITOS DESSA FUNÇÃO

  useEffect(() => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordMin = 6;
    if ((password.length > passwordMin) && (email.match(mailformat))) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [email, password, setEnable]);

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
            // onClick={ handleClick }
            disabled={ enable }
          >
            Entrar
          </button>
        </label>
      </form>
    </div>
  );
}
