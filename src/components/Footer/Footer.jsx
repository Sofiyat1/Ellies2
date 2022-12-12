import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../Assets/logo.png'
import '../../styles/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <Row>
                <Col lg="3" md="4" sm="6" >

                <div className='footer__logo text-start'>
                    <img src={logo} alt="logo" />
                    <h5>Ellies Restaurant</h5>
                    <p>Everything we do is a celebration of food. Enjoy ! while you are here😋<br></br>
                    Thanks for coming 😊
                    </p>
                </div>
                </Col>

                <Col lg="3" md="4" sm="6" >
                    <h5 className='footer__title'>Delivery Time</h5>
                    <ListGroup className='deliver__time-list'>
                        <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                            <span>Sunday - Thursday</span>
                            <p>10:00am - 11:00pm</p>
                        </ListGroupItem>
                        <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                            <span>Friday - Saturday</span>
                            <p>Off Day</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg="3" md="4" sm="6" >
                <h5 className='footer__title'>Contact</h5>
                    <ListGroup className='deliver__time-list'>
                    
                    <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                        <span>Location: Yoaco, Ogbomoso, Oyo State. Nigeria</span>
                    </ListGroupItem>
                    
                    <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                            <span>
                                <Link to ='tel:+2347088643717'><i class="ri-phone-fill"></i> &nbsp;&nbsp; +234 708 8643 717</Link>
                            </span>
                        </ListGroupItem>
                        <ListGroupItem className=' delivery__time-item border-0 ps-0'>
                            <span>
                                <Link to ='https://mail.google.com/mail/u/0/#inbox'><i class="ri-mail-fill"></i> &nbsp;&nbsp;sofiyatgbadamosi@gmail.com</Link>
                            </span>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg="3" md="4" sm="6" >
                <h5 className='footer__title'>Newsletter</h5>
                <p>Subscribe our Newsletter</p>
                <div className="newsletter">
                    <input type="email" placeholder="enter your email" />
                    <span><i class="ri-send-plane-line"></i></span>
                </div>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg="6" md="6">
                    <p className='copyright__text'>Copyright &copy; -2022, website made by Gbadamosi Sofiyat. All Rights Reserved.</p>
                </Col>
                <Col lg="6" md="6">
                    <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
                        <p className='m-0'>Follow: </p>
                        <span>
                            {" "}
                            <Link to ="https://twitter.com/SofiyatG"> <i class="ri-twitter-fill"></i></Link>{" "}
                        </span>
                        <span>
                            <Link to="https://www.linkedin.com/in/gbadamosi-sofiyat-73104a224/"><i class="ri-linkedin-box-fill"></i></Link>
                        </span>
                        <span>
                            <Link to="https://www.github.com/Sofiyat1"><i class="ri-github-fill"></i></Link>
                        </span>
                    </div>
                </Col>
                <Col lg="6" md="6"></Col>


            </Row>
        </Container>
    </footer>
    );
}



export default Footer;