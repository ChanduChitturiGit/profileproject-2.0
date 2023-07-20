from marshmallow import Schema,fields

class PlainUserSchema(Schema):
    id=fields.Int(dump_only=True)
    username=fields.Str(required=True)
    password=fields.Str(required=True,load_only=True)

class UserSchema(PlainUserSchema):
    firstname=fields.Str(required=True)
    lastname=fields.Str(required=True)
    role=fields.Str(dump_only=True,load_only=True)
    email=fields.Str(required=True)
    mobile=fields.Str(required=True)