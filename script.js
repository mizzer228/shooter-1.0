let shot = document.querySelector(".shot");
let hit = document.querySelector(".hit");
let count = document.getElementById("count") ;
document.body.addEventListener('click', shooting );

function shooting(e){
let el= e.target;

if(el.classList.contains("jar")) {
    el.classList.add("die");

    count.innerHTML ++

    hit.play();

    
    
}
    else {

    shot.play();
}

} 


function load()
{
    var element = document.querySelector(".jar");

    new Jump(element).Run(8, 20, 0, -0.5);
}

function Jump(element)
{
    this.X = 0;
    this.Y = 0;
    this.Element = element;
    this.Refresh();
}

//ux - начальная скорость по X
//uy - начальная скорость по Y
//xF - сила по X
//yF - сила по Y
Jump.prototype.Run = function (ux, uy, xF, yF)
{
    var self = this;
    var tID = setInterval(function ()
    {
        self.X += ux;
        self.Y += uy;
        ux += xF;
        uy += yF;

        self.Refresh();

        if (self.Y < 0)
            clearInterval(tID);
    }, 20);
}

Jump.prototype.Refresh = function ()
{
    this.Element.style.left = this.X + "px";
    this.Element.style.bottom = this.Y + "px";
}