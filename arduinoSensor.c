#include <Servo.h>;

Servo servo;

int sensor;
int waiting=4;
int start = 3;
int done = 5;

void setup() {
    pinMode(start, OUTPUT);
    pinMode(waiting, OUTPUT);
    pinMode(done, OUTPUT);
    digitalWrite(waiting, HIGH);
    digitalWrite(start, LOW);
    digitalWrite(done, LOW);
    servo.attach(6);
    servo.write(0);
}

void loop() {
    sensor = analogRead(A0);
    if (sensor < 700) {
        servo.write(60);
        digitalWrite(waiting, LOW);
        digitalWrite(start, HIGH);
        delay(5000);
        servo.write(120);
        digitalWrite(done, HIGH);
        digitalWrite(start, LOW);
        delay(5000);
        servo.write(0);
        digitalWrite(done, LOW);
        digitalWrite(waiting, HIGH);
    }
    delay(100);
}