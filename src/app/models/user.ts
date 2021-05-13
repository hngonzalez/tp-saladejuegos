export class User {
    name:string = ''; 
    password:string = '';
    pointsCur:number = 0;
    pointsGen:number = 0;
    pointsGenPPT:number = 0;
    pointsGenAHO:number = 0;
    pointsGenMEMO:number = 0;
    pointsGenTTT:number = 0;
    ultiJuegopPPT:Date = new Date();
    ultiJuegopTTT:Date = new Date();
    encuesta:boolean = false;
    
    constructor(nam:string, pass:string) {
        this.name = nam;
        this.password = pass;
    }
    
}
