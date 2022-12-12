import React, {useState, useEffect} from 'react';

import Helmet from '../components/Helmet/Helmet.js'

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from  '../Assets/heroImg.jpg'

import '../styles/hero-section.css' ;

import { Link } from 'react-router-dom';

import Category from '../components/UI/category/Category.jsx';

import '../styles/home.css'

import featureImg01 from '../Assets/featureImg01.jpg'
import featureImg02 from '../Assets/featureImg02.png'
import featureImg03 from '../Assets/featureImg03.png'

import products from '../Assets/fake-data/products.js';

import foodCategoryImg01 from '../Assets/foodCategoryImg01.png';
import foodCategoryImg02 from '../Assets/foodCategoryImg02.png';
import foodCategoryImg03 from '../Assets/foodCategoryImg03.png';
import foodCategoryImg04 from '../Assets/foodCategoryImg04.png';

import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import whyImg from '../Assets/whyImg.png';

import networkImg from '../Assets/networkImg.jpg';

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';

const featureData = [
    {
        title:'Quick Delivery',
        imgUrl: featureImg01,
        desc:"We'll be there in a few minutes, contact us Now!"
    },
    {
        title:'Super Dine In',
        imgUrl: featureImg02,
        desc:'Always here for you'
    },
    {
        title:'Easy Pick Up',
        imgUrl: featureImg03 ,
        desc:'How about you try a new menu today?'
    },
]
const Home = () => {

    const [category, setCategory] = useState('ALL')
    const [allProducts, setAllProducts] = useState(products)
    const [hotPizza, setHotPizza] = useState([])
    
    useEffect(()=>{
        const filteredPizza = products.filter(item=> item.category === "Pizza")
        const slicePizza = filteredPizza.slice(0,4)
        setHotPizza(slicePizza)
    }, [])

    useEffect(()=>{
        if (category === "ALL"){
            setAllProducts(products)
        }
        if (category === "BURGER"){
            const filteredProducts = products.filter(item => item.category === 'Burger')

            setAllProducts(filteredProducts)
        }
        if (category === "PIZZA"){
            const filteredProducts = products.filter(item => item.category === 'Pizza')

            setAllProducts(filteredProducts)
        }
        if (category === "BREAD"){
            const filteredProducts = products.filter(item => item.category === 'Bread')

            setAllProducts(filteredProducts)
        }
        if (category === "FRIES"){
            const filteredProducts = products.filter(item => item.category === 'Fries')

            setAllProducts(filteredProducts)
        }

    }, [category])

    return (
    <Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="hero__content">
                            <h5 className='mb-3'>Easy way to make an order</h5>
                            <h1 className='mb-4 hero__title'>
                                <span>HUNGRY?</span> Just wait <br></br>food at<span> your Door</span>
                            </h1>
                            <p>For decades, Ellies have hosted new guests and old friends from 
                            up the street and around the world</p>


                            <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                <button className='order__btn d-flex align-items-center justify-content-center'>Order Now!
                                <i class="ri-arrow-right-s-line"></i></button>
                                <button className='all__foods-btn'><Link to ="/foods">See all Foods</Link></button>
                            </div>
                            <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                                <p className='d-flex align-items-center gap-2'>
                                    <span className='shipping__icon'><i class="ri-car-line"></i></span>
                                    {" "}No Shipping charge
                                </p>
                                <p className='d-flex align-items-center gap-2'>
                                    <span className='shipping__icon'><i class="ri-shield-check-line"></i></span>
                                    {" "}100% secure checkout
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="hero__img">
                            <img src={heroImg} alt="hero-img" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='pt-0'>
            <Category />
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='text-center'>
                        <h5 className='feature__subtitle mb-4'>What we serve</h5>
                        <h2 className='feature__title'>Just sit back at home</h2>
                        <h2 className='feature__title'>We will <span>take care</span></h2>
                        <p className='mb-1 mt-4 feature__text'>We don't settle for anything less than food we're proud to serve.</p> 
                        <p className='feature__text'>And we don't just clock in. Not when we can also become our best, make friends and have fun while we are at it. 
                        </p>
                    </Col>
                    {
                        featureData.map((item, index)=>(
                            <Col lg='4' md='6'sm="6" key={index} className="mt-5">
                            <div className="feature__item text-center px-5 py-3">
                                <img src={item.imgUrl} alt="feature-img" className='mb-3'/>
                                <h5 className='fw-bold mb-3'>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg="12" className='text-center'>
                        <h2>Popular Foods</h2>
                    </Col>
                    <Col lg="12">
                        <div className="food__category d-flex align-items-center justify-content-center gap-4">
                            <button className= {`all__btn ${category === 'ALL' ? 'foodBtnActive' : ''} `}  
                            onClick={()=> setCategory('ALL')}>All</button>

                            <button className= {`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''} `}  
                            onClick={()=> setCategory('BURGER')}>
                            <img src={foodCategoryImg01} alt="" />Burger</button>

                            <button className= {`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''} `}  
                            onClick={()=> setCategory('PIZZA')}>
                            <img src={foodCategoryImg02} alt="" />Pizza</button>

                            <button className= {`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''} `} 
                             onClick={()=> setCategory('BREAD')}>
                            <img src={foodCategoryImg03} alt="" />Bread</button>

                            <button className= {`d-flex align-items-center gap-2 ${category === 'FRIES' ? 'foodBtnActive' : ''} `}  
                            onClick={()=> setCategory('FRIES')}>
                            <img src={foodCategoryImg04} alt="" />Fries</button>
                        </div>
                    </Col>
                    {
                        allProducts.map(item=>(
                            <Col lg="3" md="4" sm='6' xs="6" key={item.id} className="mt-5">

                             <ProductCard item={item} />   
                        </Col>
                        ))
                    }
 
                </Row>
            </Container>
        </section>
        <section className='why__choose-us'>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <img src={whyImg} alt="why-ellies"className='w-100' />
                    </Col>
                    <Col lg="6" md="6">
                        <div className="why__ellies">
                            <h2 className='ellies-title mb-4'>Why <span>Ellies Restaurant?</span></h2>
                            <p className='ellies-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Ex accusamus ipsa aliquam beatae hic consequatur non, l
                            </p>
                            <ListGroup className='mt-4'>
                                <ListGroupItem className='border-0 ps-0'>
                                <p className=' choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i> Fresh and Tasty Foods</p>
                                <p className='choose__us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto iste 
                                    minima repellat! Molestias excepturi, suscipit fuga 
                                </p>
                                </ListGroupItem>
                                
                                <ListGroupItem className='border-0 ps-0'>
                                <p className=' choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i> Quality Support</p>
                                <p className='choose__us-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Debitis fuga inventore aut aperiam qui amet illo tempora 
                                </p>
                                </ListGroupItem>

                                <ListGroupItem className='border-0 ps-0'>
                                <p className=' choose__us-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i> Order from any Location{" "}</p>
                                <p className='choose__us-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Debitis fuga inventore aut aperiam qui amet illo tempora 
                                </p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='pt-0'>
            <Container>
                <Row>
                    <Col lg="12" className='text-center mb-5'>
                        <h2>Hot Pizza</h2>
                    </Col>
                    {
                        hotPizza.map(item=>(
                            <Col lg='3' md='4' key={item.id} className='mb-6'>
                                <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>

                    <Col lg='6'md='6'>
                        <div className='testimonial '>
                            <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                            <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
                            <p className='testimonial__desc'>Ellies restaurant can be very good at what it does, kindly see to what our customer are saying.</p>
                            <TestimonialSlider />
                        </div>
                    </Col>
                    <Col lg='6'md='6'>
                        <img src={networkImg} alt="testimomial-img" className='w-100'/>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
    );
}



export default Home;