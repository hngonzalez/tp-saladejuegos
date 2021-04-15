export class User {
    name:string = ''; 
    password:string = '';
    pointsCur:number = 0;
    pointsGen:number = 0;

    constructor(nam:string, pass:string) {
        this.name = nam;
        this.password = pass;
    }
    
}
