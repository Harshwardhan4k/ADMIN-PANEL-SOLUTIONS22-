const navslide= () =>{
    const toggle = document.querySelector('.toggle');
    const nav =document.querySelector('.sidebarmenu');

    toggle.addEventListener('click',()=>{
        nav.classList.toggle('sidebarmenu-active')
    });
}

navslide();