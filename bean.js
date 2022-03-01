let beanData =[
    {
    '編號':1,
    '區碼':2,
    '名稱':'阿拉比卡咖啡豆',
    '產區':'南美洲',
    '口味':'回甘苦',
    'num':'1',
    '價錢':600,
    src:'./pic/dry_bean/1',
    hre:'./07-1-arabica.html',
    },{
    '編號':2,
    '區碼':4,
    '名稱':'阿里山咖啡豆',
    '產區':'亞洲',
    '口味':'花果香',
    'num':'2',
    '價錢':600,
    src:'./pic/dry_bean/2',
    hre:'./07-4-ali.html',
    },
    {
    '編號':3,
    '區碼':2,
    '名稱':'耶加雪夫咖啡豆',
    '產區':'南美洲',
    '口味':'回甘苦',
    'num':'2',
    '價錢':600,
    src:'./pic/dry_bean/3',
    hre:'./07-2-yiga.html'
    },
    {
    '編號':4,
    '區碼':1,
    '名稱':'佳景莊園咖啡豆',
    '產區':'北美洲',
    '口味':'明亮酸',
    'num':'1',
    '價錢':500,
    src:'./pic/dry_bean/4',
    hre:'./07-5-grand.html'
    },  
    {
    '編號':5,
    '區碼':1,
    '名稱':'曼特寧咖啡豆',
    '產區':'北美洲',
    '口味':'明亮酸',
    'num':'2',
    '價錢':700,
    src:'./pic/dry_bean/5',
    hre:'./07-3-mannin.html'
    }, 
    {
    '編號':6,
    '區碼':2,
    '名稱':'巴西咖啡豆',
    '產區':'南美洲',
    '口味':'溫和酸',
    'num':'3',
    '價錢':850,
    src:'./pic/dry_bean/6',
    hre:'./07-3-mannin.html'
    }, 
        {
    '編號':7,
    '區碼':3,
    '名稱':'羅布斯塔咖啡豆',
    '產區':'非洲',
    '口味':'苦甜味',
    'num':'5',
    '價錢':690,
    src:'./pic/dry_bean/1',
    hre:'./07-3-mannin.html'
    }, 
    {
    '編號':8,
    '區碼':3,
    '名稱':'賴比瑞亞咖啡豆',
    '產區':'非洲',
    '口味':'苦甜味',
    'num':'3',
    '價錢':720,
    src:'./pic/dry_bean/2',
    hre:'./07-3-mannin.html'
    },
    {
    '編號':9,
    '區碼':3,
    '名稱':'西達莫咖啡豆',
    '產區':'非洲',
    '口味':'苦甜味',
    'num':'2',
    '價錢':700,
    src:'./pic/dry_bean/3',
    hre:'./07-3-mannin.html'
    },     
    {
    '編號':10,
    '區碼':1,
    '名稱':'美國黑豆',
    '產區':'北美洲',
    '口味':'苦甜味',
    'num':'5',
    '價錢':670,
    src:'./pic/dry_bean/4',
    hre:'./07-3-mannin.html'
    },   
    {
    '編號':11,
    '區碼':2,
    '名稱':'巴西日曬豆',
    '產區':'南美洲',
    '口味':'溫和酸',
    'num':'3',
    '價錢':590,
    src:'./pic/dry_bean/5',
    hre:'./07-3-mannin.html'
    },  
    {
    '編號':12,
    '區碼':4,
    '名稱':'阿里山日曬豆',
    '產區':'亞洲',
    '口味':'花果香',
    'num':'2',
    '價錢':700,
    src:'./pic/dry_bean/6',
    hre:'./07-3-mannin.html'
    },     
    ];
    
    
    const rowdata =document.querySelector('.rowdata');
    
    
    //初始資料的渲染
    function datarander(beanData){
    let str='';
    beanData.forEach((item)=>{
    str +=`
    <div class="col-6 col-md-4 col-lg-3">
        <div class="bean_item ">
         <a href="${item.hre}"><img src="${item.src}.png" alt="">
            <h2>${item.名稱}</h2>
            <div class="txt">
                <span>NT900</span>
                <span>${item.價錢}</span>    
            </div> 
            <div class="btn">
                <button class="goshop">加入購物車</button>
                <button class="goshop shop2">直接購買</button>
            </div>             
                </a></div>
    </div>
    `
    })
    rowdata.innerHTML =str;
    
    }
    datarander(beanData);
    
    
    //產區
    var newData =[];
    const item2 =document.querySelector('.item2');
    console.log(item2);
    item2.addEventListener('click',(e)=>{
        console.log(e.target.nodeName);
        console.log(e.target.dataset.con);
        let num=e.target.dataset.con;
        if(e.target.nodeName =='A'){
            if(num !=0){
                newData =  beanData.filter((item)=>{
                    return num == item.區碼;
               })
               datarander(newData);
            }else{
               datarander(beanData)
            }
        }
    })
    
    
    
    
    var flaData=[];
    //口味
    const item3 =document.querySelector('.item3');
    item3.addEventListener('click',(e)=>{
        if(newData.length !=0){
        let fla =e.target.dataset.fla;
        flaData = newData.filter((item)=>{
            return fla ==item.口味;
          })
    
          if(flaData.length !=0){
              datarander(flaData);
          }else{
            rowdata.innerHTML =`
            <p class="textp">查無此口味的咖啡豆~~~ 請再查詢</p>
            `
          }
    
        }else{
            alert('請先點選產區');
        }
    })
    
    //烘培
    const item1 =document.querySelector('.item1');
    
    var bigData =[];
    item1.addEventListener('click',(e)=>{
        if(newData.length !=0 && flaData.length !=0){
            let num =e.target.dataset.num;
         
            bigData = flaData.filter((item)=>{
                return item.num ==num;
            })
              if(bigData.length !=0){
                  datarander(bigData);
              }else{
                rowdata.innerHTML =`
                <p class="textp">查無此烘培度的咖啡豆~~~ 請再查詢</p>
                `
              }
            }else{
                alert('請先點選產區');
            }
    
    
    
    })
    
    