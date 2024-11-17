import './App.css';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

export const App = () =>{

    const [cars, setCars] = useState([]);

    useEffect(()=> {
        fetch('http://cars.sulla.hu/cars', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setCars(data);
        })
        .catch(error => {
            console.error('Hiba történt az adatok betöltésekor:', error);
        });
    },
[]);

return(
    <Row>
        {cars.map(car=>(
            <Col md={4} key={car.id}>
                <Card className='mb-4'>
                    <Card.Img variant='top' src={`data:image/jpeg; base64, ${car.car_picture}`}
                    alt={`${car.car_name} Kép`}/>
                    <Card.Body>
                        <Card.Title>
                            {car.car_name}
                        </Card.Title>
                        <Card.Text>
                            <strong>szin:</strong>{car.car_color}<br/>
                            <strong>azonosító:</strong>{car.id}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
    </Row>
)

}

export default App;
/**Feladat
Hozz létre egy új React projektet (npx create-react-app my-cars-app) és töltsd be a react-bootstrap könyvtárat (npm install react-bootstrap bootstrap). Töltsd be a Bootstrap CSS fájlt a src/index.js fájlban az alábbi módon:

javascript
Kód másolása
import 'bootstrap/dist/css/bootstrap.min.css';
Másold be az alábbi App.js fájl tartalmát a projekt src mappájába.

A App.js fájlban:

Importáld a React-et, a useEffect és useState hookokat.
Használd a useEffect-et, hogy lekérd az autók adatait a https://cars.sulla.hu/cars címről. A válaszként érkező adatokat JSON formátumban kapod meg.
Ha a lekérés sikeres, állítsd be az cars állapotot a visszakapott adatokkal.
Ha hiba történik, konzolra írasd ki a hibát.
Az alkalmazás:

Jelenítse meg az autók adatait kártyákon, ahol minden kártya tartalmazza az autó képét (base64 formátumban), nevét, színét, és azonosítóját.
Használj Row és Col komponenseket a kártyák elrendezéséhez.
Töltsd be a App.css fájlt, és adj hozzá egyedi stílusokat a kártyákhoz, ha szükséges.

Teszteld az alkalmazást, hogy megfelelően jeleníti-e meg az autók adatait és kezel-e minden hibát.**/