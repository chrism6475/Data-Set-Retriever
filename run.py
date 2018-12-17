from flask import Flask, render_template, jsonify
from random import randint
import requests

app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")


@app.route('/indicators')
def random_number():
    response = [
      {'name': 'Mobile Cellular Subscriptions', 'code': 'IT.CEL.SETS.P2'},
      {'name': 'Poverty Gag at national poverty lines', 'code': 'SI.POV.NAGP'},
      {'name': 'Children in employment, female ages 7-14', 'code': 'SL.TLF.0714.FE.ZS'},
      {'name': 'Prevalence of HIV (male)', 'code': 'SH.HIV.1524.MA.ZS'},
      {'name': 'Prevalence of HIV (female)', 'code': 'SH.HIV.1524.FE.ZS'},
      {'name': 'Birth Rate Crude', 'code': 'SP.DYN.CBRT.IN'}
    ]

    return jsonify(response)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")
