import React from "react";

import {isArrayEmpty} from './Utils'; 
import BlogCard from "./BlogCard";
import "./App.css";

function App() {
  const loremLocal =
    "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor";
  const blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      description: loremLocal,
    },
    {
      id: 2,
      title: "Blog Title 2",
      description: loremLocal,
    },
    {
      id: 3,
      title: "Blog Title 3",
      description: loremLocal,
    },
  ];

  const blogCards =  isArrayEmpty(blogArr) ? [] : blogArr.map((item, pos) => {
    return (
      <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} id={item.id}/>
    );
  });

  return <div className="App">{blogCards}</div>;
}

export default App;
