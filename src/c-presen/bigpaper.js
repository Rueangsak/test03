import { Height } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import React from 'react'
import '../CSS/bigpaper.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Multiple from './features/multiple/Multiple';
import WordCloud from './features/wordcloud/Wordcloud';

import Bars from './features/ranking/Function';








const Bigpaper = (props) => {
  // function myFunction(imgs) {
  //   var expandImg = document.getElementById("expandedImg");
  //   var imgText = document.getElementById("imgtext");
  //   expandImg.src = imgs.src;
  //   imgText.innerHTML = imgs.alt;
  //   expandImg.parentElement.style.display = "block";
  // }

  console.log("Bigpaper" , props);
  if(props.filter.length === 0){
    return(
      <h1>ยังไม่มีคำถาม</h1>
    )
  }
  else if (props.filter[props.indexFilterShow].featuresWork === "rank") {
    return (
      <div className="bigpaper-container1">
        <div className="bigpaper-container" style={{width:1020,height:700}}>

        <Bars/>
          

    
        </div>
      </div>
    )
  }

  else if (props.filter[props.indexFilterShow].featuresWork  === "open") {
    return (
      <div className="bigpaper-container1">
        <div className="bigpaper-container" style={{width:1020,height:700}}>
          {/* <TextField id="outlined-basic"
          value={props.imgShow.tit} 
          style={{padding:20}}
          /> */}
        </div>
      </div>
    )
  }  

  else if (props.filter[props.indexFilterShow].featuresWork  === "word") {
    return (
      <div className="bigpaper-container1">
      <div className="bigpaper-container" style={{width:1020,height:700}}>
      <WordCloud/>
      </div>
    </div>
    )
  }  

  else if (props.filter[props.indexFilterShow].featuresWork  === "multiple") {
    return (
      <div className="bigpaper-container1">
        <div className="bigpaper-container" style={{width:1020,height:700}}>
          {/* <Multiple title={props.imgShow.tit} ans={props.imgShow.items}/> */}
          <h1>{"multiple :" + (props.indexFilterShow+1) }</h1>
          <h1>{"question :" + props.filter[props.indexFilterShow].question}</h1> 
          {props.filter[props.indexFilterShow].ans.map((data,index)=>{
            return(
              <div key={index}>
                <TextField label="Item" value={data.text} style={{padding:10}} />
                <input type="radio"  name="big-paper-status" checked={data.status}  />
              </div>
            )
            
          }
          )}
                          
          
          
        </div>
      </div>
      
    )
    
  }

  return (
    <div className="bigpaper-container2">
      <div className="bigpaper-container1">
        {/* <div class="bigpaper-container22">
          <img id="expandedImg" style={{width:1000,height:700}} src={props.imgShow.url} />
          <div id="imgtext"></div>
        </div> */}
      </div>
    </div>
  )
}

export default Bigpaper
