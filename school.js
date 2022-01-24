const articles =document.querySelectorAll('.article_item')


const dataItem =document.querySelector('.dataItem');
console.log(dataItem);

dataItem.addEventListener('click',(e)=>{
    console.log( e.target.nodeName);
   console.log(e.target.dataset.num);
   if(e.target.nodeName =='A'){
      if(e.target.dataset.num ==1){
        for (i=0; i<articles.length;i++){
            articles[i].classList.remove('active')
        }

      }else if(e.target.dataset.num ==2){
          for (i=0; i<articles.length;i++){
            if( articles[i].getAttribute('data-type')!=='kn'){
                articles[i].classList.add('active')
            }else{
                articles[i].classList.remove('active')
            }
           
          }
      }
      else if(e.target.dataset.num ==3){
        for (i=0; i<articles.length;i++){
            if( articles[i].getAttribute('data-type')!=='sk'){
                articles[i].classList.add('active')
            }else{
                articles[i].classList.remove('active')
            }
           
          }
      } 
      else if(e.target.dataset.num ==4){
        for (i=0; i<articles.length;i++){
            if( articles[i].getAttribute('data-type')!=='mv'){
                articles[i].classList.add('active')
            }else{
                articles[i].classList.remove('active')
            }
           
          }
      }
    
   


   }
})


// list.addEventListener('click',(e)=>{
//     console.log(e.target.dataset.num);
//     console.log(e.target.nodeName);
//     if(e.target.nodeName =='A'){
//         let num =e.target.dataset.num;
//         for(i=0;i<beansDry.length;i++){
//             beansDry[i].classList.add('active')
//         }
    
//         for(i=0;i<beans.length;i++){
//             beans[i].classList.add('active')
//         }
    
//         beansDry[num-1].classList.remove('active')
//     }
// })