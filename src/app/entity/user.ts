export class User {
    id : number ;
    username : string ;
    email : string ;
    password : string ;
    roles :string[] ;
    token : string ;
    
    constructor(id=0,username='',email='',password='',roles='',token=''){
      this.id=id;
      this.username=username;
      this.email=email;
      this.password=password;
      this.roles=[];
      this.token=token;
    }
}