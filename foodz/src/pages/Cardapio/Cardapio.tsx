import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg"; //Transforma o SVG em um componente
import Buscador from "components/buscador/Buscador";
import { useState } from "react";
import Filtros from "components/filtros/Filtros";
import Ordenador from "components/ordenador/Ordenador";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <Logo height={45} />
        <h1>FOOD'Z</h1>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador/>
        </div>
      </section>
    </main>
  );
}
