export class Point {

   

    constructor(private x?: number, private y?: number){

        this.x=x;
        this.y=y;

    }

    draw(){
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }

    getDistance(another: Point){
        //..
    }

    get X(){
        return this.y;
    }

    set X(value){

        if(value < 0){
            throw new Error('Value cannot be less than 0');       
         }
         this.x=value
}
}


