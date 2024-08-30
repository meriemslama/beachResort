import React from 'react'
import Hero from '../componnent/Hero'
import Banner from "../componnent/Banner"
import {Link} from 'react-router-dom';
export default function error() {
  return (
    <Hero hero="defaultHero" >
      <Banner title="404" subtitle="Page not found">
        <Link to='/' className='btn-primary'>
         return home
        </Link>
      </Banner>
    </Hero>
  )
}
