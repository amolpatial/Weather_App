const inputE=document.querySelector('#inputEl')
const searchCity=document.querySelector('#search')
const eleMent=document.querySelector('.container')
const iconContainr=document.querySelector('#icon')
const tempRature=document.querySelector(`#temp`)
const desC=document.querySelector('#desc')

searchCity.addEventListener('click',()=>{
    const inputValue=inputE.value;
const apiKey=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=10c54dc611af5c00b42b6c953cc38fbe&units=metric`
fetch(apiKey).then((res)=>{
res.json().then((data)=>{
const deS=data.weather[0].description
console.log(deS)
const{temp,humidity}=data.main;
console.log(temp,humidity)
const imageEl = data.weather[0].icon;
const iconEl = `https://openweathermap.org/img/wn/${imageEl}@2x.png`      
iconContainr.src=iconEl ;
desC.innerHTML=deS;
tempRature.innerHTML=`${temp}°C`;

})

})

})
inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("search").click();
    }
});
