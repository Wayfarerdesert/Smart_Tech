import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  function setValue(value) {
    if (typeof value === 'function') {
      localStorage.setItem(key, JSON.stringify(value(initialValue)));
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  const storedValue = JSON.parse(localStorage.getItem(key)) || initialValue;

  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === 'function' ? storedValue(storedValue) : storedValue;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
