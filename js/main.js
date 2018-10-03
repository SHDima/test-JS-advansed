
                        /*----quantity and price----*/
//-------------------------------------------------------------------------------------------------------

  var buttonAdd = document.querySelectorAll('.product-box__btn');
  for (i = 0; i < buttonAdd.length; i++) {
    buttonAdd[i].addEventListener('click', function(i) {
    	var sumValue = 0, sumPrice = 0;
        for (i = 0; i < buttonAdd.length; i++){
        	var valueAdd = 0,valueprice = 0;
          if(buttonAdd[i].previousElementSibling.firstChild.nextElementSibling.value > 0){
            valueAdd = buttonAdd[i].previousElementSibling.firstChild.nextElementSibling.value;
              var elemSum = buttonAdd[i].previousElementSibling.previousElementSibling.innerHTML;
               valueprice = Number(elemSum[0]+ elemSum[1] + elemSum[2]);
            sumValue += Number(valueAdd);
            sumPrice += valueprice * valueAdd;
         }
        }
          document.querySelector('.top-cart-info__item').firstChild.nextElementSibling.innerHTML = sumValue;
          document.querySelector('.top-cart-info__item').firstChild.nextElementSibling.nextElementSibling.innerHTML = sumPrice ;
    	});
    }

                           /*------category-----*/
//-------------------------------------------------------------------------------------------------------

  var select = document.querySelectorAll('.select-control');
      for (i = 0; i < select.length; i++) {
        select[i].addEventListener("change", function(){
        var choice = [];
        for (i = 0; i < select.length; i++) {
        choice[i] = select[i].value;
        }
         var elem = document.querySelectorAll('.product-box__item');
           for (i = 0; i < elem.length; i++) {
               var elemSplit = [];
               elemSplit = elem[i].getAttribute('data-filter').split(' ');
                if((~elem[i].getAttribute('data-filter').indexOf(choice[0])&&choice[1]=='0')||(~elem[i].getAttribute('data-filter').indexOf(choice[0]) && Number(choice[1]) >= Number(elemSplit[1]))||((choice[0] == "All") && Number(choice[1]) >= Number(elemSplit[1]))){
                    elem[i].style.display = "flex";
                }
               else{
                  if(choice[0]=="All" && choice[1]=='0'){
                       elem[i].style.display = "flex";
                  }
                   else{
                    elem[i].style.display = "none";
                  }
                }
             }
          })
        }

                                /*-----order-----*/
//-------------------------------------------------------------------------------------------------------

  document.querySelector('.btn-check').addEventListener('click',function(){
      document.querySelector('.popup').style.display='block';
  })
  document.querySelector('.container-popup').addEventListener('click',function(){
      document.querySelector('.popup').style.display='none';
  })
  document.querySelector('.button').addEventListener('click',function(e){
     var inputName = document.querySelector('.inputName');
     var inputEmail = document.querySelector('.inputEmail');
     if((inputName.value.charAt(0) == ' ') || (inputEmail.value.charAt(0) == ' ') || !(inputName.value)|| !(inputEmail.value)){
        e.preventDefault();
        alert('filled');
     }
     else{
      alert(' Thank you for your purchase');
      var sum = document.querySelectorAll('.red-info');
        for(i = 0; i < sum.length; i++){
           sum[i].innerHTML='XXX';
        }
     }
  })


