const BUTTON = DigitalPin.P1
const PIR = DigitalPin.P2
const LED = DigitalPin.P13
const BUZZER = AnalogPin.P0

basic.forever(function () {
    const trigger = programmingmb.buttonPressed(BUTTON) || programmingmb.pirMotionDetected(PIR)

    if (trigger) {
        programmingmb.ledOn(LED)
        programmingmb.buzzerOn(BUZZER)
    } else {
        programmingmb.ledOff(LED)
        programmingmb.buzzerOff(<DigitalPin><number>BUZZER)
    }

    basic.pause(25)
})
