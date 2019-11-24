import numpy as np
import subprocess
from flask import render_template, Blueprint, jsonify
from . import com

app_blueprint = Blueprint('app',__name__)
# inst_com = com.Com()
inst_com = None

@app_blueprint.route('/')
@app_blueprint.route('/app')
def index():
	if inst_com is not None:
		inst_com.arduino.flushInput()
		inst_com.arduino.flushOutput()
	return render_template("index.html")

@app_blueprint.route('/api')
def api():
	inst_com.read_vals()
	return jsonify({
		'gyro' : inst_com.get_rotation(), 
		'accel' : inst_com.get_accel()})

@app_blueprint.route('/api_hack')
def api_hack():
	line = subprocess.check_output(['tail', '-1', 'templates/apps/data.txt']).decode('utf-8')
	vals = [float(x) for x in line.strip().split(",")]
	vals_dict = {"x": vals[0], "y" : vals[1], "z" : vals[2]}
	vals_dict["plt"] = -min((np.abs(vals_dict["z"]) + np.abs(vals_dict["y"])), 90) + 5
	return jsonify({'gyro' : vals_dict, 'accel' : vals_dict})

