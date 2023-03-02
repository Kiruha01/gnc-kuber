import string

from flask import Flask, request
app = Flask(__name__)


@app.route('/encode')
def encode():
    text = request.args['text'].lower()
    offset = int(request.args['offset'])
    print(f"Incoming request: text={text}, offset={offset}")

    alphabet = string.ascii_lowercase
    shifted_alphabet = alphabet[offset:] + alphabet[:offset]
    table = str.maketrans(alphabet, shifted_alphabet)

    return {'text': text.translate(table)}


if __name__ == '__main__':
    app.run()
