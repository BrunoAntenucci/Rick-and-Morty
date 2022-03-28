import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../actions';
import { useEffect } from 'react';



export default function Detail(props){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch, props.match.params.id]);

    const selectedCharacter = useSelector((state) => state.detail)

    return(
        
        <div>
            {
                selectedCharacter.length > 0? 
                    <div>                
                        <div>
                            <img src={selectedCharacter[0].image} alt="Image not found" className={styles.img}/>
                            <div className={styles.textbox}>
                                <div>
                                    <h1 >{selectedCharacter[0].name}</h1>
                                    <h4 >Description: {selectedCharacter[0].description ? selectedCharacter[0].description : "No description"}</h4>
                                    <h4 >Release date: {selectedCharacter[0].released ? selectedCharacter[0].released : "No data"}</h4>
                                    <h4 >Rating: {selectedCharacter[0].rating ? selectedCharacter[0].rating : "No data"}</h4>
                                </div>
                                <div className={styles.lists}>
                                    <div>
                                        <h4 id={styles.titles} className={styles.text}>Genres</h4>
                                        <ul className={styles.ul}>{selectedVideogame[0].createdInDb === true ? selectedVideogame[0].genres.map((e) => <li className={styles.li}>{e.name}</li>) : selectedVideogame[0].genres.map((e) => <li className={styles.li}>{e}</li>) }</ul>
                                    </div>
                                    <div>
                                        <h4 id={styles.titles} className={styles.text}>Platforms</h4>
                                        <ul id={styles.plat} className={styles.ul}>{selectedVideogame[0].plataform ? selectedVideogame[0].plataform.map((e) => <li className={styles.li}>{e}</li>) : "No data"}</ul>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>    
                : <h1>Not found</h1>

            }
                <Link className={styles.button} to='/home'>
                    <button className={styles.btntext}>Back</button>
                </Link>    
        </div>
    )
} 