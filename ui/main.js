var button = document.getElementById('counter');

 var button =function invoke() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if (request.readyState === XMLHttpRequest.DONE){
            
           if(request.status === 200){
                
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://suyashpawar.imad.hasura-app.io',true);
    request.send(null);
};