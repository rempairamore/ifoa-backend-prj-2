import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { urlSito } from "../../var"; 

export default function CardComp({ e, index, articoloSingolo }) {
  
  const navigate = useNavigate();

  const [tags, setTags] = useState([]);

  let arrayCategorie = [];

  // per le immagini: prendere il featured media
  // fare poi una chiamata fetch a: 
  // https://justatip.it/wp-json/wp/v2/media?parent="qui_metti_il_feature_media"

  // useEffect(() => {
  //     axios(urlSito + "tags")
  //       .then((response) => {
  //         setTags(response.data);
  //         creaCategorie();

  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data: ", error);
  //       });
  //   }, []);


  //   function creaCategorie() {
  //     e.tags.forEach(singleTag => {
  //       if(tags.filter(tag => singleTag.includes(tag.id))) {
  //           arrayCategorie.push(tag.name)
  //       }
  //       console.log(arrayCategorie);
  //     }); 
      
  //   }


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
