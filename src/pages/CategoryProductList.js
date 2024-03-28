import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { filterCategory } from '../redux/categoryProductSlice';




function CategoryProductList() {

    const dispatch = useDispatch()
    const navigate=useNavigate()

    const { filterArray } = useSelector(state => state.categoryProductSlice)
    // console.log(filterArray);


    const { id } = useParams()
    // console.log(id);

    useEffect(() => {

        if (id) {
            dispatch(filterCategory(id))

        }
    }, [])


    return (
        <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center flex-wrap gap-3 mb-5 mt-5'>

            {filterArray.length > 0 ? filterArray.map(i => (
                <Card onClick={()=>navigate(`/single_product_list/${i.id}`)} style={{ width: '15rem', border: '2px solid orange' }}>
                    <Card.Img variant="top" src={i.images} alt='Image is not available...!'  style={{width:'100%',height:'200px'}}/>
                    <Card.Body className='text-center mt-3'>
                        <Card.Title>{i.title.length>20?i.title.slice(0,20)+"...":i.title}</Card.Title>
                        <Card.Text style={{fontSize:'20px'}} className='bold mt-2'>$ {i.price}</Card.Text>
                           
                        
                    </Card.Body>
                </Card>
            )) : <h1 className='text-center text-danger'>No Data Found</h1>

            }
        </div>
    )
}

export default CategoryProductList