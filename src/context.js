import React, { Component } from 'react'
import items from './data'
//import FeaturedRooms from './componnent/FeaturedRooms';
const RoomContext = React.createContext();
 class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };
    
    componentDidMount(){
        let rooms = this.formatData(items)
        //console.log(rooms);
        let featuredRooms =rooms.filter(room =>room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading : false,
            price:maxPrice,
            maxPrice,
            maxSize
        })
    }
    formatData(items){
        let  tempItems =items.map(item => {
          let id = item.sys.id
          let images = item.fields.images.map(image => image.fields.file.url)  ;
          let room ={...item.fields,images,id}
          return room;
        });
        return tempItems
    }
    getRoom=(slug)=>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug === slug);
        return room;
    }
    handleChange = event =>{
        const target =event.target
        const name =event.target.name
        const value =target.type ==='checkbox'? target.checked:target.value
        //console.log(type,name,value);
        this.setState({
            [name]:value
        },this.filterRooms)

    }
    filterRooms =()=>{ 
       // console.log("hello");
       let {
        rooms,type,capacity,price,minSize,maxSize,breakfast,pets
       }=this.state
        let tempRooms =[...rooms]
        capacity = parseInt(capacity)
        if(type !== 'all'){
            tempRooms=tempRooms.filter(room => room.type ===type)
        }
        if(capacity !== 1){
            tempRooms=tempRooms.filter(room => room.capacity >=capacity)
        }
        if(price !== 1){
            tempRooms=tempRooms.filter(room => room.price <=price)
        }
        
        tempRooms=tempRooms.filter(room => room.size >=minSize && room.size <=maxSize)
        if(breakfast){
            tempRooms=tempRooms.filter(room => room.breakfast ===true)
        }
        if(pets){
            tempRooms=tempRooms.filter(room => room.pets ===true)
        }
       
        this.setState({
            sortedRooms :tempRooms
        })
    }
    render() {
    return (
      <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
        {this.props.children}
      </RoomContext.Provider>
    )
  }
}
const RoomConsumer = RoomContext.Consumer;
/*export function withRoomConsumer(component){
    return function ConsumerWrapper(props){
        return <RoomConsumer >
            {
                value => <Component {...props} context={value} />
            }
        </RoomConsumer>
    }
}*/
export {RoomProvider,RoomConsumer,RoomContext};
