prediction1="";
Webcam.set({
width:340,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured" src="'+data_uri+'">';
});
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sCvmriLQl/model.json', modelloaded);
function modelloaded(){
console.log('modelloaded');
}