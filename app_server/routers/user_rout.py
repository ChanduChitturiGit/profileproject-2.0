from flask import request, jsonify
from flask.views import MethodView
from flask_smorest import Blueprint
from db import db
import uuid
from schemas import UserSchema, PlainUserSchema
import models
# from models.store_model import StoreModel
# from models.items_model import ItemsModel
from models.userModel import UserModel
from flask_smorest import abort
from sqlalchemy.exc import SQLAlchemyError, IntegrityError
from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
import jwt
from datetime import *
from .blocklist import block_list
from flask_cors import CORS,cross_origin

blp = Blueprint("users", __name__, description="User Module.")


@blp.route('/users/register')
class UserData(MethodView):

    @blp.arguments(UserSchema)
    @blp.response(201, UserSchema)
    def post(self, user_data):
        data = UserModel.query.filter(UserModel.username == user_data["username"]).first()
        if data:
            abort(409, message="User Already exists.")
        new_user = UserModel(
            username=user_data["username"],
            hashed_password=pbkdf2_sha256.hash(user_data["password"]),
            firstname=user_data["firstname"],
            lastname=user_data["lastname"],
            role="user",
            email=user_data["email"],
            mobile=user_data["mobile"]
        )
        db.session.add(new_user)
        db.session.commit()
        return new_user
    
    
@blp.route('/users/login')
class Login(MethodView):

    @blp.arguments(PlainUserSchema)
    @blp.response(200)
    def post(self, user_data):
        data = UserModel.query.filter(UserModel.username == user_data["username"]).first()
        if data:
            if pbkdf2_sha256.verify(user_data["password"],data.hashed_password):
                access_token = create_access_token(identity={"id": data.id,
                                                      "username": data.username,
                                                      "role": data.role})
                
                return {"access_token" : access_token,"id":data.id}
            abort(409, message="Invalid Password.")
        abort(404, message="User not Found.")
            

@blp.route('/users/logout')
class Logout(MethodView):
    @jwt_required()
    @blp.response(200)
    def post(self):
        jti=get_jwt()['jti']
        if jti not in block_list:
            block_list.add(jti)
            return "User logged out successfully."
        return "User already logged out."
 

@blp.route('/users/getUser/<int:user_id>')
class GetUser(MethodView):
    @jwt_required()
    @cross_origin()
    @blp.response(200,UserSchema)
    def get(self,user_id):
        data=UserModel.query.filter(UserModel.id==user_id).first()
        if data:
            return data
        abort(404,message="User not found.")