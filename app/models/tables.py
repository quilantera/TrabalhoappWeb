from app import db

class User(db.Model):
    __tablename__ = "users"
    
    id  = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True)
    password = db.Column(db.String)
    email= db.Column(db.String, unique= True)

    def __init__(self,username,passowrd,email):
        self.username = username
        self.password = passowrd
        self.email = email

    def __repr__(self):
        return "<User %r>" % self.username
        
class Product(db.Model):
    __tablename__ ="products"
    
    id = db.Column(db.Integer,primary_key=True)
    name= db.Column(db.String)
    category=db.Column(db.String)
    image= db.Column(db.String)
    price= db.Column(db.Float)

    def __init__(self,id,name,category,price):
        self.id=id
        self.name=name
        self.category=category
        self.price=price

    def __repr__(self):
        return "< Product %r>" % self.name 

class Shops(db.Model):
    __tablename__="shops"
    id = db.Column(db.Integer,primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('users.id'))
    id_product = db.Column(db.Integer, db.ForeignKey('products.id'))
    #user=db.relationship('User',foreign_keys= id_user)
    #shoper=db.relationship('User',foreign_keys=id_product)