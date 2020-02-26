# -*- coding: utf-8 -*-
"""
Created on Thu Aug 17 13:25:46 2017

@author: glassbox
"""

"""Module importation"""
import serial

"""Opening of the serial port"""
# arduino = serial.Serial("/dev/cu.usbserial-A601WTJC",timeout=1,baudrate=9600)
# arduino = serial.Serial("/dev/cu.HC-05-DevB",timeout=1,baudrate=38400)
arduino = serial.Serial("/dev/rfcomm0",timeout=1,baudrate=38400)

"""Receiving data and storing it in a list"""
while True:
    try:
        print(arduino.readline())
    except Exception as e:
        print (e)
