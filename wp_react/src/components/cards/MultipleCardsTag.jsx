import React, { useEffect, useState } from 'react';
import { urlSito } from '../../var';
import axios from 'axios';
import { Row, Spinner } from 'react-bootstrap'; 
import CardComp from './CardComp';

export default function MultipleCardsTag({ tagcercato }) {
    const [articoli, setArticoli] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        if (!tagcercato) {
            // Se non c'è un termine di ricerca, evito di fare la chiamata API e pulisco gli articoli esistenti
            setArticoli([]);
            return;
        }
        setIsLoading(true); 
        axios(urlSito + 'posts/?per_page=16&categories=' + tagcercato)
            .then(response => {
                setArticoli(response.data);
                setIsLoading(false); 
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setIsLoading(false); 
            });

    }, [tagcercato]);

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
                    {articoli.length > 0 ? (
                        articoli.map((e, index) => (
                            <CardComp key={index} e={e} index={index} articoloSingolo={e} />
                        ))
                    ) : (
                        <p>Nessun articolo trovato.</p> // Opzionale: messaggio quando non ci sono articoli
                    )}
                </Row>
            )}
        </>
    );
}