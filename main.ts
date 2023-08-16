input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showLeds(`
    # # # # .
    # # . . .
    # . # . .
    # . . # .
    . . . . #
    `)
led.plot(0, 0)
led.unplot(0, 0)
basic.showString("Hello!")
