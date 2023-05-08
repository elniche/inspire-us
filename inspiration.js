

             function Toast() {
         var lolo = document.getElementById("flex-container");
          
          lolo.addEventListener('click', function() {

      
          fetch('https://type.fit/api/quotes')
          .then((res) => res.json())
          .then((data) => {    

            
            var num1 = Math.floor(Math.random() * (data.length))
           
            var zealand = data[num1].text + "-" + data[num1].author;
            

           document.getElementById('perro').innerHTML = zealand
        


           
          })
             
        })
  
   
      }

      function Comp() {
        var alert = document.getElementById('perro');
        alert.style.display = 'block'
        Toast()
      }
  

  
  
       

