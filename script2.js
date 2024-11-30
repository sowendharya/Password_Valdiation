const pass=document.querySelector(".pass-feild input");
const eye=document.querySelector(".pass-feild i");
const list=document.querySelectorAll(".requirement-list li");

const regression=[
    {regex:/.{8,}/ ,index:0},
    {regex:/[0-9]/,index:1},
    {regex:/[a-z]/,index:2},
    {regex:/[^a-zA-z0-9]/,index:3},
    {regex:/[A-Z]/,index:4},
];

pass.addEventListener("keyup",(e)=>{
    regression.forEach(item => {
        const isValid=item.regex.test(e.target.value);
        const requirementlist=list[item.index];

        if(isValid){
            requirementlist.classList.add("valid");
            requirementlist.firstElementChild.className="fa-solid fa-check";
        }
        else{
            requirementlist.classList.remove("valid");
            requirementlist.firstElementChild.className="fa-solid fa-circle";
        }
    });
})

eye.addEventListener("click", () => {
    // Toggle the password input type between "password" and "text"
    pass.type = pass.type === "password" ? "text" : "password";

    // Update the eye icon class based on the password input type
    eye.className = `fa-solid fa-eye${pass.type === "password" ? "" : "-slash"}`;
});