const BUTTON = DigitalPin.P1
const PIR = DigitalPin.P2
const LED = DigitalPin.P13
const BUZZER = DigitalPin.P0

basic.forever(function () {
    const trigger = ProgrammingMB.buttonPressed(BUTTON) || ProgrammingMB.pirMotionDetected(PIR)

    if (trigger) {
        ProgrammingMB.ledOn(LED)
        ProgrammingMB.buzzerOn(BUZZER)
    } else {
        ProgrammingMB.ledOff(LED)
        ProgrammingMB.buzzerOff(BUZZER)
    }

    basic.pause(25)
})
