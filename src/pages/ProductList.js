import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../redux/productSlice'
import { useNavigate } from 'react-router-dom'
import CategoryList from './CategoryList'


function ProductList() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { allProducts} = useSelector(state => state.productSlice)

    useEffect(() => {
        dispatch(fetchProduct())

    }, [])


    return (
        <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center flex-wrap gap-3 mb-5'>
            <CategoryList/>
         
                {allProducts.length > 0 ? allProducts.map(i => (
    
    
                    <Card onClick={() => navigate(`single_product_list/${i.id}`)} style={{ width: '15rem', border: '2px solid orange', cursor: 'pointer' }}>
                        <Card.Body className='text-center' >
                            <Card.Title style={{ height: '25px' }}>{i.title.length > 20 ? i.title.slice(0, 20) + '...' : i.title}</Card.Title>
                            <Card.Text >{i.category.name}</Card.Text>
                            <Card.Text style={{ height: '30px', fontSize: '23px' }}>${i.price}</Card.Text>
                            <Button variant='warning'>Add To Cart</Button>
                        </Card.Body>
                    </Card>
    
    
                )) : <h1 className='text-center text-danger'>Products Not Found</h1>
                }
        </div>
    )
}

export default ProductList