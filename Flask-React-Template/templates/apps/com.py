import serial
import numpy as np
import time

current_milli_time = lambda: int(round(time.time() * 1000))

class Com():
  def __init__(self, len_w = 2, width_w = 3, poll_time = 0):
    try:
      #self.arduino = serial.Serial("/dev/cu.usbserial-A601WTJC",timeout=1,baudrate=9600)
      self.arduino = serial.Serial("/dev/rfcomm0",timeout=1,baudrate=38400)
      # see how at https://wiki.archlinux.org/index.php/Bluetooth
      self.arduino.flushInput()
      self.arduino.flushOutput()
    except:
      print('Please check the port')

    self.len_w = len_w
    self.width_w = width_w
    self.means = np.zeros(width_w)
    self.vals = []
    self.curr_time = 0
    self.poll_time = poll_time
    self.ctr = 0

  def read_vals(self):
    # check 50 milis
    curr_time = current_milli_time()
    if not self.arduino.inWaiting():
      if self.ctr < 10:
        print (self.ctr)
        self.ctr = self.ctr+1
        return

    if curr_time - self.curr_time < self.poll_time:
      return

    try:
      #newvals = [40.2 + np.random.randn(), 2.3, 3.4]
      newread = self.arduino.readline()
      newvals = newread.strip().decode('utf-8').split('|')
      print (newread)
    except serial.SerialException as e:
      print (e)
      return

    if len(newvals) != self.width_w:
      print ("wrong length {} vs {}".format(len(newvals), self.width_w))
      return

    try:
      newvals = np.array([float(x) for x in newvals])
    except ValueError as e:
      print (str(e))
      return 

    # validate
    if np.any((np.abs(newvals) > 180)[0:3]) or (np.any((np.abs(newvals - self.means) > 400)[0:3]) \
        and curr_time - self.curr_time < 500):
      return

    self.curr_time = curr_time
    self.vals.append(newvals)
    if len(self.vals) > self.len_w:
      self.vals = self.vals[1:]
    self.means = sum(self.vals)/self.len_w

  def get_rotation(self):
    return {"x": self.means[0], "y": self.means[1], "z": self.means[2]}

  def get_accel(self):
    return {"x": self.means[0], "y": self.means[1], "z": self.means[2]}
