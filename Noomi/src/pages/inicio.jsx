import './inicio.css'
function Inicio() {
  return (
    <div className="inicio">

      <aside className="sidebar">
        <h2>Noomi</h2>

        <nav>
          <a href="#">🏠 Início</a>
          <a href="#">📚 Sua Estante</a>
          <a href="#">👤 Perfil</a>
        </nav>

        <button>+ Nova publicação</button>
      </aside>

      <main className="conteudo">

        <header className="topo">
          <h1>Início</h1>

          <input
            type="text"
            placeholder="Buscar livros ou usuários..."
          />

          <div className="perfil"></div>
        </header>

      </main>

    </div>
  )
}

export default Inicio