import React, { useState } from "react";

export default ({data}) => {
  const [display, setDisplay] = useState(0);
 
  return (
    <div className='screen'>
    {data}
    </div>
  ); 
};