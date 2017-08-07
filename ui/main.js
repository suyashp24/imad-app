var button = document.getElementById('counter');

button.onClick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.done){
            if(request.status ===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHtml = counter.toString();
            }
        }
    };
    
    request.open('GET','http://suyashpawar24.imad.hasura.io/counter',true);
    request.send(null);
};