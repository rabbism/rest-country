const loadData = () => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => displayData(data))
}
loadData();
const displayData = countries => {
    console.log(countries);
    // console.log(datas);
    const addSec =document.getElementById('display-info')
    countries.forEach(countrie => {
        const div = document.createElement('div')
        div.classList.add("mystyle");
        div.innerHTML = `
        <h2>${countrie.name}</h2>
        <p>${countrie.capital}</p>
        <button onclick="countDetails('${countrie.name}')">Details</button>
        `
        addSec.appendChild(div);
    });
}
const countDetails = name =>{
    // console.log(name)

    const url =`https://restcountries.eu/rest/v2/name/${name}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then (data => displayDetails(data[0]))
}
const displayDetails = data => {
    console.log(data)
    const detailsSection = document.getElementById("detail-info")
    detailsSection.textContent = '';
    const div = document.createElement('div')
    div.classList.add("countresdetails");
    div.innerHTML = `
    <img src="${data.flag}" alt="Girl in a jacket" width="500">
    <h3>${data.name}</h3>
    <h3>Native Name :${data.nativeName}</h3>
    <h3>Population :${data.population}</h3>
    <h3>Region : ${data.region}</h3>
    `
    detailsSection.appendChild(div)
}