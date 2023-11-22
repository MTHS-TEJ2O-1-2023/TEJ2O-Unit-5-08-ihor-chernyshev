/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program make a 28BYJ-48 DC 5V stepper motor move
*/

// variables
let distance = 0

// setup
basic.showIcon(IconNames.Heart)

// loop forever
while (true) {
    if (input.buttonIsPressed(Button.A) == true) {
        distance = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
        while (distance <= 10) {
            // move car forwards and backwards
            basic.showNumber(distance)
            robotbit.StpCarMove(1,1)
            basic.pause(500)
            basic.showIcon(IconNames.Yes)
            distance = sonar.ping(
                DigitalPin.P1,
                DigitalPin.P2,
                PingUnit.Centimeters
            )
        }
    }
}
