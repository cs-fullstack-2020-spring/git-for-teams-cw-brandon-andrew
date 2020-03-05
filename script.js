let main = () =>{
    //Define Variables 
    let btnClicked = document.getElementById("submit");
    let userName = document.getElementById("name");
    let userEmail = document.getElementById("email");
    let userMessage = document.getElementById('message')

    //Added an event listener to the send button
    btnClicked.addEventListener("click",(event) =>{
        
        
        
        // Debugging statement
        // console.log(userEmail.value);

        //Put the name, email, and message in an object literal notation format
        let userInfo = {
            name:userName.value,
            email:userEmail.value,
            message:userMessage.value,
        }
        
        /*Alert the user their information was submitted and shows the values they entered in the respective boxes */
        alert(`Your form has been submitted\n Name: ${userInfo.name}\n Email: ${userInfo.email}\n Message: ${userInfo.message}`)
        console.log(`Name: ${userInfo.name}\n Email: ${userInfo.email}\n Message: ${userInfo.message}`);
        //Keeps page from refreshing when pressing submit
        event.preventDefault();
    })
}
main();