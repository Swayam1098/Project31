class Particle {
    constructor(x,y,radius){

        var options = {
            restitution : 0.4
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
        this.radius=radius

    }
    display(){
        var pos = this.body.position
        var angle = this.boddy.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.colour)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius.this.radius)
        pop()
    }
}