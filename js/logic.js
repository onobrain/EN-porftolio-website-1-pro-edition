// typing animation
var typed = new Typed(".typing",{
    // need change
    strings:["first skill" , "second skill","third skill"],
    typeSpeed:100,
    BackSpeed:200,
    loop:true,
});

// aside : 
const nav = document.querySelector(".nav"),
    navlist = nav.querySelectorAll('li'),
    totalNavList = navlist.length,
    allSections = document.querySelectorAll('.section'),
    totalSections = allSections.length;

    for(let i = 0; i<totalNavList ; i++){

        const a = navlist[i].querySelector("a")

        a.addEventListener("click",function(){
            for(let i = 0 ; i < totalSections ; i++){
                allSections[i].classList.remove("back-section");
                aside.classList.toggle("open")
                navTogglerBtn.classList.toggle("open")
            }

            for(let j = 0 ; j<totalNavList ;j++ ){
                if(navlist[j].querySelector("a").classList.contains("active")){
                    allSections[j].classList.add("back-section")
                }
                navlist[j].querySelector("a").classList.remove("active")
            }    

            this.classList.add("active");
            showSection(this);
        })
        function showSection(element){
            for(let j = 0 ; j < totalSections ; j++){
                allSections[j].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector(`#${target}`).classList.add("active");
        }
        function updatenav(element){
            for(let i = 0 ; i < totalNavList ; i++){
                navlist[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if (target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
                    navlist[i].querySelector("a").classList.add("active");
                }
            }
        }
        document.querySelector(".worktogether").addEventListener("click",()=>{
            const sectionIndex = this.getAttribute("data-section-index");
            showSection(this);
            updatenav(this);
        })
    }
    // nav toggler btn  : 
    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");
          navTogglerBtn.addEventListener("click",()=>{
            asideSectionTogglerBtn()
          })
          function asideSectionTogglerBtn(){
            aside.classList.toggle("open")
            navTogglerBtn.classList.toggle("open")
          }
// send email
function sendEmail(){
    var params = {
        from_name : document.getElementById("name").value,
        subject_id : document.getElementById("subject").value,
        email_id : document.getElementById("email").value,
        message_id : document.getElementById("message").value,
    }
    emailjs.send("service_0rc23ee","template_na80qpo",params).then(function(res){
        alert("Success!" + res.status);
    })
}  