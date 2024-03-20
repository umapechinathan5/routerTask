import React from 'react'
import Card from '../components/Card'



const Cyber = ({datas}) => {
  return (
    <div className='container'><div className="row gap-3">
      {datas.filter((data)=> data.category === "Cybersecurity").map((data)=>{
        return <Card data={data} key={data.id} />
      })}
      </div></div>
  )
}

export default Cyber