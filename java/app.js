const cross = document.getElementById("close");
cross.addEventListener("click", ()=>{
    const switching = document.getElementById("target");
    switching.classList.toggle("active");
    if(switching.classList !== "active"){
        document.getElementById("card-width").classList.toggle("active");
    }
})


const cars = {
    All:{

    },
    Tyotta:{
            camry:{
                img: "../css/images/tyotta/camry.jpg" ,
                name: "Camry",
                conditon: "new",
                model: 2023,
                colors: ["gray", "white", "black"],
                location: "Karachi",
                topspeed: "280 Km/H",
                price: "45 M"
            },
            corolla:{
                img: "../css/images/tyotta/grande.jpg" ,
                name: "Grande",
                conditon: "used",
                model: 2019,
                colors: ["gray", "white", "black"],
                location: "Multan",
                topspeed: "200 Km/H",
                price: "7 M"
            },
          prius: {
                img: "../css/images/tyotta/prius.jpg", 
                    name: "Prius",
                conditon: "used",
                    model: 2020,
                    price: "6 M",
                    city:  "Multan",
                    color: ["Silver", "Black","Red"],
                location: "Multan",
                topspeed: "200 Km/H",
             },
             hiace: {
                img: "../css/images/tyotta/hiace.jpg",
                    name: "HiAce",
                    conditon: "new",
                    model: 2020,
                    price: "120 M",
                    city:  "Multan",
                    topspeed: "160 km/H",
                    color: ["Silver", "Black","Red"],
                location: "Multan",
                  },
            yaris:{
                img: "../css/images/tyotta/yaris.jpg" ,
                name: "Yaris",
                conditon: "used",
                model: 2018,
                colors: ["gray", "white"],
                location: "Karachi",
                topspeed: "180 Km/H",
                price: "5 M"
            },
            altis:{
                img: "../css/images/tyotta/altis.jpg" ,
                name: "Altis",
                conditon: "used",
                model: 2021,
                colors: ["gray", "white", "black", "red"],
                location: "Lahore",
                topspeed: "280 Km/H",
                price: "6.5 M"
            },
        landcruiser:{
            img: "../css/images/tyotta/land-cruiser.jpg" ,
                name: "Land Cruiser",
                conditon: "new",
                model: 2023,
                colors: ["gray", "white", "black", "cutom"],
                location: "Karachi",
                topspeed: "300 Km/H",
                price: "150 M"
            },
            fortuner:{
                img: "../css/images/tyotta/fortuner.jpg" ,
                name: "Fortuner",
                conditon: "used",
                model: 2021,
                colors: ["gray", "white", "black"],
                location: "Karachi",
                topspeed: "240 Km/H",
                price: "15.5 M"
            },
            legender:{
                img: "../css/images/tyotta/legender.jpg" ,
                name: "legender",
                conditon: "new",
                model: 2020,
                colors: ["gray", "white", "black"],
                location: "Karachi",
                topspeed: "300 Km/H",
                price: "120 M"
            },
             revo:{
                img: "../css/images/tyotta/revo.jpg" ,
                name: "Revo",
                conditon: "new",
                model: 2021,
                colors: ["gray", "white", "black"],
                location: "Islamabad",
                topspeed: "200 Km/H",
                price: "120 M"
              },
             vigo:{
                img: "../css/images/tyotta/vigo.jpg",
                name: "Vigo",
                conditon: "used",
                model: 2020,
                colors: ["gray", "white", "black"],
                location: "Multan",
                topspeed: "180 Km/H",
                price: "8 M",
             }
            },
        Hyundai: {
                elantra: {
                    img: "../css/images/tyotta/elantra.jpg", 
                    name: "Hundayi Elantra",
                    conditon: "new",
                    model: 2022,
                    colors: ["gray", "blue", "black"],
                    location: "Karachi",
                    topspeed: "260 Km/H",
                    price: "8.5 M",
                    
                },
                ii10: {
                    img: "../css/images/tyotta/i10.jpg", 
                    name: "Hundayi i10",
                    conditon: "used",
                    model: 2019,
                    colors: ["gray", "blue", "black"],
                    location: "Karachi",
                    topspeed: "220 Km/H",
                    price: "7.5 M",
                },
                sonata: {
                    img: "../css/images/tyotta/sonata.jpg", 
                    name: "Sonata",
                    conditon: "New",
                    model: 2022,
                    colors: ["gray", "blue", "red"],
                    location: "Lahore",
                    topspeed: "250 Km/H",
                    price: "9.9 M",
                },
                veloster: {
                    img: "../css/images/tyotta/veloster.jpg", 
                    name: "Veloster",
                    conditon: "used",
                    model: 2018,
                    colors: ["gray", "black"],
                    location: "Lahore",
                    topspeed: "180 Km/H",
                    price: "6.5 M",
                },
                azera:{
                    img: "../css/images/tyotta/azera.jpg", 
                    name: "Azera",
                    conditon: "used",
                    model: 2016,
                    colors: ["gray", "black"],
                    location: "Islamabad",
                    topspeed: "200 Km/H",
                    price: "4.5 M",

                }
        },
        Honda:{
               civic:{
                img: "../css/images/tyotta/civic.jpg", 
                    name: "Civic",
                    conditon: "new",
                    model: 2022,
                    colors: ["gray", "black", "white"],
                    location: "Karachi",
                    topspeed: "240 Km/H",
                    price: "10.5 M",
               },
               reborn:{
                img: "../css/images/tyotta/reborn.jpg", 
                   name: "Reborn",
                    conditon: "used",
                    model: 2022,
                    colors: ["gray", "black"],
                    location: "Islamabad",
                    topspeed: "240 Km/H",
                    price: "8.5 M"
               },
               brv:{
                img: "../css/images/tyotta/brv.jpg", 
                   name: "Br-V",
                    conditon: "used",
                    model: 2022,
                    colors: ["gray", "black", "white"],
                    location: "Karachi",
                    topspeed: "180 Km/H",
                    price: "9 M"
               },
               city: {
                img: "../css/images/tyotta/city.jpg", 
                  name: "City",
                conditon: "used",
                  model: 2020,
                  price: "4 M",
                  topspeed: 180,
                  location:  "Multan",
                  color: ["Silver", "Black", "Red"]
                },
               fit:{
                img: "../css/images/tyotta/fit.jpg", 
                    name: "Fit",
                    conditon: "used",
                    model: 2022,
                    price: "3.6 M",
                    topspeed: 180,
                    location:  "Karachi",
                    color: ["Yellow", "Black"]
                  },
                  freed:{
                    img: "../css/images/tyotta/freed.jpg", 
                    name: "Freed",
                    conditon: "used",
                  topspeed: 200,
                  location:  "Multan",
                    model: 2021,
                price: "3.2 M",
                 city:  "Lahore",
                color: ["Red", "White", "Gray"]
                  },
                  crz: {
                    img: "../css/images/tyotta/crz.jpg", 
                      name: "Honda CRZ",
                      conditon: "used",
                      model: 2020,
                      price: "5.4 M",
                      topspeed: 220,
                      location:  "Multan",
                      color: ["Silver", "Black","Red"]
                    },    
               }, 
            Suzuki:{
                swift: {
                    img: "../css/images/tyotta/swift.jpg", 
                    name: "Swift",
                    conditon: "new",
                    model: 2021,
                    price: "3.6 M",
                    location: "Karachi",
                    topspeed: "180 Km/H",
                    color: ["Silver", "Black","Red"]
                  },
                mehran: {
                    img: "../css/images/tyotta/mehran.jpg", 
                    name: "Mehran",
                    conditon: "new",
                    model: 2021,
                    price: "3.6 M",
                    location: "Karachi",
                    topspeed: "140 Km/H",
                    color: ["Silver", "Black","Red"]
                  },
                  jimmy: {
                    img: "../css/images/tyotta/jimmy.jpg", 
                    name: "Jimny",
                    conditon: "used",
                    model: 2020,
                    price: "6 M",
                    location: "Lahore",
                    topspeed: "180 Km/H",
                    color: ["Silver", "Black","Red"]
                  },
                  alto: {
                    img: "../css/images/tyotta/alto.jpg", 
                    name: "Alto",
                    conditon: "new",
                    model: 2022,
                    price: "2.5 M",
                    location: "Karachi",
                    topspeed: "140 Km/H",
                    color: ["Silver", "Black","Red"]
                  },
                  ignis: {
                    img: "../css/images/tyotta/lgnis.jpg", 
                        name: "Ignis",
                        conditon: "used",
                        price: "6.5 M",
                        location: "Islamabad",
                        topspeed: "180 Km/H",
                        color: ["Silver", "Black","Red"]
                      },  
                      vitara: {
                        img: "../css/images/tyotta/vitara.jpg", 
                            name: "Vitara",
                            conditon: "used",
                            model: 2020,
                            price: "5 M",
                            location: "Karachi",
                            topspeed: "200 Km/H",
                            color: ["Silver", "Black","Red"]
                          },
                          cultus: {
                            img: "../css/images/tyotta/cultus.jpg", 
                            name: "Cultus",
                            conditon: "new",
                            model: 2022,
                            price: "3.8 M",
                             location:  "Karachi",
                            color: ["Silver", "Black","Red"]
                          }     
            },
            Proton:{
                exora: {
                    img: "../css/images/tyotta/exora.jpg", 
                    name: "Exora",
                    conditon: "used",
                    model: 2020,
                    price: "5 M",
                    location: "Multan",
                    topspeed: "220 Km/H",
                    color: ["Silver", "Black","Red"]
                  },
                  x70: {
                    img: "../css/images/tyotta/x70.jpg", 
                    name: "X70",
                    conditon: "new",
                    model: 2022,
                    price: "8 M",
                    location: "Lahore",
                    topspeed: "160 Km/H",
                    color: ["Silver", "Black","Red"]
                  },
               iriz: {
                img: "../css/images/tyotta/lriz.jpg", 
                        name: "Iriz",
                        conditon: "new",
                        model: 2020,
                        price: "7 M",
                        location: "Lahore",
                        topspeed: "240 Km/H",
                        color: ["Silver", "Black","Red"]
                      },      
        },
        KIA:{
            sportage: {
                img: "../css/images/tyotta/sportage.jpg", 
                name: "Sportage",
                conditon: "new",
                model: 2021,
                price: "9 M",
                location: "Karachi",
                topspeed: "220 Km/H",
                color: ["Silver", "Black","Red"]
              },
              sorento: {
                img: "../css/images/tyotta/sorento.jpg", 
                    name: "Sorento",
                    conditon: "used",
                    model: 2020,
                    price: "4 M",
                    location: "Islamabad",
                    topspeed: "240 Km/H",
                    color: ["Silver", "Black","Red"]
                  },
                  kiaseltos: {
                    img: "../css/images/tyotta/rio.jpg", 
                        name: "Rio",
                        conditon: "used",
                        model: 2020,
                        price: "3 M",
                        location: "Karachi",
                        topspeed: "140 Km/H",
                        color: ["Silver", "Black","Red"]
                      },
                      kiapicanto: {
                        img: "../css/images/tyotta/picanto.jpg", 
                        name: "Picanto",
                        conditon: "used",
                        model: 2022,
                        price: "5 M",
                        location: "Lahore",
                        topspeed: "180 Km/H",
                        color: ["Silver", "Black","Red"]
                      }
            
        }
      }

 function sameFunction(value){
   let comapny_con = document.getElementById("card-width");
   comapny_con.innerHTML = "";
if(value == "All"){
  displayAll()
}



   let carsFilter = (cars[value]);
   for(var filterType in carsFilter){
      console.log(carsFilter[filterType])
      let filter = (carsFilter[filterType])
      let createDiv = document.createElement("div");
      createDiv.innerHTML = `<div class="card-container">
    
    
    <div class="image">
                <img src= ${filter.img} alt="">
            </div>
            
     <div class="text">
            ${filter.name}
        </div>       
        
        <div class="car-colours">...</div>
        
        <div class="top-speed">Top Speed <span class="main-color">${filter.topspeed}</span></div>

        <div class="price">Price : <span class="main-color">${filter.price}</span></div>
        <div class="features">
            Location
            <span class="span-features">
            <span class="main-color-features">${filter.location}</span>
            </span>
            </div>
            <div class="features">Condition <span class="main-color">${filter.conditon}</span></div>
            <div class="card-buttons">
            <button class="custom-btn hover">Add To Cart</button>
            <button class="custom-btn hover">Buy</button>
            </div>
            </div> `
            comapny_con.append(createDiv)
    }
    
};


function displayAll(){

    
    for(const key in cars){
        for(const key2 in cars[key]){
            const sedan = (cars[key][key2])
      
           const a = document.getElementById("card-width")
           const b =  document.createElement("div");
    b.innerHTML = `<div class="card-container">
    
    
    <div class="image">
                <img src= ${sedan.img} alt="">
            </div>
            
     <div class="text">
            ${sedan.name}
        </div>       
        
        <div class="car-colours">...</div>
        
        <div class="top-speed">Top Speed <span class="main-color">${sedan.topspeed}</span></div>

        <div class="price">Price : <span class="main-color">${sedan.price}</span></div>
        <div class="features">
            Location
            <span class="span-features">
            <span class="main-color-features">${sedan.location}</span>
            </span>
            </div>
            <div class="features">Condition <span class="main-color">${sedan.conditon}</span></div>
            <div class="card-buttons">
            <button class="custom-btn hover">Add To Cart</button>
            <button class="custom-btn hover">Buy</button>
            </div>
            </div> `
            a.append(b)
        };
        };
    };
    
    displayAll()



  for(var key in cars){
              let options =  (key);
              let createOptions = document.createElement("option");
              createOptions.text = `${options}`
              createOptions.value = `${options}`
              let companyOptions = document.getElementById("companyName");
              companyOptions.appendChild(createOptions);
            }


function userSearch(){
  let userVal = document.getElementById("SearchValue").value.toLowerCase();
  // let start = cars[key][userVal];
  for(var key in cars){
    let filter = cars[key][userVal];
      console.log([filter].name)
    
  }
    
    /*
    const oldDiv = document.getElementById("card-width")
    let createDiv = document.createElement("div"); 
    createDiv.innerHTML = `
    <div class="card-container">
    
    
    <div class="image">
                <img src= ${filterCar.img} alt="">
            </div>
            
     <div class="text">
            ${filterCar.name}
        </div>       
        
        <div class="car-colours">...</div>
        
        <div class="top-speed">Top Speed <span class="main-color">${filterCar.topspeed}</span></div>

        <div class="price">Price : <span class="main-color">${filterCar.price}</span></div>
        <div class="features">
            Location
            <span class="span-features">
            <span class="main-color-features">${filterCar.location}</span>
            </span>
            </div>
            <div class="features">Condition <span class="main-color">${filterCar.conditon}</span></div>
            <div class="card-buttons">
            <button class="custom-btn hover">Add To Cart</button>
            <button class="custom-btn hover">Buy</button>
            </div>
            </div>`
oldDiv.innerHTML = "";
oldDiv.appendChild(createDiv)
*/
    }

  // for(var key in cars){
  //   for(var keys in cars[key])
  //   console.log(cars[key][keys])
  // }

// function details(){
//   let a = document.getElementById("card-width");
//   console.log(a)
//   a.addEventListener("click", (e)=>{
//     console.log(":hy" + e.target)

//   })
// }


  