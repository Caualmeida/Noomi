import './Header.css'

function Header() {
  return (
    <header className="header">

      <h1>Início</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Buscar livros ou usuários..."
        />
        <span className="lupa">🔍</span>
      </div>
      <div className="perfil"></div>
    </header>
  )
}

export default Header