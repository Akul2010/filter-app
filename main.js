righteyex = 0;
lefteyex = 0;
righteyey = 0;
width = 0;

function preload() {
   img = loadImage("https://i.postimg.cc/jS6dP6bj/gogles.png");
}
function setup() {
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300 , 300);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("poseNet initialization completed without any error");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        righteyex = results[0].pose.rightEye.x - 30;
        righteyey = results[0].pose.rightEye.y - 42;
        lefteyex = results[0].pose.leftEye.x + 30;
        console.log("X of rightEye" + results[0].pose.rightEye.x);
        console.log("Y of rightEye" + results[0].pose.rightEye.y);
        width = lefteyex - righteyex;
    }
}

function draw() {
    image(video , 0 , 0, 300 , 300);
    image(img , righteyex , righteyey, width , 90);
}

function take_snapshot() {
    save("Cool Person's Selfie.png");
}