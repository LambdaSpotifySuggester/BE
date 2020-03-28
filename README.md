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

## user Table

| HTTP | Path | Description | Route Method | Description | Data
| -- | -- | -- | -- | -- | -- |
| Get | /api/user/:id/favorites | Get a list of users | *Example objects below* |