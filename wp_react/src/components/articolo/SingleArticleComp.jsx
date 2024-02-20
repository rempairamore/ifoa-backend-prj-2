import React, { useEffect } from 'react';

export default function SingleArticleComp({articolo}) {

    

  return (
    <>
    <h1 className='my-4 mx-3' dangerouslySetInnerHTML={{ __html: articolo.title.rendered }}></h1>    
    <main>
        <div className='mx-3 singlePost' dangerouslySetInnerHTML={{ __html: articolo.content.rendered }}></div>    
    </main>
    </>
  )
}
