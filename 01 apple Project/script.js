const firstBasket = document.querySelector(".basket-1 span")
const secondBasket = document.querySelector(".basket-2 span")
const RightArrow = document.querySelector(".rightImg")
const LeftArrow = document.querySelector(".leftImg")

let totalNumberOfApples = 5
let SecondBasketApplesCount = 0
let firstBasketApplesCount = totalNumberOfApples - SecondBasketApplesCount

firstBasket.innerText = totalNumberOfApples
secondBasket.innerText = SecondBasketApplesCount

RightArrow.addEventListener("click", () => {
    if (firstBasketApplesCount > 0) {
        firstBasketApplesCount--
        firstBasket.innerText = firstBasketApplesCount
        SecondBasketApplesCount++
        secondBasket.innerText = SecondBasketApplesCount
    } else {
        alert("Your Basket-1 Empty")
    }
});

LeftArrow.addEventListener('click', () => {
    if (SecondBasketApplesCount == 0) {
        alert("Your Basket-2 Empty")
    } else if (SecondBasketApplesCount > 0) {
        SecondBasketApplesCount--
        secondBasket.innerText = SecondBasketApplesCount
        firstBasketApplesCount++
        firstBasket.innerText = firstBasketApplesCount
    }
})