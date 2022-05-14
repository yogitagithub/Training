import React from 'react';
import { useState } from "react";

const Planets = () => {
    const[handle, setHandle] = useState([]);
    
    
        fetch('https://reqres.in/api/users?page=2')
           .then(resp =>
              resp.json()
          )
           .then(dt => {
               setHandle(dt.data)
          })
            return [handle];
            console.log(handle);
        }

export default Planets;