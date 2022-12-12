import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import categoryImg01 from '../../../Assets/categoryImg01.jpg'
import categoryImg02 from '../../../Assets/categoryImg02.jpg'
import categoryImg03 from '../../../Assets/categoryImg03.jpg'
import categoryImg04 from '../../../Assets/categoryImg04.jpg'
import '../../../styles/category.css'

const categoryData=[
    {
        display:'Fastfood',
        imgUrl: categoryImg01
    },
    {
        display:'Pizza',
        imgUrl: categoryImg02
    },
    {
        display:'Asian Food',
        imgUrl: categoryImg03
    },
    {
        display:'Row Meat',
        imgUrl: categoryImg04
    },

]

const Category = () => {
    return <Container>
        <Row>
            {
                categoryData.map((item, index)  =>(
                    <Col lg="3" md="4"sm="6" xs="6" className="mb-4">
                        <div className="category__item d-flex align-items-center gap-3">
                            <div className="category__img">
                                <img src={item.imgUrl} alt="category__item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>

                ))
            }
        </Row>
    </Container>
}



export default Category;