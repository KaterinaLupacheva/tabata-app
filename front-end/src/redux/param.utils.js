export const createArray = data => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    result.push({
      id: i,
      value: `option${i + 1}`,
      name: data[i],
      isPressed: i === 0 ? true : false,
    });
  }
  return result;
};

export const changePressed = (options, pressedOption) => {
  const option = pressedOption[pressedOption.length - 1];
  options.forEach(el => (el.isPressed = false));
  options[option - 1].isPressed = true;
  return options;
};

export const findPressedOption = options => {
  return options.find(option => option.isPressed === true).name;
};

export const setPressed = data => {
  return data[0];
};
