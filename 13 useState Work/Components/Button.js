
function Button({ImageUrl, ButtonName , ClickHandler}) {
  return (
    <button onClick={ClickHandler} title={ButtonName}>
      <img src={ImageUrl} alt={ButtonName}/>
    </button>
  )
}

export default Button
