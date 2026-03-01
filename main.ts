/**
 * Programming Merit Badge extension (digital-only).
 * Inputs: Button, PIR
 * Outputs: LED, Buzzer
 */
//% color="#0078D7" icon="\uf11b" block="Programming MB" weight=90
namespace programmingmb {
    /** Read button state from a digital pin (true when HIGH). */
    //% blockId=programmingmb_button_pressed block="button on %pin is pressed"
    //% group="Inputs" weight=100
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    /** Read PIR motion state from a digital pin (true when HIGH). */
    //% blockId=programmingmb_pir_motion block="PIR on %pin detects motion"
    //% group="Inputs" weight=90
    export function pirMotionDetected(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    /** Turn LED output ON. */
    //% blockId=programmingmb_led_on block="LED on %pin ON"
    //% group="Outputs" weight=80
    export function ledOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /** Turn LED output OFF. */
    //% blockId=programmingmb_led_off block="LED on %pin OFF"
    //% group="Outputs" weight=70
    export function ledOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }

    /** Turn buzzer ON (digital HIGH). */
    //% blockId=programmingmb_buzzer_on block="buzzer on %pin ON"
    //% group="Outputs" weight=60
    export function buzzerOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 1)
    }

    /** Turn buzzer OFF (digital LOW). */
    //% blockId=programmingmb_buzzer_off block="buzzer on %pin OFF"
    //% group="Outputs" weight=50
    export function buzzerOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin, 0)
    }
}
