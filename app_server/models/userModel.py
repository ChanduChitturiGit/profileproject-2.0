from db import db

class UserModel(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer,primary_key=True,nullable=False)
    username = db.Column(db.String(80),unique=True,nullable=False)
    hashed_password = db.Column(db.String,nullable=False)
    firstname=db.Column(db.String(80),nullable=False)
    lastname=db.Column(db.String(80),nullable=False)
    role=db.Column(db.String(80),nullable=False)
    email=db.Column(db.String(120),unique=True,nullable=False)
    mobile=db.Column(db.String(80),unique=True,nullable=False)
    