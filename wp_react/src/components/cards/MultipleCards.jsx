import React, { useEffect, useState } from 'react';
import { urlSito } from '../../var';
import axios from 'axios';
import { Row, Spinner } from 'react-bootstrap';
import CardComp from './CardComp';

export default function MultipleCards({ numPagina }) {


  const [articoli, setArticoli] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios(urlSito + 'posts/?per_page=16&page=' + numPagina)
      .then(response => {
        setArticoli(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false)
      });

  }, [numPagina]);

  // console.log(articoli);

  return (
    <>
      {isLoading ? (
        <div className='spinner'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
      ) : (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4 my-3">
          {articoli &&
            articoli.map((e, index) => (
              <CardComp key={index} e={e} index={index} articoloSingolo={e} />
            ))
          }
        </Row>
      )}
    </>
  )
}