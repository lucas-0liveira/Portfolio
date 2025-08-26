var phone = document.getElementById("phone");
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.span-required');
const CV = document.getElementById('CV');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//Evento para Abrir o curriculum em PDF
CV.addEventListener("click", () =>{ 
    window.open("Curriculum.pdf"); // Usa o nome do arquivo para abrir o curriculum em PDF
});

emailInput.addEventListener('input', () => { //evento para digitar o email de forma correta com as regras
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/;
    
    if (emailInput.value === ""){
        errorMessage.classList.remove('show-error'); // Esconde a mensagem se o campo está vazio
    }
    else if (emailPattern.test(emailInput.value)) {
        errorMessage.classList.remove('show-error'); // Remove a visibilidade do erro
        console.log('Email válido');
    } else {
        errorMessage.classList.add('show-error'); // Exibe a mensagem de erro
        console.log('Email inválido');
    }
});

//evento para digitar o número de celular de forma correta com as regras
phone.addEventListener("input", () => { 
    //Remover os caracteres não númericos usando a expressão regular /\D/g e limitar a 11 Dígitos.
    var LimparValor = phone.value.replace(/\D/g, "").substring(0,11);

    //Dividir a string em um array de caracteres individuais 
    var numerosArray = LimparValor.split("");

    //Criar variável para receber o número formatado 
    var numeroFormatado = "";

    //Ex:.(15) 94576-8910
    //Acessa o IF quando a quantidade de números é maior do que zero
    if(numerosArray.length > 0){
        //Formatar o DD e concatenar o valor 
        //Slice - extrair uma parte do array 
        //Join - unir os elementos do array em uma única string
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }

    //Acessa o IF quando a quantidade de números é maior do que dois
    if(numerosArray.length > 2){
        numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`; 
    }

    //Acessa o IF quando a quantidade de números é maior do que dois
    if(numerosArray.length > 7){
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`; 
    }

    //Enviar para o campo o número formatado
    phone.value = numeroFormatado;
});

//Lading Page: Cards dos Projetos Estilo Carrosel
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // Paginação
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      DynamicBullets: true,
    },
  
    // Navegação das setas
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Breakpoints Responsivo
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });