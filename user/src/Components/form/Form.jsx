import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import axios from "axios";
const Form = () => {
  const [postData, setPostData] = useState({
    
    title: "",
    selectedFile: "",
  });
 
  const classes = useStyles();
  
 const handlesubmit=(e)=>{
    e.preventDefault();
//  axios.post(`http://localhost:5000/posts`)
//  postData
axios
  .post("http://localhost:5000/posts", {
    ...postData
  })
  .then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
 }
 
  

  
  
   
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handlesubmit}
      >
        <Typography variant="h6"></Typography>

        <TextField
          name="title"
          varient="outlined"
          fullWidth
          label="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
