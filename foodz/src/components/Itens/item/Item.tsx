
import styles from "./Item.module.scss";
import classNames from 'classnames'

interface Props {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: {
    id: number;
    label: string;
  };
}

export default function Item(props: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={props.photo}/>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{props.title}</h2>
          <p> {props.description} </p>
        </div>
        <div className={styles.item__tags}>
          <div className={classNames({
            [styles.item__tipo]: true,
            [styles[`item__tipo__${props.category.label.toLowerCase()}`]]: true
          })}>{props.category.label}</div>
          <div className={styles.item__porcao}>{props.size}</div>
          <div className={styles.item__qtdpessoas}>{props.serving}</div>
          <div className={styles.item__valor}>R$ { props.price },00</div>
        </div>
      </div>
    </div>
  );
}
