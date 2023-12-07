window.onload = () => {  

    let form = document.getElementById("myform")
    let fullname = document.getElementById("fullname")
    let email = document.getElementById("email")
    let number = document.getElementById("phonenumber")
    let cares = document.getElementsByName("cares")
    let newsletter = document.getElementById("newsletterCB")
    let errorMessages = document.getElementById("errormessages")


    let error = []
    form.addEventListener("submit", (e)=>{
        error = []
        errorMessages.innerText = ''
        validatefullname()
        validateemail()
        validatecares()
        validatenewsletter()

        if(error.length > 0){
            for(err of error){
                errorMessages.innerText += err + '\n'
            }
            e.preventDefault()
        }else{
            alert('Form is submited')
        }
        
    })

    function isempty(value){
        if(value === ''){
            return true
        }
        return false
    }
    
    function validatefullname(){
        let value = fullname.value.trim()
        if(value === ''){
            error.push("Please enter your Full Name")
        }
        if(value.length < 5){
            error.push("Full Name must be at least 5 characters")
        }
    }

    function validateemail(){
        let flag = 0
        let value = email.value.trim()
        if(isempty(value)){
            error.push("Email must be filled")
            flag++
        }

        let a=0
        let count=0

        while(a < value.length){
            if(value[a]=='@'){
                count++
            }
            a++
        }

        if(count != 1 && flag==0){
            error.push("Wrong email format")
        }
    }
    
   
    function validatecares(){
        let flag=0
        for(a of cares){
            if(a.checked){
                return
            }
            if(flag==0){
                error.push("You must select type of cares")
                flag++
            }
            
        }
    }

    function validatenewsletter(){
        if(newsletter.checked){
            return
        }
        error.push("You must follow our newsletter")
    }

}

