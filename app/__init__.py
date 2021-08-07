import sqlalchemy
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_script import Manager
from flask_migrate import Migrate

app = Flask(__name__)
app.secret_key = "super secret key"
db= SQLAlchemy(app)
app.config.from_object('config')
migrate = Migrate(app, db)

manager = Manager(app)

from app.models import tables
from app.controllers import default



