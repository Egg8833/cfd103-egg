const list =document.querySelector('.item1');
const beans =document.querySelectorAll('.bean_item1')
const beansDry =document.querySelectorAll('.bbean1')



// 烘焙選擇
list.addEventListener('click',(e)=>{
    console.log(e.target.dataset.num);
    console.log(e.target.nodeName);
    if(e.target.nodeName =='A'){
        let num =e.target.dataset.num;
        for(i=0;i<beansDry.length;i++){
            beansDry[i].classList.add('active')
        }
    
        for(i=0;i<beans.length;i++){
            beans[i].classList.add('active')
        }
    
        beansDry[num-1].classList.remove('active')
    }
})

const item2 =document.querySelector('.item2')
console.log(item2);
// 產區選擇

item2.addEventListener('click',(e)=>{

    if(e.target.nodeName =='A'){
        let num =e.target.dataset.con;

        if(num =1){
            for(i=0;i<beans.length;i++){
                beans[i].classList.remove('active')
            }
            for(i=0;i<beansDry.length;i++){
                beansDry[i].classList.remove('active')
            }
        }
    }
});



