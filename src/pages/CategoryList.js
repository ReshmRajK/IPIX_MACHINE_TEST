import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { fetchCategory } from '../redux/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './CategoryList.css'



function CategoryList() {

  const dispatch = useDispatch()
  const navigate=useNavigate()

  const { categoryProducts } = useSelector(state => state.categorySlice)
  // console.log(categoryProducts);

  useEffect(() => {
    dispatch(fetchCategory())
  }, [])


  return (
    <div style={{ width: '100%' }} className='category d-flex justify-content-center align-items-center gap-3 mb-5 mt-2' >

      {categoryProducts.length > 0 ? categoryProducts.map(i => (
        <Card style={{ width: '10rem',border:'2px solid orange' }} >
          <Card.Img onClick={()=>navigate(`/category_product_list/${i.id}`)} variant="top" src={i.image} alt='Image is not available...!'  style={{width:'100%',height:'100px'}}/>
          <Card.Body>
            <Card.Title style={{height:'20px'}}  className='text-center'>{i.name}</Card.Title>
          </Card.Body>
        </Card>
      )) : <h1 className='text-center teaxt-danger'>No Category List Found</h1>

      }

    </div>
  )
}

export default CategoryList