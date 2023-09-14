import React, { useState } from 'react';
import { Modal, Button, Container, Carousel, Card } from 'react-bootstrap';
import { getAllTours } from '../services/tourService';

export default function Tours() {
    const [showModal, setShowModal] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);

    const tours = getAllTours();

    const handleClose = () => setShowModal(false);

    const handleShow = (tour) => {
        setSelectedTour(tour);
        setShowModal(true);
    };

    return (
        <Container >
            <Carousel className="w-50 mx-auto mt-5 mb-5" fade>
                {tours.map((tour) => (
                    <Carousel.Item key={tour.id} >
                        <img
                            className="img-fluid rounded-5 "
                            src={tour.imageURL}
                            alt={tour.name}
                            onClick={() => handleShow(tour)}
                            style={{ cursor: 'pointer' }}
                        />
                        <Carousel.Caption>
                            <h3>{tour.name}</h3>
                            <Button variant="primary" onClick={() => handleShow(tour)}>
                                View Details
                            </Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            {selectedTour && (
                <Modal show={showModal} onHide={handleClose} className=' text-center mx-auto mt-5 mb-4'>
                    <Modal.Header >
                        <Modal.Title className='m-auto text-success '>{selectedTour.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-success'>
                        <Card>
                            <Card.Img variant="top" src={selectedTour.imageURL} alt={selectedTour.name} />
                            <Card.Body>
                                <Card.Text>{selectedTour.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
};