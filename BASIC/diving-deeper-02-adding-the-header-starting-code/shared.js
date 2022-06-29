var backdrop=document.querySelector('.backdrop');
var modal=document.querySelector('.modal');
var plansButtons=document.querySelectorAll('.plan button');

var toggleButton=document.querySelector('.toggle-button');
var mobileNav=document.querySelector('.mobile-nav');


console.dir(plansButtons);


for(var i=0;i<plansButtons.length;i++)
{

    plansButtons[i].addEventListener('click',function(){

         modal.style.display='block';
         backdrop.style.display='block';
    });
}

var clickNoButton=document.querySelector('.modal__action--negative');
console.dir(clickNoButton);


clickNoButton.addEventListener('click',closeModal);

backdrop.addEventListener('click',function(){
    mobileNav.style.display='none';
    closeModal();

});

function closeModal(){

    modal.style.display='none';
    backdrop.style.display='none';
}


toggleButton.addEventListener('click',function(){


    mobileNav.style.display='block';
    backdrop.style.display='block';

});