import { useState, type FormEvent } from "react";
import "./App.css";

function App() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [recordarme, setRecordarme] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState<"error" | "exito">("error");

  const iniciarSesion = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (!correo.trim() || !password.trim()) {
      setTipoMensaje("error");
      setMensaje("¡El monstruo necesita todos tus datos!");
      return;
    }

    if (password.length < 6) {
      setTipoMensaje("error");
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setTipoMensaje("exito");
    setMensaje("¡Acceso correcto! Bienvenido al mundo monstruoso.");

    console.log({
      correo,
      password,
      recordarme,
    });
  };

  return (
    <main className="login-page">
      <div className="background-shape shape-one"></div>
      <div className="background-shape shape-two"></div>
      <div className="background-shape shape-three"></div>

      <section className="login-container">
        <div className="monster-panel">
          <div className="monster">
            <div className="monster-horn horn-left"></div>
            <div className="monster-horn horn-right"></div>

            <div className="monster-face">
              <div className="monster-eye">
                <div className="monster-pupil"></div>
              </div>

              <div className="monster-cheek cheek-left"></div>
              <div className="monster-cheek cheek-right"></div>

              <div className="monster-mouth">
                <span className="tooth tooth-one"></span>
                <span className="tooth tooth-two"></span>
                <span className="monster-tongue"></span>
              </div>
            </div>

            <div className="monster-arm arm-left"></div>
            <div className="monster-arm arm-right"></div>
            <div className="monster-foot foot-left"></div>
            <div className="monster-foot foot-right"></div>
          </div>

          <div className="welcome-text">
            <span className="small-title">MONSTER WORLD</span>
            <h2>¡Qué bueno verte!</h2>
            <p>
              Ingresa al sistema y continúa explorando nuestro pequeño mundo
              monstruoso.
            </p>
          </div>
        </div>

        <div className="form-panel">
          <div className="mobile-logo">👾 MONSTER WORLD</div>

          <header className="form-header">
            <span className="form-label">ACCESO AL SISTEMA</span>
            <h1>Iniciar sesión</h1>
            <p>Introduce tus datos para continuar.</p>
          </header>

          <form onSubmit={iniciarSesion} noValidate>
            <div className="form-group">
              <label htmlFor="correo">Correo electrónico</label>

              <div className="input-container">
                <span className="input-icon">✉</span>

                <input
                  id="correo"
                  type="email"
                  placeholder="monstruo@correo.com"
                  value={correo}
                  onChange={(evento) => {
                    setCorreo(evento.target.value);
                    setMensaje("");
                  }}
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Contraseña</label>

                <button className="forgot-button" type="button">
                  ¿La olvidaste?
                </button>
              </div>

              <div className="input-container">
                <span className="input-icon">🔒</span>

                <input
                  id="password"
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Mínimo 6 caracteres"
                  value={password}
                  onChange={(evento) => {
                    setPassword(evento.target.value);
                    setMensaje("");
                  }}
                  autoComplete="current-password"
                />

                <button
                  className="password-button"
                  type="button"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                  aria-label={
                    mostrarPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  {mostrarPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <label className="remember-option">
              <input
                type="checkbox"
                checked={recordarme}
                onChange={(evento) => setRecordarme(evento.target.checked)}
              />

              <span className="custom-checkbox">✓</span>
              Recordarme en este dispositivo
            </label>

            <button className="login-button" type="submit">
              <span>Entrar al mundo monstruoso</span>
              <span className="button-arrow">→</span>
            </button>

            {mensaje && (
              <div className={`message ${tipoMensaje}`} role="alert">
                <span>{tipoMensaje === "error" ? "⚠️" : "🎉"}</span>
                {mensaje}
              </div>
            )}
          </form>

          <div className="divider">
            <span></span>
            <p>O continúa con</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-button">
              <span className="google-letter">G</span>
              Google
            </button>

            <button type="button" className="social-button">
              <span className="github-icon">●</span>
              GitHub
            </button>
          </div>

          <p className="register-text">
            ¿Todavía no tienes una cuenta?
            <button type="button">Regístrate</button>
          </p>
        </div>
      </section>

      <p className="footer-text">
        © 2026 Monster World · Los monstruos también protegen tus datos
      </p>
    </main>
  );
}

export default App;