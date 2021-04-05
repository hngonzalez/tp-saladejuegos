export class User {
    name:string = ''; 
    password:string = '';

    constructor(private nam:string, private pass:string) {
        this.name = this.nam;
        this.password = this.pass;
    }
    
}
