from app.db import db
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
    def json(self,):
        return{
            'username' : self.username,
            'password' : self.password,
            'email'    : self.email
            }
    @classmethod
    def find_by_user(cls, username):
        return cls.query.filter_by(username=username).first()
    @classmethod
    def find_by_user(cls, password):
        return cls.query.filter_by(password=password).first()
    @classmethod
    def find_by_user(cls, email):
        return cls.query.filter_by(email=email).first()
    @classmethod
    def find_by_user(cls):
        return cls.query.all()


    def save_to_db(self, ):
        db.session.add(self)
        db.session.commit()
    def delete_to_db(self, ):
        db.session.delete(self)
        db.session.commit()
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