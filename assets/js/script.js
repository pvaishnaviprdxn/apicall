/* Author: 

*/

var x = new XMLHttpRequest();
x.open('GET','https://jsonplaceholder.typicode.com/posts',true);
x.send();
x.onreadystatechange = function(){ 
    if(x.readyState == 4){
        obj = JSON.parse(x.responseText);
        disp(obj);
    }
}
function disp(obj){
    var mainc = document.getElementById("datad");
    for(var i=0;i <obj.length ;i++){  
        var maind = document.createElement("data");
            if(i<6){
                maind.innerHTML="<br> Title:"+obj[i].title+"<br> Body:"+obj[i].body+"<br>";
                mainc.appendChild(maind); 
            }  
    }
}
