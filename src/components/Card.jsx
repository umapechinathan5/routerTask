import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';





const Card = ({data}) => {
  return (
    <div className = "card" style={{width: "18rem"}}>
  <img className = "card-img-top" src={data.img} alt="Card image cap"></img>
  <div className = "card-body">
    <h5 className = "card-title">{data.title}</h5>
    <p className = "card-text">{data.description}</p>
    <div className='mt-2 d-flex flex-row flex-nowrap justify-content-between'>
      <p className='mb-0 card-text'>
         {data.author}
      </p>
      <p className='mb-0 card-text'>
         {data.date}
         </p>
    </div>
  </div>
</div>
  )
}

export default Card