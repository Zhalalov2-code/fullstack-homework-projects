let toggletheme = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-mode');
    document.querySelector('.div1').classList.add('dark-mode');
    document.querySelector('.div2').classList.add('dark-mode');
    toggletheme.checked = true;
    document.querySelector('.div3').style.display = 'none';
    document.querySelector('.div4').style.display = 'block'
}else{
    document.querySelector('.div3').style.display = 'block';
    document.querySelector('.div4').style.display = 'none';
}

toggletheme.addEventListener('change', function(){
    if (toggletheme.checked){
        document.body.classList.add('dark-mode');
        document.querySelector('.div1').classList.add('dark-mode');
        document.querySelector('.div2').classList.add('dark-mode');
        document.querySelector('.div4').style.display = 'block';
        localStorage.setItem('theme', 'dark');
        document.querySelector('.div3').style.display = 'none';
    }else{
        document.body.classList.remove('dark-mode');
        document.querySelector('.div1').classList.remove('dark-mode');
        document.querySelector('.div2').classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        document.querySelector('.div3').style.display = 'block';
        document.querySelector('.div4').style.display = 'none';
    }
})
