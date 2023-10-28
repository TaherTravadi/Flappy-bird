const obstaclearray=[]
class Obstacle{

    constructor(){
        this.top=(Math.random()*canvas.height/3)+20
        this.bottoms=(Math.random()*canvas.height/3)+20
        this.x=canvas.width
        this.width=20
        this.color='hsl('+ hue + ',100%,50%,1)'
        this.counted=false

    }
    draw(){
        ctx.fillStyle=this.color
        ctx.fillRect(this.x,0,this.width,this.top)
        ctx.fillRect(this.x,canvas.height-this.bottoms,this.width,this.bottoms)
    }
    update(){
        this.x-=gamespeed
        if(!this.counted && this.x<bird.x){
            score++
            this.counted=true
        }
        this.draw()
    }
}
function handleobstacles(){
    if(frame%50===0){
        obstaclearray.unshift(new Obstacle)
    }
    for(let i=0;i<obstaclearray.length;i++){
        obstaclearray[i].update()
    }
    if(obstaclearray.length>20){
        obstaclearray.pop(obstaclearray[0])
    }
}
