# BACK-END

## users Table

| HTTP | Path | Description | Data
| -- | -- | -- | -- |
| Post | /api/auth/register | Registers new users | *Example objects below* |
| |  |  | **Returns** {"id": #, "username": ""} |
| Post | /api/auth/login | 	Logs user in with auth token | **Expects** {"username": "", "password": ""}
| |  |  | **Returns** {"id": #, "username": "", "password": ""} |
**Registration object**