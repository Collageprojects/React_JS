function AppleBasket({AppleCount , BasketName}) {
  return (
    <div>
      <h1>
        <span>{AppleCount}</span> apples</h1>
        <p>{BasketName} {AppleCount===10 && '(Full)'} {AppleCount===0 && '(Empty)'}</p>
      
    </div>
  )
}

export default AppleBasket

