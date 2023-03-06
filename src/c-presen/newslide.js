import React,{useState} from 'react'
import PropTypes from 'prop-types'
import '../CSS/newslide.css'
import Button from '@mui/material/Button';
const Newslide = (props) => {


  //const [imgData,setImgData] = useState([{name:"rank",items:[],tit:"",url:"../../img/rank.jpg"},{name:"open",items:[],tit:"",url:"../../img/open.jpg"},{name:"word",items:[],tit:"",url:"../../img/word.jpg"},{name:"multi",items:[],tit:"",url:"../../img/multi.jpg"}])
  const [showData,setShowData] = useState(false)



  return (
    <div className="newslide-container">
      <div className="newslide-navbar navbar-container">
        {/* <button className="newslide-button button" onClick={()=>setShowData(!showData)}>{props.button}</button> */}
        <Button variant="contained" className="newslide-button button" onClick={()=>setShowData(!showData)}>{props.button}</Button>
        {showData? 
        // imgData.map((data)=>{
        //   return(

        //     // eslint-disable-next-line jsx-a11y/alt-text
        //     <img src={data.url} style={{width:80,height:40,paddingRight:5,paddingLeft:5,paddingTop:2}} 
        //     onClick={()=>props.addfilter(
        //       {
        //         featuresWork: data.name ,   
        //         question:"",
        //         ans:[]
        //       }
        //     )}
        //     />
         
        //     )
        // })
        <div>
          <img src={"../../img/rank.jpg"} style={{width:80,height:40,paddingRight:5,paddingLeft:5,paddingTop:2}} 
              onClick={()=>props.addfilter(
                {
                  featuresWork: "rank" ,   
                  question:"",
                  ans:[]
                }
              )}
          />
          <img src={"../../img/open.jpg"} style={{width:80,height:40,paddingRight:5,paddingLeft:5,paddingTop:2}} 
              onClick={()=>props.addfilter(
                {
                  featuresWork: "open" ,   
                  question:"",
                  ans:[]
                }
              )}
          />
          <img src={"../../img/word.jpg"} style={{width:80,height:40,paddingRight:5,paddingLeft:5,paddingTop:2}} 
              onClick={()=>props.addfilter(
                {
                  featuresWork: "word" ,   
                  question:"",
                  ans:[]
                  
                }
              )}
          />
          <img src={"../../img/multi.jpg"} style={{width:80,height:40,paddingRight:5,paddingLeft:5,paddingTop:2}} 
              onClick={()=>props.addfilter(
                {
                  featuresWork: "multiple" ,   
                  question:"",
                  ans:[]
                }
              )}
          />
        </div>
        :
        <></>}
      </div>
    </div>
  )
}

Newslide.defaultProps = {
  button: '+',
}

Newslide.propTypes = {
  button: PropTypes.string,
}

export default Newslide
