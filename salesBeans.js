const saleBar =document.querySelector('.sale-bar')
const num2=document.querySelector('.num2')


saleBar.addEventListener('click',(e)=>{
   
    let a=0;
    let b=0;
    c = parseInt(num2.value)
    if(e.target.getAttribute('class') =='plus-btn'){     
        a++
        c +=a ;
        num2.value =c
        if(c>50){
            alert('最多購買50包')
            c=50;
            num2.value =c
        }
      
    }else if (e.target.getAttribute('class') =='minus-btn'){
        b--
        c=c+b;
        num2.value =c
        console.log(b);
        if(c<0){
            alert('最少是0包')
            c=0;
            num2.value =c
        }
    }

})



