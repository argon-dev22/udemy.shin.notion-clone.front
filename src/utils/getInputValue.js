export const getInputValue = (e, values) => {
  // input欄のvalueを取得する第3の方法
  const data = new FormData(e.target);

  const inputValues = {};
  // getの引数にはinputのname属性の値を渡す
  for (const key in values) {
    inputValues[key] = data.get(values[key]).trim();
  }
  return inputValues;
};
