let countryCode = [
    {
        name: 'Germany',
        code: 'DE'
    },
    {
        name: 'China',
        code: 'CH'
    },
    {
        name: 'India',
        code: 'IN'
    },
    {
        name: 'Italy',
        code: 'IT'
    },
    {
        name: 'Kyrgyzstan',
        code: 'KG'
    },
    {
        name: 'Japan',
        code: 'JP'
    }
];

function updateSelect(){
    let selectElement = document.getElementById('select').value;

    let country = countryCode.find(a => a.name === selectElement);
    if (country){
        document.getElementById('selectedCountry').textContent = country.name;
        document.getElementById('countryCode').textContent = country.code;
    }else{
        document.getElementById('selectedCountry').textContent = '';
        document.getElementById('countryCode').textContent = '';
    }
}
document.getElementById('select').addEventListener('change', updateSelect);