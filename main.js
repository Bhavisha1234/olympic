canvas=document.getElementById("myCanvas");
cpx=canvas.getContext("2d");
cpx.beginPath();
cpx.strokeStyle=blue;
cpx.lineWidth=2;
cpx.arc(200,200,40,0,2*Math.PI);
cpx.stroke();
canvas.addEventListener("mousedown",Mymouse);