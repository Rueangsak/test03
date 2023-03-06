import React from 'react'
import Ranking from '../c-content/Ranking'
import QA from '../c-content/QA'
import Multi from '../c-content/Multi'
import WordCloud from '../c-content/WordCloud'
// import WordCloud from '../c-content/WordCloud'
import '../CSS/content.css'





const Content = (props) => {
  console.log("Content",props.filter[props.indexFilterShow] )
  if(props.filter.length === 0){
    return(
      <h1>ยังไม่มีคำถาม</h1>
    )
  }

  if (props.filter[props.indexFilterShow].featuresWork  === "rank") {

    return (
      <div className="content-container"> 
        {/* <Ranking indexShow={props.indexShow} imgShow={props.imgShow} changdata={props.changdata} changtit={props.changtit} /> */}
      </div>
    )
  }
  else if (props.filter[props.indexFilterShow].featuresWork === "open") {
    return (
      <div className="content-container">
        {/* <QA imgShow={props.imgShow} changtit={props.changtit}/> */}
      </div>
    )
  }
  else if (props.filter[props.indexFilterShow].featuresWork  === "word") {
    return (
      <div className="content-container">
        {/* <WordCloud imgShow={props.imgShow} changtit={props.changtit}/> */}
      </div>
    )
  }
  else if (props.filter[props.indexFilterShow].featuresWork  === "multiple") {
    return (
      <div className="content-container">
        <Multi indexFilterShow={props.indexFilterShow} filter={props.filter} setFilter={props.setFilter}  deteleFilter={props.deteleFilter}/>
      </div>
    )
  }

  return (
    <div className="content-container"></div>
  )
}

export default Content
