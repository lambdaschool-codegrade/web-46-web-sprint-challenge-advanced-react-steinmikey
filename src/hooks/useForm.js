import { useState } from "react";

const useForm = (key, initialFormValues) => {
  const [values, setValues] = useState(() => {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    } else {
      localStorage.setItem(key, JSON.stringify(initialFormValues));
      return initialFormValues;
    }
  });
  const setStoredValues = (value) => {
    setValues(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [values, setStoredValues];
};

export default useForm;
