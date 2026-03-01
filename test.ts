const BUTTON = ProgrammingMB.DigitalPin.P1
const PIR = ProgrammingMB.DigitalPin.P2
const LED = ProgrammingMB.DigitalPin.P13
const BUZZER = ProgrammingMB.DigitalPin.P0

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
