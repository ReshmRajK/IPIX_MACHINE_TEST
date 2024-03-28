import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { fetchProductDetails } from '../redux/productDetailsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'




function ProductDetailsPage() {

    const dispatch = useDispatch()
    const { allProductsDetails } = useSelector(state => state.productDetailsSlice)
    // console.log(allProductsDetails);

    useEffect(() => {
        dispatch(fetchProductDetails())
    }, [])


    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center flex-wrap gap-3 mb-5 mt-5'>
            {allProductsDetails.length > 0 ? allProductsDetails.map((i,index) => (

                <Card style={{ width: '20rem',border:'2px solid orange' }} >
                    <Card.Img variant="top" src={i.images[index]} alt='Image is not available...!'  style={{width:'100%',height:'200px'}}/>
                    <Card.Body className='text-center mt-3' >
                        <Card.Title style={{height:'25px'}}>{i.title.length>25?i.title.slice(0,25)+"...":i.title}</Card.Title>
                        <Card.Text style={{height:'15rem',textAlign:'justify'}} className='mt-3'>{i.description}</Card.Text>

                        <Card.Text style={{height:'35px',fontSize:'30px'}}>$ {i.price}</Card.Text>
                            <Button onClick={()=>dispatch(addToCart(i))} variant="warning">Add To Cart</Button>
                            
                    </Card.Body>
                </Card>
            )) : <h1 className='text-center text-danger'>Product Details Not Found</h1>

            }

        </div>
    )
}

export default ProductDetailsPage