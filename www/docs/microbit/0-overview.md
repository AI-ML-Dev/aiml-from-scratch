---
title: "Setup: Hardware"
sidebar_position: 1
---

> `Objective:` Buy the hardware and check that it works. Explore accessories or kits that extend the capabilities beyond the basics.

---

## 1. Buy Hardware

 * The Microbit.org site has [multiple supplier options](https://microbit.org/buy/) - most are out of stock!
 * We chose to buy [this micro:bit v2](https://www.amazon.com/Vilros-BBC-Micro-Basic-Starter/dp/B08WR4X7P9/) on Amazon Prime for immediate use.
 * Adafruit's [micro:bit v2 Go Bundle](https://www.adafruit.com/product/4834) is the best option in the long run. It is often backordered but you get ask to be alerted when in stock.

We wrote [this post](/blog/unbox-microbit) on what the basic kit contains. The board has built-in sensors for motion detection, compass, touch, temperature, and audio (speaker, mic) - plus 3 push buttons (2 for apps, 1 for reset). This is enough for quite a few starting projects.

![Microbit-v2](/img/microbit.svg)

---

## 2. Buy Extension Kits

We also invested in a couple of kits (below) - also purchased from Amazon. These are absolutely optional - but think it's a  good investment to explore more advanced real-world projects using electronics and AI.

 * [micro:bit Starter Kit](https://www.amazon.com/Elecfreaks-Microbit-Starter-Accessories-Electronics/dp/B0822LXMV8/ref=sr_1_2_sspa) - this provides a number of electronics circuit components - including temperature sensors, servo motoros, buzzers, LEDs etc. - that can be interfaced to the micro:bit to explore interesting maker projects.

 * [micro:bit Smart Cutebot](https://www.amazon.com/Elecfreaks-Microbit-Smart-Cutebot-Micro/dp/B081ZSCZTV/ref=sr_1_1) - an _intelligent  coding car_ with crashproof body, ultrasonic sensor, infrared controls, RGB headlights, buzzer, line-tracking probes and dual high-speed motors. Program it for distance tracking, obstacle avoidance, line following, wireless controls, lighting displays etc.

![Microbit Kits](/img/microbit-kits.jpeg)

We'll unbox these kits in future sections. One possible target is the MIT-created [How To Train Your Robot Curriculum](https://httyr.media.mit.edu/) that helps middle school students explore _machine learning and ethics_ through hands-on activities.

## 3. Test Hardware

Next, validate that the board and sensors are functioning, and that you have the latest firmware to use relevant features.  Here's what the basic micro:bit v2 bundle gives us. 

![Microbit-v2](/img/microbit-unboxed.jpg)

The _Get Started_ guide (top middle) provides actions you can take to test these capabilities. The first few actions don't need a computer - and the display (once powered up) will prompt you to take each action in this sequence:

 1. `Power it on` = Device boots up.   
    - Displays `H-E-L-L-0` scroll text with a smiley-face = validates LEDs.
    - Plays distinctive tones = validates speaker.
 2. `A<-` then `B->` = Prompts you to press input buttons (in sequence)
    - Tests left and right input buttons
    - Plays unique tone as success indicator
 3. `Shake` = Prompt that tests accelerometer (motion) is operational. 
 4. `Tilt` = Prompt that tests magnetometer (orientation) is operational. 
 1. `Clap 5X` =  Prompt that tests microphone is operational. Feedback is in the form of `1-2-3-4-5` count on display, counting up per clap.

At this point you are ready to try coding. 

## 4. Check Firmware

Connect the board to a laptop over the provided USB 2.0 cable - test if connection is successful and determine current firmware version:

 1. Look for `MICROBIT` folder on desktop => validates USB connection.
 2. Browse `DETAILS.TXT` in folder => 'Interface Version' reflects firmware

For example, this is what I see on my micro:bit.

```
Interface Version: 0256
Bootloader Version: 0256
```
Check [this page](https://www.microbit.org/get-started/user-guide/firmware/) for latest firmware version available - if that is newer than this number, download the .hex file and drag it to the `MICROBIT` folder to update your micro:bit. Suprisingly, the official firmware release is `255` so I'm fine.

> WE ARE NOW READY TO WRITE SOME CODE!
