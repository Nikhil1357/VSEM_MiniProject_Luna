#This will not run on online IDE
import requests
from bs4 import BeautifulSoup
from flask import Flask,request
from flask_pymongo import pymongo
import db
import json
#test to insert data to the data base

URL = "https://www.coursera.org/learn/python#syllabus"
r = requests.get(URL)

soup = BeautifulSoup(r.content, 'html5lib') # If this line causes an error, run 'pip install html5lib' or install html5lib
# div = soup.find_all("span","what-you-will-learn--objective-item--3b4z")
div = soup.find_all("h3", class_="headline-2-text")

for i in div:
    print(i)

# print(list(div))
app = Flask(__name__)

@app.route("/test",methods=["post","get"])
def test():

    dict = request.json
    l = []

    for i in div:
        l.append(str(i.get_text()))

    return l
@app.route("/notes",methods=["get"])
def notes():

    # db.db.Journal.insert_one(dict)
    items = db.db.Journal.find({'notes': 'mmm'})
    for i in items:
        print(i)
    # return items
    return list(db.db.Journal.find({},{"_id":0}))

    # for x in col.find({}, {"_id":0, "coursename": 1, "price": 1 }):
        

@app.route('/')
def index():
    return "Hello, world!"

if __name__ == '__main__':
    app.run(debug=True)