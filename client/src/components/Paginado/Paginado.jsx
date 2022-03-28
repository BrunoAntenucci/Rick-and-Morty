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
                    <li key={number} className={style.li}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}