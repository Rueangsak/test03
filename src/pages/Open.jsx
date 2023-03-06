import React,{useEffect, useState} from 'react'

import Newslide from '../c-presen/newslide'
import Paperpre from '../c-presen/paperpre'
import Bigpaper from '../c-presen/bigpaper'
import Content from '../c-presen/content'
import '../CSS/open.css'
import '../CSS/navbar2.css'



import { useParams } from 'react-router-dom';
import serviceApi from '../firebase/serviceApi'

const Open = (props) => {
  const { docId } = useParams();
  // const [img,setImg] = useState(["https://www.w3schools.com/howto/img_nature.jpg"])
  const [img,setImg] = useState([])
  const [imgShow,setImgShow] = useState("")
  const [indexShow,setIndexShow] = useState(0)


  const [loading,setLoading] = useState(true)
  const [filter,setFilter] = useState([])
  const [indexFilterShow,setIndexFilterShow] = useState(0)
  

  const addImg=(newImg)=>{
    setImg([...img,newImg])
  }


  // const [items,setItems] = useState([])
  // const addItems=(newItems)=>{
  //   setItems([...items,newItems])
  // }


  const addfilter = (newfilter)=>{
    console.log([...filter,newfilter]);
    setFilter([...filter,newfilter])
  }


  const deteleFilter = (oldIndex)=>{
    let newFileter = filter
    newFileter = newFileter.filter((value, index)=>index!==oldIndex) 
    setFilter([...newFileter])
  }

  const saveSuccess = ()=> {
    alert("Save Success")
  }

  const save = ()=> {
    serviceApi.updatePaper(docId,filter,saveSuccess)
    
  }
  const getSuccess = (workdata)=> {
    console.log("workdata",workdata);
    setFilter(workdata.filter)
    setLoading(false)
    
  }


  useEffect (() => {
    serviceApi.getPaper(docId,getSuccess);
  }, []);

  if(loading){
    return(
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="page-container">

      <h1>{docId}</h1>
      <div className="navbar2-container">
        <div className="navbar2-navbar navbar-container">
          <div className="navbar2-max-width max-width">
            <span className="navbar2-text">presentation</span>
              <button className="navbar2-button button" onClick={()=>save()}>save</button>
              <button className="navbar2-button1 button">Presentation</button>
          </div>
        </div>
      </div>


        <Newslide funButton={addImg} addfilter={addfilter}/>
      <div className="page-container1">
        <div className="page-container2">
          <Paperpre filter={filter} setIndexFilterShow={setIndexFilterShow}/>
        </div>
        <div className="page-container3">
          <Bigpaper indexFilterShow={indexFilterShow} filter={filter}/>
        </div>
        <div className="page-container4">
          {/* <h3 style={{padding:10}}>content</h3> */}
          <Content indexFilterShow={indexFilterShow} filter={filter} setFilter={setFilter} deteleFilter={deteleFilter}/>
        </div>
      </div>
    </div>
  )
}


export default Open
