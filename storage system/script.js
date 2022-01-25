//variable

const Title=document.querySelector("#title");
const Type=document.querySelector("#type");
const Price=document.querySelector("#price");
const Count=document.querySelector("#count");
const BtnAdd=document.querySelector("#btn-add");
const contener2=document.querySelector(".contener2");
const contener1=document.querySelector(".contener1");

//Add EventListener
BtnAdd.addEventListener('click' , creatitem)

//function
function creatitem(event){
    event.preventDefault();
    //     take the value
    //................................
        var Countvalue=Count.value;
        var Titlevalue=Title.value;
        var Typevalue=Type.value;
        var Pricevalue=Price.value;
    //................................


    if(Countvalue == ''){
        Countvalue=1;
    };
      if(Titlevalue==''){
        alert("Enter Title");
      }
      else if(Typevalue==''){
        alert("Enter Type");
      }
      else if(Pricevalue==''){
        alert("Enter Price");
      }


     else {
        console.log("else is On")
        for(let i=0;i<Countvalue;i++){
                // new div-item /name=newitem
                const newitem=document.createElement('div');
                newitem.classList.add("newitem");
                contener2.appendChild(newitem);
                //creat title
                const newTitle=document.createElement('div');
                newTitle.innerHTML=Titlevalue;
                newTitle.classList.add("new-Title")
                newitem.appendChild(newTitle);
                //creat type
                const newType=document.createElement('div');
                newType.innerHTML=Typevalue;
                newType.classList.add("new-Type")
                newitem.appendChild(newType);
                //creat price
                const newPrice=document.createElement('div');
                newPrice.innerHTML=Pricevalue;
                newPrice.classList.add("new-Price")
                newitem.appendChild(newPrice);
                //creat Trash-Btn
                //trash
                    
                    const trash=document.createElement('button');
                    trash.innerHTML='<i class="fas fa-trash"></i>';
                    trash.classList.add("trash-btn");
                    newitem.appendChild(trash);
                    
                    //trash event
                        trash.addEventListener('click',function deleted(){
                            contener2.removeChild(newitem);
                        });






        //................................
            Count.value="";
            Title.value="";
            Type.value="";
            Price.value="";
        //................................
        }; 
    };
        
    
   
}