app = Flask(__name__)

# @app.route("/test",methods=["post","get"])
# def test():

#     dict = request.json
    
#     return div
# @app.route("/notes",methods=["get"])
# def notes():

#     # db.db.Journal.insert_one(dict)
#     items = db.db.Journal.find({'notes': 'mmm'})
#     for i in items:
#         print(i)
#     # return items
#     return list(db.db.Journal.find({},{"_id":0}))

#     # for x in col.find({}, {"_id":0, "coursename": 1, "price": 1 }):
        

# @app.route('/')
# def index():
#     return "Hello, world!"

# if __name__ == '__main__':
#     app.run(debug=True)