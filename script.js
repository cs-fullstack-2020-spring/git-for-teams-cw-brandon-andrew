let main = () =>{
    let btnClicked = document.getElementById("submit");
    let userName = document.getElementById("name");
    let userEmail = document.getElementById("email");
    let userMessage = document.getElementById('message')
    btnClicked.addEventListener("click",(event) =>{
        
        // event.preventDefault;
        
        alert(`Your form has been submitted`);
        console.log(userEmail.innerHTML);
        // let userInfo{
        //     name:userName.innerText,
        // }
        event.preventDefault();
    })
}
main();