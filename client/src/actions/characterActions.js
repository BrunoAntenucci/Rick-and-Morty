import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_DETAIL = 'GET_DETAIL'

var apiData = []

const getApiInfo = async (url) => {
    if(apiData.length < 400){ 
        const apiUrl = await axios.get(url);
        apiData =  apiData.concat(apiUrl.data.results)
        
        return apiData.concat(await getApiInfo(apiUrl.data.info.next)) 
    }else{
        console.log(apiData)
        return apiData;
    }
}

export function getCharacters() {
    return function(dispatch) {
        return getApiInfo('https://rickandmortyapi.com/api/character')
            .then((response) => {
                dispatch({
                    type: GET_CHARACTERS,
                    payload: response
                })
            })
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            var json = await axios.get('https://rickandmortyapi.com/api/character/' + id);
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        }catch(error){
            console.log(error);
        }                
    }
}