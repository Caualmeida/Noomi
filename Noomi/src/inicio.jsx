import "./App.css";
import "./inicio.css";

function Inicio() {
  return (
    <div className="home">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div>

          <div className="logo">
            <div className="logo-box"></div>

            <h1>Noomi</h1>
          </div>

          <nav>

            <button className="active-btn">
              Início
            </button>

            <button>
              Sua estante
            </button>

            <button>
              Perfil
            </button>

          </nav>

        </div>

        <div className="sidebar-bottom">

          <button className="publish-btn">
            + Nova publicação
          </button>

          <button className="logout-btn">
            Sair
          </button>

        </div>

      </aside>

      {/* CONTEÚDO */}
      <main className="content">

        {/* HEADER */}
        <header className="header">

          <h1>Início</h1>

          <div className="header-right">

            <input
              type="text"
              placeholder="Buscar livros ou usuários..."
            />

            <div className="profile"></div>

          </div>

        </header>

        {/* TABS */}
        <div className="tabs">

          <button className="active">
            Para você
          </button>

          <button>
            Seguindo
          </button>

        </div>

        {/* LIVROS */}
        <section className="books-section">

          <div className="section-title">

            <h2>Mais avaliados no Noomi 🔥</h2>

            <span>Ver mais</span>

          </div>

          <div className="books-grid">

            <div className="book-card">
              <div className="book-cover"></div>

              <div className="book-info">
                <h4>É assim que acaba</h4>
                <p>Colleen Hoover</p>
              </div>
            </div>

            <div className="book-card">
              <div className="book-cover"></div>

              <div className="book-info">
                <h4>Verity</h4>
                <p>Colleen Hoover</p>
              </div>
            </div>

            <div className="book-card">
              <div className="book-cover"></div>

              <div className="book-info">
                <h4>Coraline</h4>
                <p>Neil Gaiman</p>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Inicio;