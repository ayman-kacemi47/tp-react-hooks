import React, { useEffect, useState } from 'react'

export default function useDebounce(searchTerm, delay=500) {
  console.log('getted ', searchTerm);
    const [debouncedValue, setDebouncedValue] = useState('');
  useEffect(()=>{
    const timeout = setTimeout(()=>{
        setDebouncedValue(searchTerm)
    },delay);

    return ()=>clearTimeout(timeout);
  },[searchTerm, delay]); //every time the valuue or delay are changed
  console.log("returnin : ", debouncedValue);
  return debouncedValue;
}
