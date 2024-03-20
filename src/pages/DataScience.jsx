import React from 'react'
import Card from '../components/Card'




const DataScience = ({datas}) => {
  return (
    <div className='container'><div className="row gap-3">
      {datas.filter((data)=> data.category === "Datascience").map((data)=>{
        return <Card data={data} key={data.id} />
      })}
      </div></div>
  )
}

export default DataScience