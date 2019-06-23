import { useState } from "react";

export default (defaultValue, isEnterAsSubmit = false) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };

  if (!isEnterAsSubmit) {
    return { value, onChange };
  } else {
    return { value, onChange, setValue };
  }
};
