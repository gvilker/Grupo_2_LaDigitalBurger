const buscador = document.querySelector('.search-input');

    buscador.addEventListener('input', e => {
        searchUser(e.target.value.toLowerCase());
    });

    const searchUser = name => { 
    const users = document.querySelectorAll('.producto'); 

    users.forEach(user => {
        const userName = user.querySelector('.burger').textContent.toLowerCase(); 
        
        if (!userName.includes(name)) {
            user.style.display = 'none';
        } else {
            user.style.display = 'grid'; 
        }
    });
}