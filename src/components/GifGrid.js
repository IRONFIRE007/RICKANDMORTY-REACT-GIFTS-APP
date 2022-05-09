import React from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';




export const GifGrid = ({category}) => {


const {data : images,loading}= useFecthGifs(category);
   
  
    return (

        <>


   <h3>{category}</h3>

   { loading  && <p>Loading...</p> } 

      <div>


      <div  className="card-grid">
        
         
        {
  images.map((image) =>
          <GifGridItem 
          key={image.id}
        //   image={image}
          {...image}
          />
   )

        }
       
    
    </div>

      </div>
            
    </>
    )
}
