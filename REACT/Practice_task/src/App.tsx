import React, { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import Input from "./Components/Input/Input";

export interface Product {
  id: number;
  brand: string;
}

const App = () => {
  const [posts, setPosts] = useState<Product[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setPosts(data.products));
  }, []);


  const filteredData= posts.filter((item)=>item.brand.toLowerCase().includes(input.trim().toLowerCase()))

  console.log(input);
  

  return (
    <>
      <Input value={setInput}/>
      {posts.map((item) => (
        <Card key={item.id} brand={item.brand} />
      ))}

    </>
  );
};

export default App;
