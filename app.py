from flask import Flask, render_template, request

app = Flask(__name__,
            static_url_path="",
            static_folder="static",
            template_folder="templates")

@app.route("/")
def editor():
    return render_template("index.html")

@app.route("/", methods=["POST"])
def handle_post():
    content = request.get_json()
    if content is None:
        return { "ok": False }

    text = content["text"]
    print(text)

    return { "ok": True }
