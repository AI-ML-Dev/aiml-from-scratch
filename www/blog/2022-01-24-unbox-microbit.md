---
slug: unbox-microbit
title: Micro:bit Machines!
authors: [aj, nitya]
tags: [general]
---

## What is the Micro:Bit?

According to [Wikipedia](https://en.wikipedia.org/wiki/Micro_Bit) the `micro:bit` (or BBC Micro Bit) is _an open-source hardware ARM-based embedded system designed by the BBC for use in computer education in the United Kingdom_. 

### Micro:Bit - v2 

The [v2](https://en.wikipedia.org/wiki/Micro_Bit#v2) was released in Oct 2020 - marking a turning point in both the hardware support available, and the strong ecosystem of tools, languages and curriculum that exist for programming applications using it.

![Micro:Bit v2](/img/microbit-v2.jpeg)

 The v2 board contains the following hardware components:
 * A 16 MHz 32-bit ARM Cortex-M0 microcontroller, USB 2.0
 * A 5x5 pixel display (made with 25 LEDs)
 * Sensors - 3-axis accelerometer, 3-axis magnetometer, touch, temperature
 * Inputs - 3 push buttons (2 for apps, 1 for reset)
 * Audio - magnetic speaker, microphone (with built-in LED indicator)
 * 2.4 GHz Bluetooth networking.

### Coding Environments

The default coding environments supported are:
 * [Microsoft MakeCode](https://microbit.org/code/#microsoft-makecode) - block-based
 * [Python Editor](https://microbit.org/code/#python) - text-based
 * [MIT Scratch](https://microbit.org/code/#scratch) - block-based
 * [Android/iOS Apps](https://microbit.org/get-started/user-guide/mobile/#makecode-apps) - MakeCode programs over Bluetooth
 * [Swift Playground](https://microbit.org/get-started/user-guide/mobile/#swift-playgrounds) - interactive book, Mac/iPad

But there are also a number of [community-supported editors](https://microbit.org/code/#other-editors) to explore - including [MIT AppInventor](http://appinventor.mit.edu/), a platform for building Android and iPhone apps - which supports [micro:bit extensions](http://iot.appinventor.mit.edu/#/microbit/microbitintro) to enable mobile app interactions with the micro:bit.

Code can be downloaded (flashed) onto the device over the physical USB connection, or over Bluetooth (from mobile devices). On compliant browsers (e.g., Chrome and Edge on desktop) you can transfer code directly from the coding environment over [Web USB](https://microbit.org/get-started/user-guide/web-usb/) making the develop-deploy experience incredibly easy - especially for kids.

### Coding Languages

The most popular tutorials use block-based environments (MakeCode or Scratch) and we already know you can code with Python or Swift. But it turns out there are a number of [other programming languages](https://en.wikipedia.org/wiki/Micro_Bit#Software) you can use - including C++, Rust, and BASIC.


### Unboxing micro:bit v2

To get started I got [this basic micro:bit v2 bundle](https://www.amazon.com/Vilros-BBC-Micro-Basic-Starter/dp/B08WR4X7P9/) from Amazon. Unboxed, you can see it contains the microcontroller board, a battery holder, a protective case, a USB2.0 cable - and some crocodile clips.

![Microbit-v2](/img/microbit-unboxed.jpg)

This was sufficient to get us started with the basic ["Flashing Hearts"](https://makecode.microbit.org/) tutorial - and validate that the board was in fact working as advertised. `Bonus:` we used webUSB for all our downloads - and it was beautiful!!

That was it for today. Tomorrow, we do this all over again - this time with [Scratch](https://scratch.mit.edu/microbit) - so we can learn how to work with both these block-based coding environments before we move on to text editors and more features.