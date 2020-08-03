# FlutterWorkshop_API
API created to be used for the flutter workshop built in Express Js

## Routes 
Different routes you can use in this API

###### `GET` /objects/all 
Get all objects in database 

###### `POST` /objects/create
Create a new object in database with this model : 
```
objectSchema = {
name : String,
description : String,
}
```
###### `PUT` /objects/update/id
Edit an existing object identified in database with its id
according to this model : 
```
objectSchema = {
name : String,
description : String,
}
```
###### `DELETE` /objects/delete/id
Delete an existing object identified in database with its id
