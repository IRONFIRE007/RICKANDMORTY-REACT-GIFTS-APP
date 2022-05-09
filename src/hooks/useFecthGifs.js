import { useState,useEffect } from "react"
import { getGifs } from '../helpers/getGifts';


export const useFecthGifs =(category) =>{

const [state, setState] = useState({
    data:[],
    loading:true

});


useEffect(() => {

 getGifs (category).then( imgs => {
     setState({
         data: imgs,
         loading: false,
     })
 }
 );
},[category]);


return state;

}