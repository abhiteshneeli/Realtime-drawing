nose_x="";
nose_y="";
 leftwristx="";
 rightwristx="";
 difference="";
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposese);
}

function draw(){
    document.getElementById("square_sides").innerHTML="width and hight of the square will be "+difference+"px";
    background('#cb05f7')
    fill('#f90093');
    stroke('#f90093');
    square(nose_x,nose_y,difference)
}

function modelloaded(){
    console.log("posenet is loaded!");
}



function gotposese(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;

        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;

        difference=floor(leftwristx-rightwristx);
    }
}