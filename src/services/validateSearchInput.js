const validateMinCharactes = (text) => {
  const minCharactes = 2;

  return text.length < minCharactes;
};

export default validateMinCharactes;
