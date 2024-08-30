//import React, { Component } from 'react'
//import defaultBcg from '../images/room-1.jpeg'
//import Hero from '../componnent/Hero'

//import { Link } from 'react-router-dom'
//import {RoomContext} from '../context'

//import React, { useContext } from 'react';
//import { useParams } from 'react-router-dom';
//import { RoomContext } from '../context';

/*export default class SingleRoom extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
   /* this.state={
      slug:this.props.match.params.slug,
      defaultBcg
    }*/
    
  //}
 /* static contextType = RoomContext;
  componentDidMount(){
    
  }
    render() {
      //const{getRoom}=this.context;
      //const room =getRoom(this.state.slug);
       //console.log(room);
       
      return (
      <div>
        hello from single room page
      </div>
    )
  }
}*/





/*const SingleRoom = () => {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);
  console.log(room);

  return (
    <div>
      hello from single room page
    </div>
  );
};

export default SingleRoom;*/
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../context';
import { Link } from 'react-router-dom'
import Hero from '../componnent/Hero';
import Banner from '../componnent/Banner'
import StyledHero from '../componnent/StyledHero';
import { GrCapacity } from 'react-icons/gr';
class SingleRoom extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      slug: this.props.slug, // Utilisation du prop slug passé par le composant fonctionnel
      defaultBcg: '', // Ajouter une image par défaut si nécessaire
    };
  }

  static contextType = RoomContext;

  componentDidMount() {
    // Actions après le montage du composant si nécessaire
  }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
    const[mainImg,...defaultImg]=images;
    console.log(defaultImg);
    
    return (<>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms 'className='btn-primary'>back to rooms</Link>
        </Banner>
        
        {/* Autres détails de la chambre */}
      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {defaultImg.map((item,index) => {
             return <img src={item} key={index} alt={name}/>;
          })}
        </div>
        <div className='single-room-info'>
           <article className='desc'>
             <h3>details</h3>
             <p>{description}</p>    
           </article>
           <article className='info'>
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>Max capacity : {
                capacity >1 ?`${capacity} people ` : `${capacity} person `}
              </h6>
              <h6>{pets ? "pets allowed ":"no pets allowed "}</h6>
              <h6>{breakfast && "free breakfast included "}</h6>
           </article>
        </div>
         
      </section>
      <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
             {extras.map((item,index)=>{
              return <li key={index} >- {item}</li>
             })}
          </ul>
      </section>
      </>
    );
  }
}

// Composant fonctionnel pour passer les params comme props
function SingleRoomWrapper(props) {
  const { slug } = useParams();
  return <SingleRoom {...props} slug={slug} />;
}

export default SingleRoomWrapper;

