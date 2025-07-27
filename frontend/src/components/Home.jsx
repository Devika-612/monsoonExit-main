//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/get")
    .then((res) => {
      setblogs(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const delblog = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3001/${id}`)
    .then((res)=> {
      console.log(res)
      alert(res.data)
      window.location.reload();
    })
    .catch((error)=> {
      console.log(error);
    })
  };

  const updateblog = (blog) => {
    console.log("Blog", blog);
    navigate('/add', {state: blog})
  };

  return (
    <div style={{padding: "20px"}}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}
      >
        <br /><br />
        {blogs.map((blog) => 
      <Card key={blog._id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={blog.img_url}
        alt={blog.title}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div" style={{textAlign:'left'}}>
        {blog.title}
        </Typography>
        <Typography variant="h5" sx={{ color:'black'}}>
         {blog.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        size="small" 
        variant='contained' 
        color="secondary" 
        style={{color:'white'}} 
        onClick={()=>{delblog(blog._id)}}>
          DELETE
        </Button>
        <Button 
        size="small" 
        variant='contained' 
        color="secondary" 
        style={{color:'white'}}
        onClick={()=>{updateblog(blog)}}>
          UPDATE
          </Button>
      </CardActions>
    </Card> 
    )}
    </div>
    </div>
  )
}

export default Home


//Write your code here