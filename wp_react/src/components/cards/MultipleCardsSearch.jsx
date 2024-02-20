import React, { useEffect, useState } from 'react';
import { urlSito } from '../../var';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import CardComp from './CardComp';

export default function MultipleCardsSearch({termineCercato}) {


    const [articoli, setArticoli] = useState([]);

    useEffect( () => {
        axios(urlSito + 'posts/?per_page=16&search='+termineCercato)
        .then(response => {
        setArticoli(response.data);
        })
        .catch(error => {
        console.error('Error fetching data: ', error);
    });
        
    },[termineCercato]);

    console.log(articoli);
    
  return (
    <>
    <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-4 my-3">
    {articoli &&
        articoli.map((e, index) => (
            <CardComp key={index} e={e} index={index} articoloSingolo={e} />
        ))
    }
    </Row>
    </>
  )
}
