from flask import Flask,render_template, Response, json

app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/list/<id>')
def lists(id):
    data = {
        "list_id" : 1,
        "list_items" : [
            {"id": 1,
             "text" : "list item",
             "location" : 1,
             "status" : 0},
            {"id": 2,
             "text": "list item2",
             "location": 2,
             "status": 0},
        ],
        "listname" : "My List"
    }

    resp = Response(json.dumps(data), status=200, mimetype="application/json")

    return resp


if __name__ == '__main__':
    app.run()
