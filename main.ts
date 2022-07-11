input.onButtonPressed(Button.A, function () {
    led.unplot(ppx, ppy)
    ppx = ppx - 1
    led.plot(ppx, ppy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(ss)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    led.unplot(ppx, ppy)
    ppx = ppx + 1
    led.plot(ppx, ppy)
})
let ggy = 0
let ss = 0
let ppy = 0
let ppx = 0
let ggx = randint(0, 4)
ppx = 2
ppy = 4
ss = 0
basic.showIcon(IconNames.Happy)
basic.clearScreen()
led.plot(ppx, ppy)
basic.forever(function () {
    led.unplot(ggx, ggy)
    if (ggy > 3) {
        if (ppx == ggx) {
            ss = ss + 1
        }
        ggx = randint(0, 4)
        ggy = 0
        led.plot(ppx, ppy)
    } else {
        ggy = ggy + 1
    }
    led.plotBrightness(ggx, ggy, 64)
    basic.pause(500)
})
