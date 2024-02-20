import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { urlSito } from '../var';
import MultipleCardsTag from '../components/cards/MultipleCardsTag';

export default function TagPage() {

    const querySearch = useParams();
    console.log(querySearch.tagID);

    const [tag, setTag] = useState();

    useEffect(() => {
        axios(urlSito + "posts?categories="+querySearch.tagID)
          .then((response) => {
            setTag(response.data);
  
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }, []);

      console.log(tag);

  return (
    <>
    <h2 className='m-3'>Articoli con la categoria: <span dangerouslySetInnerHTML={{ __html: atob(querySearch.idName)}} ></span></h2>
    <MultipleCardsTag tagcercato={querySearch.tagID}/>
    </>

  )
}
