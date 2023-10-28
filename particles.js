const particlesarray=[]
class Particle{
    constructor(){
        this.x=bird.x
        this.y=bird.y
        this.size=Math.random()*7+3
        this.speedy=(Math.random()*1)-0.5
        this.color='hsla('+hue+',100%,50%,0.8)'
    }
    update(){
        this.x-=gamespeed
        this.y+=this.speedy

    }
    draw(){
        ctx.fillStyle=this.color
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill()
    }
}
function handleparticles(){

    particlesarray.unshift(new Particle)
    for(i=0;i<particlesarray.length;i++){
        particlesarray[i].update()
        particlesarray[i].draw()
    }
    if(particlesarray.length>200){
        for(let i=0;i<20;i++){
            particlesarray.pop(particlesarray[i])
        }
    }
}