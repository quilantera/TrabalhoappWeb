from app import app
from flask import Flask, render_template, request
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/result', methods = ['POST', 'GET'])
def result():
    if request.method == 'POST':
        result = request.form
    return render_template ('result.html', result = result )
