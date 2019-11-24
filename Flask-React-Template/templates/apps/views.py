from flask import render_template, Blueprint, jsonify
from . import com

app_blueprint = Blueprint('app',__name__)
inst_com = com.Com()

@app_blueprint.route('/')
@app_blueprint.route('/app')
def index():
	#inst_com.arduino.flushInput()
	#inst_com.arduino.flushOutput()
	return render_template("index.html")

@app_blueprint.route('/api')
def api():
	inst_com.read_vals()
	return jsonify({
		'gyro' : inst_com.get_rotation(), 
		'accel' : inst_com.get_accel()})
