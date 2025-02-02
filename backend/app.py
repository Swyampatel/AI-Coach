from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import get_career_advice

app = Flask(__name__)
CORS(app)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message", "")
    response = get_career_advice(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
