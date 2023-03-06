import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function QA(props) {
  return (
    <div><p style={{padding:10 }}>Q&A</p>
    <p style={{padding:10 }}><br/> If you want to let the audience ask you questions without a designated Q&A slide</p>
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

 
</div>
      
      
  );
}

