import React from 'react';

export default function SingleArticleComp({articolo}) {



  return (
    <>
    <h1 className='my-4 mx-3'>{articolo.title.rendered}</h1>
    <main>
        <div className='mx-3 singlePost' dangerouslySetInnerHTML={{ __html: articolo.content.rendered }}></div>    
    </main>
    </>
  )
}
