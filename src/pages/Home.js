import React from 'react'
import Hero from '../componnent/Hero'
import Banner from "../componnent/Banner"
import {Link} from 'react-router-dom';
import Services from '../componnent/Services'
import FeaturedRooms from '../componnent/FeaturedRooms';
import Button from '../componnent/StyledHero';
export default function Home() {
  return (
    <>
      <Hero >
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services/>
      <FeaturedRooms />
      <Button >hello</Button>
    </>
      
  )
}
