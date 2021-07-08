
class User{
    constructor(username, password,role){
        this.username=username;
        this.password=password;
        this.role=role;
    }
    login(){
        return users.find(ur=>ur.username===this.username && ur.password===this.password)
    }
}

const users=[new User('john','admin','admin'),new User('bella','member','member')]

module.exports=User;