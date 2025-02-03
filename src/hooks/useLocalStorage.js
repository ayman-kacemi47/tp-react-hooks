import React from 'react'

export default function useLocalStorage(key) {
    const setItem=(value)=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    const getItem=()=>{
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : null; 
    }

    return {setItem, getItem};
}
