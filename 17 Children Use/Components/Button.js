
function Button({ImageUrl, ClickHandler , children}) {
  return (
    <button onClick={ClickHandler} title={children}>
      {children}
      <img src={ImageUrl} alt={children}/>
    </button>
  )
}

export default Button
