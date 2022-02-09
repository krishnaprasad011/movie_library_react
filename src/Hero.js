import React,{useState,useEffect} from 'react';
import { Container, Row,Col,Card,ListGroup,ListGroupItem,InputGroup,FormControl,Button } from 'react-bootstrap';

const Hero = ({ handelLogOut})=> {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");

    const getMovie = async (search)=>{
        const url =`http://www.omdbapi.com/?s=${search}&apikey=8b3a7859`;
        const res=await fetch(url);
        const resJson = await res.json();
        if(resJson.Search){
            setMovie(resJson.Search);

        }else{
            const urlD = "http://www.omdbapi.com/?s=Avengers&apikey=8b3a7859";
            const resD = await fetch(urlD);
            const resJsonD = await resD.json();
            setMovie(resJsonD.Search);
        }
    }

    useEffect(() => {
        getMovie(search);
    }, [search])
    return (
        <section className="hero">
            <nav>
                <h2>Movie Library</h2>
                <button onClick={handelLogOut}>Logout</button>
            </nav>
            <Container>
                <Row className="mt-3 mb-3">
                    <Col sm={11}>
                            <FormControl
                                placeholder="Type to Search ......"
                                aria-label="Movie name"
                                aria-describedby="basic-addon2"
                                value={search}
                                onChange={(event) => setSearch(event.target.value)}
                            />
                            
                    </Col>
                    
                    

                </Row>
                <Row>
                {
                    movie.map((m,index)=>(
                        
                            <Col xl={4} className="pt-3">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={m.Poster} />
                                <Card.Body>
                                    <Card.Title>{m.Title}</Card.Title>
                                    {/* <Card.Text>
                                        
                                        </Card.Text> */}
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{m.Year}</ListGroupItem>
                                    
                                </ListGroup>
                            </Card>

                            </Col>
                    ))
                }
                        </Row>

            </Container>
        </section>
    )
}

export default Hero
