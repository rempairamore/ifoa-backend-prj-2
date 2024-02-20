import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { urlSito } from "../../var"; 

export default function CardComp({ e, index, articoloSingolo }) {
  
  const navigate = useNavigate();

  const location = useLocation();

  const [tags, setTags] = useState([]);

  const [arrayCategorie, setArrayCategorie] = useState([]);
  
  useEffect(() => {
      axios(urlSito + "categories")
        .then((response) => {
          setTags(response.data);

        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, []);

    useEffect(() => {
      creaCategorie();
    }, [tags]); // Chiamata a creaCategorie ogni volta che tags cambia
    


    function creaCategorie() {
      const categorie = e.categories.map(singleCategoryId => {
        const category = tags.find(t => t.id === singleCategoryId); // Trova la categoria corrispondente
        return category ? { id: category.id, name: category.name } : null; // Ritorna un oggetto con id e nome se trovato
      }).filter(Boolean); // Filtra eventuali valori null o undefined
    
      setArrayCategorie(categorie); // Aggiorna lo stato con gli oggetti delle categorie trovati
    }
    
    function handleclick(obj) {
      navigate("tag/"+obj.id+"/"+btoa(obj.name))
    }
    


  return (
    <Col key={index}>
      <Card>
        <Card.Img
          variant="top"
          src={e.jetpack_featured_media_url || "/no-image.png"}
          alt="imm card"
        />
        <Card.Body>
          {/* <Card.Title>{e.title.rendered}</Card.Title> */}
          <Card.Title dangerouslySetInnerHTML={{ __html: e.title.rendered }} />
          {location.pathname === '/' && (
            <h6 className="text-center">
              {arrayCategorie && arrayCategorie.map((e, index) => (
                <span className="me-2 fs-6" dangerouslySetInnerHTML={{ __html: e.name }} key={index} onClick={() => handleclick(e)}></span>
              ))}
            </h6>
          )}  
          <Card.Text dangerouslySetInnerHTML={{ __html: e.excerpt.rendered }} />
          <Button
            onClick={() => {
              localStorage.setItem(
                "singleArticle",
                JSON.stringify(articoloSingolo)
              );
              navigate(`/articolo/${index}`);
            }}
            variant="primary"
          >
            Leggi Articolo
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
