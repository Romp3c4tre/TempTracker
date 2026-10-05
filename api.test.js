const claveApi = 'f9624f737ffe4d409f2182353262809';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?
q=${ciudad}&lang=${idioma}&key=${claveApi}`;

async function probarApi() {
    const response = await fetch(apiClimaActual);
    let data = await response.json();
    
    console.log(data.location.localtime);

}

probarApi();