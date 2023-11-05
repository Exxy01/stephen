function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}
quick_draw_data_set = [1, 10]
var random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1)


sketch = quick_draw_data_set[random_number];
console.log(random_number);
document.getElementById("sketch_name").innerHTML = "sketch to be drawn" + sketch;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
function updateCanvas(){
    background("white");
    var random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1)
sketch = quick_draw_data_set[random_number];
console.log(random_number);
document.getElementById("sketch_name").innerHTML = "sketch to be drawn" + sketch;
}
function setup(){   
var canvas = createCanvas(280,280);
canvas.center();
background("white");
 canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
    
}
function classifyCanvas(){
    classifier.classify(canvas, gotResults);
  }
function check_sketch(){
if(condition){
    timer_counter++
}
document.getElementById("Timer").innerHTML = timer_counter;
console.log(timer_counter);
if(timer_counter == 400){
    timer_counter = 0;
    timer_check = "Completed.";
}
if(timer_check == "Completed." || answer_holder == "set"){
    timer_check = "";
    answer_holder = "";
    updateCanvas();
}
}
function draw(){
    strokeWeight(10);
    strokeColor("black");
    if(mouseIsPressed){
     line(pmousex, pmousey, mousex, mousey)
     check_sketch();
     if(drawn_sketch == sketch){
        answer_holder = "set";
        score++;
        document.getElementById("score").innerHTML = "score " + score;

     }
    }

}
function gotResults(error, results){
    if(error){
      console.error(error);
    }
    else{ 
         console.log(results);
        drawn_sketch = results[0].label
        document.getElementById("label").innerHTML = "Your sketch: " +drawn_sketch;
        document.getElementById("confidence").innerHTML = "confidence" + Math.round(results[0].confidence * 100) + "%";
        
    }
    }
      
    
    
  
