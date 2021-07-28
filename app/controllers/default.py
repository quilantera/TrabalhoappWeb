from app import app
from flask import Flask, render_template, request

@app.route('/index')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/cadastro', methods = ['GET', 'POST'])
def cadastro():
    return render_template('cadastro.html')
@app.route('/result')
def result():
        
        
    return render_template ('result.html', result = result )

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/produtos')
def produtos():
    return render_template('produtos.html')
@app.route('/pagamento')
def pagamentos():
    return render_template('pagamento.html')
