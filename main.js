SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start()
}
recognition.onresult=function run(event){
console.log(event)
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML=Content;
console.log(Content)
speak();
}
function speak(){
var synth=window.speechSynthesis;
speak_data=document.getElementById("textbox").value;
var utterthis=new SpeechSynthesisUtterance(speak_data)
synth.speak(utterthis)
Webcam.attach(camera)
setTimeout(function()
{
take_selfie();
save();
}
,5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
  });
camera=document.getElementById("camera")
function take_selfie(){
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie_image">'
})
}
function save(){
link=document.getElementById("link");
image=document.getElementById("selfie_image").src;
link.href=image;
link.click()
}