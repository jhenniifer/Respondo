let toSignIn = document.querySelectorAll('.to__signin');


// switch to the sign in page
toSignIn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        // window.location.href = 'signin.html';
        console.log("clicked")
        window.open('/html/signin.html', '_blank');
    })
}); 










