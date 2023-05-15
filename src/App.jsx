
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import BlogCard from './components/blogCards';

function App() {

  const [blogsList, setBlogsList] = useState([])
  const options = {
    method: 'GET',
    url: 'https://blogsapi.p.rapidapi.com/',
    params: {
      ordering: '-date_published'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'e1a46692e1mshaed5f5001e10d59p1f869cjsn5eee79dc9457',
      'X-RapidAPI-Host': 'blogsapi.p.rapidapi.com'
    }
  };
  useEffect(() => {
    axios.request(options).then(res => {
      setBlogsList(res.data.results)
    })
  }, [])

  return <main>
    {
      blogsList.map((e)=>{
        return <BlogCard key={e.id}  blog={e} /> 
      })
    }
    
  </main>
}

export default App;
