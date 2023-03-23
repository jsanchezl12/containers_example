from flask import Flask

app = Flask(__name__)
app_context = app.app_context()
app_context.push()

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == "__main__":
    HOST = '0.0.0.0'
    PORT = 3008
    app.run(HOST, PORT, debug=True) 