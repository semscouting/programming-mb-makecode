/**
 * Programming Merit Badge extension (digital-only).
 *
 * Scope is intentionally limited to four components:
 * Inputs: Button, PIR
 * Outputs: LED, Buzzer
 */

//% color=#0078D7 weight=100 icon="\uf11b"
namespace ProgrammingMB {
    /**
     * Digital pin used by a component.
     */
    export enum DigitalPin {
        //% block="P0"
        P0 = 0,
        //% block="P1"
        P1 = 1,
        //% block="P2"
        P2 = 2,
        //% block="P8"
        P8 = 8,
        //% block="P12"
        P12 = 12,
        //% block="P13"
        P13 = 13,
        //% block="P14"
        P14 = 14,
        //% block="P15"
        P15 = 15,
        //% block="P16"
        P16 = 16
    }

    /** Read button state from a digital pin. */
    //% block="button on %pin is pressed"
    //% group="Inputs"
    export function buttonPressed(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin as number) == 1
    }

    /** Read PIR motion state from a digital pin. */
    //% block="PIR on %pin detects motion"
    //% group="Inputs"
    export function pirMotionDetected(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin as number) == 1
    }

    /** Turn LED output ON. */
    //% block="LED on %pin ON"
    //% group="Outputs"
    export function ledOn(pin: DigitalPin): void {
        pins.digitalWritePin(pin as number, 1)
    }

    /** Turn LED output OFF. */
    //% block="LED on %pin OFF"
    //% group="Outputs"
    export function ledOff(pin: DigitalPin): void {
        pins.digitalWritePin(pin as number, 0)
    }

    /** Turn buzzer output ON with a fixed tone. */
    //% block="buzzer on %pin ON"
    //% group="Outputs"
    export function buzzerOn(pin: DigitalPin): void {
        pins.analogSetPitchPin(pin as number)
        music.ringTone(1000)
    }

    /** Turn buzzer output OFF (silent). */
    //% block="buzzer on %pin OFF"
    //% group="Outputs"
    export function buzzerOff(pin: DigitalPin): void {
        music.stopAllSounds()
        pins.digitalWritePin(pin as number, 0)
    }
}
