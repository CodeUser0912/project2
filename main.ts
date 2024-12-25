input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showArrow(ArrowNames.North)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
basic.showIcon(IconNames.Heart)
