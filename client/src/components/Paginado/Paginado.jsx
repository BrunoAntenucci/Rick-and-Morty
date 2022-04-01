import React from "react";
import style from '../Paginado/Paginado.module.css'

export default function Paginado({cardsPerPage, allCharacters, paginado}){
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(allCharacters/cardsPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return(
        <nav>
            <ul className={style.ul}>
                { pageNumbers && 
                    pageNumbers.map(number => (
                    <li onClick={() => paginado(number)} key={number} className={style.li}>
                        <a>{number}</a>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}