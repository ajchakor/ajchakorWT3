let url = "https://davids-restaurant.herokuapp.com/menu_items.json"

let food_items = null;

$("document").ready(function(){
    $.get(url,function(data, status){
        if (status == "success"){
            food_items = data.menu_items;
            console.log(food_items.length);
            for (const key in data.menu_items) {
                let opt = document.createElement("option");
                opt.textContent = data.menu_items[key].name;
                opt.value = key; 
                document.querySelector('#restaurant').appendChild(opt);
            }
            listOptions();
        }
       
    });

    function listOptions(){
        let i=0;
        if(food_items != null){
            for(const jsonobj of food_items){
                console.log(i++,jsonobj.name);
                
            }
        }
    }

    
document.querySelector("#restaurant").addEventListener("change",displayDetails);

function displayDetails(e){
    let index = e.target.value;
    
    if(food_items != null){
        let x = food_items[index];
        let pricesmall = x.price_small;
        
        if(pricesmall == null){
            pricesmall = "Not available in small quantity";
        }
        let descrp = x.description;
        if(descrp == ""){
            descrp = "Description not available";
        }
        document.querySelector("#itemname").textContent = x.name;
        document.querySelector("#itemid").textContent = x.id;
        document.querySelector("#sname").textContent = x.short_name;
        document.querySelector("#desc").textContent = descrp;
        document.querySelector("#priceS").textContent = pricesmall;
        document.querySelector("#priceL").textContent = x.price_large;
    }
    document.getElementById("table1").style.display = "block";
}


});

