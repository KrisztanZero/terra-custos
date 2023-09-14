import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

export default function Footer() {
    return (
        <div className=" footer bg-success">
            <Container >
                <Row>
                    <Col>
                    <a
                            href="https://github.com/KrisztanZero/terra-custos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-decoration-none"
                        >
                            &copy; {new Date().getFullYear()} Terra Custos
                        </a>
                    </Col>
                    <Col>
                        <p>Privacy Policy | Terms of Service</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}