/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program make a 28BYJ-48 DC 5V stepper motor move
*/

// variables
let distance = 11

// setup
basic.showIcon(IconNames.Heart)

// loop forever
while (true) {
  if (input.buttonIsPressed(Button.A) == true) {
    while (true) {
      if (distance >= 10) {
        // move car forwards and backwards
        basic.showIcon(IconNames.Happy)
        robotbit.StpCarMove(0.1, 1)
        distance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
      }
      else {
        basic.showIcon(IconNames.Sad)
        robotbit.StpCarTurn
      }
    }
  }
}
