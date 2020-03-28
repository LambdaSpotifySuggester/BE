# BACK-END

## auth Table

| HTTP | Path | Description | Data 
| -- | -- | -- | -- |
| Post | /api/auth/register | Registers new users | *Example objects below* |
| |  |  | **Returns** {"id": #, "username": ""} |
| Post | /api/auth/login | 	Logs user in with auth token | **Expects** {"username": "", "password": ""}
| |  |  | **Returns** {"id": #, "username": "", "password": ""} |
**Registration object**

{   
    <br />
    "username": "", required string,
    <br />
    "password": "", required string
    <br />
}

## songs Table

| HTTP | Path | Description | Route Method |  
| -- | -- | -- | -- | 
| Get | /api/songs | Get a list of songs | find  
| -- | -- | -- | -- | 
| Post | /api/songs | Add a song | insert 
| -- | -- | -- | -- | 
| Delete | /api/songs | delete a song | remove 

## artists Table

| HTTP | Path | Description | Route Method |  
| -- | -- | -- | -- | 
| Get | /api/artists | Get a list of artists | find  
| -- | -- | -- | -- | 
| Get | /api/artists/:id | Get an artist by Id | findById 
| -- | -- | -- | -- | 
| Post | /api/artists | Add an artist | insert 
| -- | -- | -- | -- | 
| Delete | /api/artists | delete a artist | remove 

