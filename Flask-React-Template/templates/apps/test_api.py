import requests
from time import sleep
from com import Com

inst_com = Com()
inst_com.arduino.flushInput()
inst_com.arduino.flushOutput()
while True:
    inst_com.read_vals()
    vals = inst_com.get_rotation()
    with open("data.txt", "a") as f:
        f.write("{},{},{}\n".format(vals["x"], vals["y"], vals["z"]))
