/**
 * Programming Merit Badge extension (digital-only).
 * Inputs: Button, PIR
 * Outputs: LED, Buzzer
 */
//% color="#0078D7" icon="\uf11b" block="Programming MB"
namespace programmingmb {
    /** Read button state from a digital pin (true when HIGH). */
    //% block="button on %pin is pressed"
    //% group="Inputs"
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    /** Read PIR motion state from a digital pin (true when HIGH). */
    //% block="PIR on %pin detects motion"
    //% group="Inputs"
    export function pirMotionDetected(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    /** Turn LED output ON. */
    //% block="LED on %pin ON"
    //% group="Outputs"
    export function ledOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /** Turn LED output OFF. */
    //% block="LED on %pin OFF"
    //% group="Outputs"
    export function ledOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    /** Turn buzzer ON (fixed tone). */
    //% block="buzzer on %pin ON"
    //% group="Outputs"
    export function buzzerOn(pin: AnalogPin): void {
        pins.analogSetPitchPin(pin)
        music.ringTone(1000)
    }

    /** Turn buzzer OFF (silent). */
    //% block="buzzer on %pin OFF"
    //% group="Outputs"
    export function buzzerOff(pin: DigitalPin): void {
        music.stopAllSounds()
        pins.digitalWritePin(pin, 0)
    }
}
