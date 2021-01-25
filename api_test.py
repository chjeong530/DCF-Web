import requests
import json

url_items = "http://keti.asuscomm.com:32222/function/keti-intentclassifier-1"
#response = requests.get(url_items)

newItem = {
    "access_token": "",
    "utterances": "안녕하세요",
    }
response = requests.post(url_items, json=newItem)

print(response.text)


import pdb;pdb.set_trace()
