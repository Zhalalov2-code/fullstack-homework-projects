let contact = [
    {
        Name: 'Bekzat',
        Phone: '0222344334'
    },
    {
        Name: 'Ularbek',
        Phone: '0550123456'
    },
    {
        Name: 'Nurjamal',
        Phone: '0777344334'
    },
    {
        Name: 'Guljamal',
        Phone: '0997344334'
    },
    {
        Name: 'Aibek',
        Phone: '0998767876'
    },
    {
        Name: 'Bekbolsun',
        Phone: '0229099000'
    },
    {
        Name: 'Aruuzat',
        Phone: '0222988888'
    }
];
function showContact(){
    let contacts = '';
    for (let i=0; i < contact.length; i++){
        contacts += `<div class="col-4 p-3">
        <div class="bg-secondary text-white">
            <p>${contact[i].Name}</p>
            <p>${contact[i].Phone}</p>
            <br>
        </div>
    </div>`;
    }
    document.getElementById('contact').innerHTML = contacts;
}
function searchContact(){
    let inputVal = document.getElementById('name').value;
    let result = contact.filter((item) => item.Name.toLowerCase().includes(inputVal.toLowerCase())
    || item.Phone.includes(inputVal));
    console.log(result);
    if (result.length > 0){
        let contacts = '';
        for (let i=0; i < result.length; i++){
            contacts += `<div class="col-4 p-3">
            <div class="bg-secondary text-white">
                <p>${result[i].Name}</p>
                <p>${result[i].Phone}</p>
                <br>
            </div>
        </div>`;
        }
        document.getElementById('contact').innerHTML = contacts;
    }else{
        contacts = `<p class="text-center">Контакты не найдены</p>`;
    }
}
