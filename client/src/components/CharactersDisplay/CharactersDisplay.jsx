import React from 'react';
import { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { getCharacters } from '../../actions/characterActions';
import Card from '../CharacterCard/CharacterCard';
import Paginado from '../Paginado/Paginado';
import style from '../CharactersDisplay/CharactersDisplay.module.css'


function CharacterDisplay({characters, getCharacters}) {

    const [loading, setLoading] = useState(false)
    
    function getCharactersFunction(){
            getCharacters();
            setLoading(true)

    }
    useEffect(() => {
        getCharactersFunction()
    })
    const allCharacters = useSelector((state) => state.characters);

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ cardsPerPage ] = useState(20);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = characters.slice(indexOfFirstCard, indexOfLastCard)
    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    return(<div>
            <h2 className={style.title}>Rick and Morty Characters Roll</h2> 
            { loading ? <div>    
                <Paginado
                cardsPerPage={cardsPerPage}
                allCharacters={allCharacters.length}
                paginado={paginado}
                />
                    <ul className={style.ul}>
                        {
                            currentCards?.map(e => {
                                return(
                                    <li>
                                        <Card name={e.name} image={e.image}  />                            
                                    </li>
                                )
                            })
                        }
                    </ul>
                <Paginado
                cardsPerPage={cardsPerPage}
                allCharacters={allCharacters.length}
                paginado={paginado}
                />
                
            </div> : <h1 className={style.loading}>Loading...</h1>}
        </div>
    )}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: character => {
            dispatch(getCharacters(character))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDisplay)