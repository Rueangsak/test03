import React from 'react'

import '../CSS/paperpre.css'




const Paperpre = (props) => {
  return (
    <div className="paperpre-container">
      <div className ="paperpre-container1">
          <div className="row">
            {props.filter.map((data,index)=>{
              return(
                <div key={index} onClick={()=>props.setIndexFilterShow(index)}>
                  <h1>{data.featuresWork + " : "+(index+1)}</h1>
                </div>
                // <div className="column">
                //   <img src={data.url} className='ima' onClick={()=>props.clickImg(data,index)}/>
                // </div>
              )
            })}
          </div>


        
      </div>
    </div>
  )
}

export default Paperpre
