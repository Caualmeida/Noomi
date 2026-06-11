import "./App.css";
import "./login.css";
function Login() {
  return (
    <div className="login-page">

      <div className="login-container">

        <h1>Noomi</h1>

        <p>
          Sua troca de livros e boas histórias!
        </p>

        <form className="login-form">

          <input
            type="text"
            placeholder="📧 Email ou usuário:"
          />

          <input
            type="password"
            placeholder="👁 Senha:"
          />

          <span className="forgot">
            Esqueceu sua senha?
          </span>

          <button className="login-btn">
            Entrar
          </button>

          <span className="or">
            ou
          </span>

          <button className="register-btn">
            Criar uma conta
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;