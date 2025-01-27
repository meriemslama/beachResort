import React from 'react'
import Hero from '../componnent/Hero'
import Banner from "../componnent/Banner"
import {Link} from 'react-router-dom';
import RoomsContainer from '../componnent/RoomsContainer';

const Rooms = () => {
 
  return (
    <>
    <Hero hero="roomsHero" >
      <Banner title="our rooms" >
        <Link to='/' className='btn-primary'>
         return home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer />
  </>
  )
}

export default Rooms
