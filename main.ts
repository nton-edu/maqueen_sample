maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
basic.pause(500)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 10)
})
