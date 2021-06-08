from app import db
class User(db.Model):
    __tablename__ = "users"
    
    id  = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unrique=True)
    password = db.Column(db.String)
    name = db.Column(db.String)
    email= db.Column(db.String, unrique= True)

    def __init__(self,username,passowrd,name,email):
        self.username = username
        self.password = passowrd
        self.email = email
        self.name = name

    def __repr__(self):
        return "<User %r>" % self.username


class Product(db.Model):
    __tablename__ ="products"
    id = db.Column(db.Integer,primary_key=True)
    name= db.Column(db.String)
    price= db.Column(db.Float)

    def __init__(self,id,name,price):
        self.id=id
        self.name=name
        self.price=price

    def __repr__(self):
        return "< Product %r>" % self.name 

class Shops(db.Model):
    __tablename__="shops"
    id = db.Column(db.Integer,primary_key=True)
    id_user = db.Column(db.Integer, db.ForeingKey('users.id'))
    id_product = db.Column(db.Integer, db.ForeingKey('products.id'))
    
    user=db.relationship('User',foreign_keys= id_user)
    shoper=db.relationship('User',foreign_keys=id_product)