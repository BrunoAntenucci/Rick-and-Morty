import React from 'react';
import { Link } from 'react-router-dom'
import style from '../CharacterCard/CharacterCard.module.css'


export default function Card({name, image}){
    return(
        <div className={style.card}>
            <div className={style.id}>
                <div >
                    <img src={image} className={style.img}/>
                </div>
                
                <h3 className={style.name}>{name}</h3>
            </div>    
        </div>
    )

}