import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../actions/characterActions';
import { useEffect } from 'react';



function Detail(){
    const params = useParams();
    const dispatch = useDispatch();

    function getDetailFunction(){
        getDetail(params.id);
    };

    useEffect(() => {
        dispatch(getDetailFunction())
    });

    const selectedCharacter = useSelector((state) => state.detail)

    console.log(selectedCharacter)

    return(
        
        <div>
            <h1 >{selectedCharacter[0].name}</h1>
            <h1 >{selectedCharacter[0].status}</h1>
            <h1 >{selectedCharacter[0].species}</h1>          
            <h1 >{selectedCharacter[0].gender}</h1>
            <h1 >{selectedCharacter[0].origin.name}</h1>
            <Link to='/'>
                <button>Back</button>
            </Link>    
        </div>
    )
} 

export default Detail;