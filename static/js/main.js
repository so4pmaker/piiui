
function init() {
    window.Counter = 0;
    window.arr = []; 
}
function pop(x){

    var s = x.toString();
    elem = document.getElementById(s);

    if (elem.className == "words"){
	   elem.className = "words high";
    	window.Counter += 1;
        window.arr.push(x); 
    }
    else{
    	elem.className = "words";
    	window.Counter -= 1;
        window.arr.splice(window.arr.indexOf(x), 1); 
    }
    changeRules();
}
function changeRules() {
    var str = "[" + arr.toString() + "]"; 
    $.ajax({
        type: "POST",
        url: "back",
        data: {arr: str},
        
    }).done(function(data){
        $('#rules').html(data);
    }); 
}