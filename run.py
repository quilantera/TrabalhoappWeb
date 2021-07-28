from app import app
from app.db import db
from app.ma import ma
if __name__ == '__main__':
    db.init_app(app)
    ma.init_app(app)
    app.run ( debug = True )
