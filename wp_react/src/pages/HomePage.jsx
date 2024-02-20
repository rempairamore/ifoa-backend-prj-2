import React, { useState } from 'react';
import MultipleCards from '../components/cards/MultipleCards';
import { Pagination } from 'react-bootstrap';

export default function HomePage() {


    // Stato per tenere traccia della pagina corrente
  const [activePage, setActivePage] = useState(1);

  // Numero totale di pagine, per semplicità lo imposto staticamente a 3
  const totalPages = 3;

  // Funzione per gestire il cambio di pagina
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    // Qui puoi anche effettuare chiamate API o altre azioni necessarie quando cambia la pagina
  };

  // Genera gli elementi di paginazione dinamicamente
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item key={number} active={number === activePage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
    <MultipleCards numPagina ={activePage}/>
    <Pagination aria-label="Page navigation example" className='d-flex justify-content-center'> 
      <Pagination.Prev onClick={() => activePage > 1 && handlePageChange(activePage - 1)}>Previous</Pagination.Prev>
      {items}
      <Pagination.Next onClick={() => activePage < totalPages && handlePageChange(activePage + 1)}>Next</Pagination.Next>
    </Pagination>
    </>
  )
}
