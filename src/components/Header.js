import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { searchData } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';



function Header() {

  const cartArray=useSelector(state=>state.cartSlice)

    const dispatch=useDispatch()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div style={{ width: '100vw' }}>

      <Navbar expand="lg" className='header_section '>
        <Container fluid>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand  className='nav_title'>
              <i className="fa-solid fa-shop fa-beat me-3 text-white ms-2  nav_icon"></i>
              FlipKart
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <i className="fa-solid fa-cart-shopping me-5 " style={{height:'35px',fontSize:'30px'}}>
              <b style={{fontSize:'20px'}}>{cartArray.length}</b></i>

            <Nav.Link onClick={handleShow} className='me-5 van_link' href="">View By</Nav.Link>

            <Form className="d-flex">
              <input  onChange={(e)=>dispatch(searchData(e.target.value))}  type="search" className='w-100 border-0 me-3' placeholder="search here.." />
              <Button  variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{backgroundColor:'gold'}}>
          <Offcanvas.Title >View List</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='mt-5 text-center'>
         <Link to={'/product_details'} style={{textDecoration:'none'}}> <p className=' offcanvas_content'>Product Details</p></Link>
          <Link to={'/user'} style={{textDecoration:'none'}}><p className=' offcanvas_content'>User List</p></Link>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default Header