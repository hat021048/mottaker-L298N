radio.onReceivedValue(function (name, value) {
    if (name == "X") {
        X = value
    } else if (name == "Y") {
        Y = value
    }
})
let Y = 0
let X = 0
radio.setGroup(9)
X = 0
Y = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (X > 512) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, X - 512)
    } else if (X < 508) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, 508 - X)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
    if (Y > 512) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, Y - 512)
    } else if (Y < 508) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, 508 - Y)
    } else {
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
