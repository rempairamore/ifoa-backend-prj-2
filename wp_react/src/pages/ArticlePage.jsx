import React from 'react'
import SingleArticleComp from '../components/articolo/SingleArticleComp';

export default function ArticlePage() {
    
    const articolo = JSON.parse(localStorage.getItem('singleArticle'));
  
    return (
    
    <SingleArticleComp articolo={articolo} />
  )
}
