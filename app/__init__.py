from flask import Flask
from flask import jsonify
from app.db import db
from app.ma import ma
from marshmallow import ValidationError
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///storage.db'
app.config['PROPAGATE_EXCEPTIONS'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
@app.before_first_request
def create_tables():
    db.create_all()

from app.controllers import default



