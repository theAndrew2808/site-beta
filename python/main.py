from flask import Flask, request
import requests

app = Flask(__name__)

@app.route('/button_clicked', methods=['POST'])
def handle_button_click():
    try:
        data = {
            "content": "заявка на фри"
        }
        requests.post("https://discord.com/api/webhooks/1250452276183830579/Ct68cLA9ury32mEnhn2-AAUvuAuOEkU82DgfEIvZ3GVXAx-CUCH7Qp2dbAyZXd31i1pD", json=data)
    except Exception as e:
        print(e)

if __name__ == '__main__':
    app.run(port=5000)