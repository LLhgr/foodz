import React from 'react'
import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>; 
}

export default function Buscador({ busca, setBusca}: Props) {
  return (
    <div className={styles.buscador}>
        <input placeholder='Buscar' value={busca} onChange={e => setBusca(e.target.value)} type="text" />
        <CgSearch size={20} color='#f94747'/>
    </div>
  )
}
