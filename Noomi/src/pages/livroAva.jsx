import "./App.css";
import "./livro.css";

function Livro() {
  return (
    <div className="livro-page">

      <div className="livro-container">

        <div className="top-bar">

          <span className="back">
            ←
          </span>

          <span className="menu">
            ☰
          </span>

        </div>


        <div className="livro-content">


          <div className="book-image"></div>


          <div className="book-details">

            <button className="status-btn">
              Lido ▼
            </button>

            <h1>
              A biblioteca
              <br />
              da meia-noite
            </h1>

            <h3>Matt Haig</h3>

            <div className="rating">

              <span className="number">
                4.6
              </span>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <span className="reviews">
                (2,1k avaliações)
              </span>

            </div>


            <button className="avaliar-btn">
              Avaliar
            </button>

            <button className="estante-btn">
              Adicionar à estante ▼
            </button>

          </div>

        </div>

        <div className="tabs-livro">

          <button className="active-tab">
            Sobre
          </button>

          <button>
            Resenhas(314)
          </button>

          <button>
            Citações
          </button>

        </div>


        <div className="descricao">

          <p>
            A Biblioteca da Meia-Noite conta a história
            de Nora Seed, uma mulher arrependida com sua
            vida que vai para uma biblioteca mágica entre
            a vida e a morte. Lá, ela pode viver diferentes
            versões de sua vida, baseadas em escolhas que
            poderia ter feito.
          </p>

        </div>

        <div className="generos">

          <span>Ficção</span>
          <span>Drama</span>
          <span>Reflexão</span>
          <span>Contemporâneo</span>

        </div>


        <div className="infos">

          <div>
            <h4>Páginas</h4>
            <p>304</p>
          </div>

          <div>
            <h4>Publicado em</h4>
            <p>2020</p>
          </div>

          <div>
            <h4>Editora</h4>
            <p>Santos Augusto</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Livro;