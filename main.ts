let direccion = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonPressed(Button.B, function () {
    direccion = input.compassHeading()
    if (direccion >= 337 && direccion < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (direccion >= 23 && direccion < 68) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (direccion >= 68 && direccion < 113) {
        basic.showArrow(ArrowNames.East)
    } else {
    	
    }
})
basic.forever(function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.NorthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthEast)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.showArrow(ArrowNames.SouthWest)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
    basic.showArrow(ArrowNames.NorthWest)
    basic.pause(100)
})
