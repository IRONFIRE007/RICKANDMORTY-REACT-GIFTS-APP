import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

// const categories = ['One','Two','Three'];

const [categories, setCategories] = useState(['Rick and Morty',]);

// const handleAdd = () =>{
//     setCategories([...categories,'For']);
// }



    return (
        <>
        <h2>Gif Expert</h2> 
        <AddCategory setCategories={setCategories}/>
        <hr/>

{/* <button onClick={handleAdd} >Add</button> */}

        <ol>


                {
                        categories.map(category => 
                        <GifGrid 
                        key={category}
                        category={category}/>
                        
                            )
                }
        </ol>
        </>
    )
}


