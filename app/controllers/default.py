

from werkzeug.wrappers import UserAgentMixin
from app import app,db
from flask import Flask, render_template, request, flash, redirect, url_for,session
from app.models.tables import User
from app.models.tables import Product, Shops
from flask_sqlalchemy import SQLAlchemy

global username
username=""
@app.route('/index')
@app.route('/')
def index():
    user=""
    if "username" in session:
        username = session["username"]
        return render_template('index.html',username=username)
    q= request.args.get('search')
    if q:
        myProduct=Product.query.filter(Product.category.contains(q)|Product.name.contains(q))
        return render_template('produtos.html',myProduct=myProduct)
    else:
        prod =Product.query.all()
    username=user 
    return render_template('index.html',username=username)



@app.route('/cadastro/<info>')
@app.route('/cadastro',methods = ['GET', 'POST'])
def cadastro():
    q= request.args.get('search')
    if q:
        myProduct=Product.query.filter(Product.category.contains(q)|Product.name.contains(q))
        return redirect(url_for('produtos',myProduct=myProduct,username=""))
    
    if request.method=='POST':
        username=request.form["user"]
        password=request.form["password"]
        cpassword=request.form["confirm-password"]
        if(cpassword==password):
            email=request.form["email"]
            u =User(username,password,email)
            db.session.add(u)
            db.session.commit()
        else:
            flash('as duas senhas nao se conhecidem')
           
    return render_template('cadastro.html',username='')



@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method=='POST'and request.form['user'] !=''and request.form['password'] !='':
        user=request.form["user"]
        passw=request.form["password"]
        myUser= User.query.filter_by(username=user,password=passw).first_or_404(description='There is no data with ')
        session['username']=user
        return redirect(url_for('index',username=user))
    return render_template('login.html',username='')
@app.route('/logout')
def logout():
    session.pop('username', "")
    return redirect(url_for('index'))
@app.route('/produtos')
def produtos():
    p= request.args.get('id')
    if p:
        if "username" in session:
            username = session["username"]
            id_user= User.query.filter_by(username=username)
            id_product=Product.query.filter_by(id=p)
            s =Shops(id_user.id,id_product.id)
            db.session.add(s)
            db.session.commit()
        else :
            return redirect(url_for('login',username=''))
    q= request.args.get('search')
    if q:
        myProduct=Product.query.filter(Product.category.contains(q)|Product.name.contains(q))
        if "username" in session:
            username = session["username"]
            return render_template('produtos.html',myProduct=myProduct,username=username)
        return render_template('produtos.html',myProduct=myProduct,username='')
    
    myProduct= Product.query.all()
    if "username" in session:
            username = session["username"]
            return render_template('produtos.html',myProduct=myProduct,username=username)
    return render_template('produtos.html', myProduct=myProduct,username='')
@app.route('/pagamento')
def pagamentos():
    if "username" in session:
        username = session["username"]
        return render_template('pagamento.html',username=username)
    return render_template('pagamento.html',username='')

