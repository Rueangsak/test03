import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';




export default function BasicTextFields(props) {
  // console.log("rank",props)

  const addItem=()=>{
    let newImgShow =  props.imgShow
    newImgShow.items.push({text:"",point:0})
    props.changdata(newImgShow)
  }

  const changItem=(newText,index)=>{
    let newImgShow =  props.imgShow
    newImgShow.items[index].text = newText
    props.changdata(newImgShow)
  }

  const deleteItem=(oldIndex)=>{
    let newImgShow =  props.imgShow
    newImgShow.items = newImgShow.items.filter((value, index)=>index!==oldIndex)
    props.changdata(newImgShow)
  }



  return (
    <div><p style={{padding:10 }}>Ranking</p>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="outlined-basic" label="Your question" variant="outlined" value={props.imgShow.tit} onChange={(e)=>props.changtit(e.target.value)} />

    </Box>
    <button style={{paddingRight:50}} onClick={()=>addItem()}>Add Item</button>
    
    {props.imgShow.items.map((data,index)=>{
        return(
          <div key={index}>
            <TextField label="Item" value={data.text} onChange={(e)=>changItem(e.target.value,index)} style={{padding:10}} />
            <button style={{marginTop:18}} onClick={()=>deleteItem(index)}>x</button>
          </div>
        )
      }
    )}

 
</div>
      
      
  );
}

