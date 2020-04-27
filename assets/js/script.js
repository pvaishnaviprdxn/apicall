/* Author */
var count = 6;
var obj =[];
var x = new XMLHttpRequest();
x.open('GET','https://jsonplaceholder.typicode.com/posts',true);
x.send();
x.onreadystatechange = function(){ 
    if(x.readyState == 4){
        obj = JSON.parse(this.responseText);
        //console.log(obj);
        for(i=0; i < 6; i++){
            rows = "<tr><td>"+obj[i].id+"</td><td>"+obj[i].title+"</td><td>"+obj[i].body+"</td></tr>";
            var tr = document.createElement("tr");
            tr.innerHTML = rows;
            document.getElementById("list").appendChild(tr);
        }
        return obj;
    }
}
document.getElementById("more").onclick =function(){
    displayData();
    count = count + 6; // Increment count by 6
    console.log(count);
    return count;
}
function displayData() {
    for (i = count; i < count + 6 && i < obj.length; i++) {
        rows = "<tr><td>"+obj[i].id+"</td><td>"+obj[i].title+"</td><td>"+obj[i].body+"</td></tr>";
        var tr = document.createElement("tr");
        tr.innerHTML = rows;
        document.getElementById("list").appendChild(tr);
    }
}