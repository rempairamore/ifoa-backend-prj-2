import React from 'react'
import MultipleCardsSearch from '../components/cards/MultipleCardsSearch'
import { useParams } from 'react-router-dom'

export default function SearchPage() {

    const querySearch = useParams()
    console.log(querySearch.searchTerm);
  return (
    <>
    <MultipleCardsSearch termineCercato={querySearch.searchTerm}/>
    </>
  )
}
