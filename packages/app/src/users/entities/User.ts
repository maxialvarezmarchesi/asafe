export class User {

    private _id: Number | null = null;
    private _name: String = "";
    private _password: String = "";
    private _email: String = "";
    private _surname: String = "";
    private _deleted: Boolean = false;


    public get id(): Number | null {
        return this._id;
    }
    
    public set id(value: Number) {
        this._id = value;
    }

    public get name(): String {
        return this._name;
    }
    
    public set name(value: String) {
        this._name = value;
    }

    public get surname(): String {
        return this._surname;
    }
    
    public set surname(value: String) {
        this._surname = value;
    }

    public get email(): String {
        return this._email;
    }
    
    public set email(value: String) {
        this._email = value;
    }

    public get password(): String {
        return this._password;
    }

    public set password(value: String) {
        this._password = value;
    }



    public get isDeleted(): Boolean {
        return this._deleted;
    }

    public set deleted(value: Boolean) {
        this._deleted = value;
    }




}