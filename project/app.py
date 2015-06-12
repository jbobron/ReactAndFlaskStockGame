from flask import Flask, render_template, request
import apiRequests

app = Flask(__name__)


@app.route('/', methods=['GET','POST'])
def index():
    if request.method == 'GET':
      return render_template('index.html')
    else:
      ticker = request.form['ticker']
      #make request to api
      #clean data
      #send back in rerender
      return render_template('index.html', data=data)


@app.route('/hello')
def hello():
    return render_template('hello.html')


if __name__ == '__main__':
    app.run(debug=True)
