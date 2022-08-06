import React from 'react'

export default function Card(props) {
  return (
    <section className='card' >
        
        <div className='card-img' >
            <img className='card--img' src={require(`./images/${props.coverImg}`)} alt="img" />
        </div>

        <div className='card-title' >

            <div className='card-title-location' >

            <img className='card-title-location-img' src={require('./images/location.png')} alt='img' />

            <span className='bold' >{props.location}</span>
              
            <a  className='card-title-location-url bold' href={props.url} target='_blank' rel="noreferrer"  >view on google maps</a> 
    
            </div>

            <h2 className='card-title-heading' >{props.title}</h2>  

            <span className=' card-title-dates bold' > {props.startDate} - {props.endDate} </span>

            <p className='card-title-description' >{props.description}</p>

        </div> 

    </section>
  )
}
