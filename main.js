leftwristx=0;
rightwristx=0;
difference=0;
nosex=0;
nosey=0;



function setup() {
    video = createCapture(VIDEO)
    video.size(550 , 500)

     canvas=createCanvas(550 , 550)
     canvas.position(570 , 130)
     poseNet=ml5.poseNet(video , modeloaded);
     poseNet.on('pose' , gotposes);

}

function draw() {
   background('#FFCCCB');
   textSize(difference)
   fill('red');
   text('Heyy!! Its me Kiran💗' , nosex , nosey)
}

function modeloaded() {
   console.log("posenet is intialized")
}

function gotposes(results){
   if(results.length > 0 ) {
       
       console.log(results)

       nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex= " + nosex + ", nosey= " + nosey);

       leftWristX = results[0].pose.leftWrist.x;
       rightWristX = results[0].pose.rightWrist.x;
       difference = Math.floor(leftWristX - rightWristX);
       console.log("leftwrist=" + leftwristx + ", rightwrist=" + rightwristx);
       document.getElementById("hello").innerHTML="side of the text will be = "+ difference + "px";


   }


}

