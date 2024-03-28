import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { singleFetch } from '../redux/singleProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap'
import AOS from 'aos';
import 'aos/dist/aos.css';


function ProductListSingleView() {

    const dispatch = useDispatch()
    const { id } = useParams()
    // console.log(id);

    const { singleProduct } = useSelector(state => state.singleProductSlice)
    // console.log(singleProduct);

    useEffect(() => {
        AOS.init();
        if (id) {
            dispatch(singleFetch(id))
        }
    }, [])


    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex align-items-center justify-content-center'>

            {singleProduct &&

                <Card data-aos="flip-left" style={{ width: '35rem', height: '30rem', border: '2px solid orange', cursor: 'pointer' }} className='bg-black text-white shadow'>
                    <Card.Img variant="top" src={singleProduct.images} alt='Image is not available...!' style={{ width: '100%', height: '200px' }} />
                    <Card.Body className='text-center mt-3'>
                        <Card.Title style={{ fontSize: '27px' }}>{singleProduct.title}</Card.Title>
                        <Card.Text className='mt-3' style={{ textAlign: 'justify' }}>{singleProduct.description}</Card.Text>
                        <Card.Text style={{ fontSize: '30px' }} >$ {singleProduct.price}</Card.Text>
                    </Card.Body>
                </Card>

            }
        </div>
    )
}

export default ProductListSingleView