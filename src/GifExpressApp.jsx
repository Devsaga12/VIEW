import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpressApp = () => {
  const [categories, setCategories] = useState([' jujutsu kaisen']);

  const onAddCategoria = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories]);

  }

  return (
    <>
      <h1>GifExpressApp</h1>
         <AddCategory 
        onNewCategory ={ event => onAddCategoria (event)}
        /> 

        {
          categories.map( category => (
            <GifGrid key={ category }
            category={category}/>

          ))
        }
     
      
        

      

    

      {/* Git itms   */}



    </>
  )
}


