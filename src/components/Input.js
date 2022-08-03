function Input({ handleChange }) {
  let timeout;

  const writing = (e) => {
    //faire ma logique de timeout pour vérifier qu'il arrete de taper
    //si il arrete de taper, j'appelle handleChange(e)
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      handleChange(e);
    }, 300);
  };
  return <input name="search" onChange={writing} type="search" />;
}

export default Input;
