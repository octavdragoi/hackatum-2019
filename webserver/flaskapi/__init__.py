import json
from flask import Flask, jsonify, request, render_template

app = Flask(__name__, template_folder = "../webserver/dist/")

@app.route('/', methods=['GET'])
def index():
    return render_template("index.html", token="my_secret_token")

@app.route("/test", methods=["GET"])
def catch_all():
    return jsonify("Valid Endpoint"), 200
