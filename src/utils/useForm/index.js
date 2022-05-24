import {useState} from 'react';

export const useForm = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [
    value,
    (formType, formValue) => {
      return setValue({...value, [formType]: formValue});
    },
  ];
};
