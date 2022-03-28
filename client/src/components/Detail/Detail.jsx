import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../actions/characterActions';
import { useEffect } from 'react';



export default function Detail(props){
    console.log(props)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    }, [dispatch, props.match.params.id]);

    const selectedCharacter = useSelector((state) => state.detail)

    console.log(selectedCharacter)

    return(
        
        <div>
            <h1 >{selectedCharacter.name}</h1>
            <h1 >{selectedCharacter.status}</h1>
            <h1 >{selectedCharacter.species}</h1>          
            <h1 >{selectedCharacter.gender}</h1>
            <h1 >{selectedCharacter.origin.name}</h1>
            <Link to='/'>
                <button>Back</button>
            </Link>    
        </div>
    )
} 