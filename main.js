var nose_x = 0;
var nose_y = 0;
function preload(){
mustache = loadImage('https://i.postimg.cc/qMGnQbQR/193-1934735-fake-moustache-png-image-fake-moustache-transparent-background.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(mustache, nose_x, nose_y, 60, 30);
}

function modelLoaded(){
    console.log('poseNet is Initilized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x= results[0].pose.nose.x-30;
        nose_y= results[0].pose.nose.y+4;
    }
}

function capture_image(){
    save("filtered_image.png")
}