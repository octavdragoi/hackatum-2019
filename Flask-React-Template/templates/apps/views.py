from flask import render_template, Blueprint, jsonify
from . import com
app_blueprint = Blueprint('app',__name__)

@app_blueprint.route('/')
@app_blueprint.route('/app')
def index():
	return render_template("index.html")

@app_blueprint.route('/api')
def api():
	return jsonify({'xyz' : com.get_rotation(), 
					'accel' : com.get_accel()})