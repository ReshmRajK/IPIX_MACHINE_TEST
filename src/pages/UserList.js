import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/userSlice'
import AOS from 'aos';
import 'aos/dist/aos.css';



function UserList() {

    const dispatch = useDispatch()
    const { userArray } = useSelector(state => state.userSlice)
    console.log(userArray);

    useEffect(() => {
        dispatch(fetchUser())
    }, [])

    return (
        <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center flex-wrap gap-3 mb-5 mt-5'>

            {userArray.length > 0 ? userArray.map(i => (
                <Card data-aos="fade-up" style={{ width: '15rem', border: '2px solid orange', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} >
                    <Card.Img variant="top" src={i.avatar} alt='Image is not available' style={{ width: '100%', height: '200px' }} />
                    <Card.Body className='text-center'>
                        <Card.Title style={{ height: '25px' }}>{i.name}</Card.Title>
                        <Card.Text style={{ height: '25px' }}>{i.email}</Card.Text>
                    </Card.Body>
                </Card>
            )) : <h1 className='text-center text-danger'>No User Found</h1>

            }

        </div>
    )
}

export default UserList