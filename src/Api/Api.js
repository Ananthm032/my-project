import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      console.log(res);

      const data = await res.json();
     
      setData(data.splice(0, 1));
    })();
  }, []);


  return (
    <div>
    
        {data.map((item) => {
          return<p key={item.id}>{item.name}</p> 
        })}
    
    </div>
  );
};export default Api