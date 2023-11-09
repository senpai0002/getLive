// This functions will be called from the input page 'inputInfo.html'
// It basically helping in storing inputs in localStorage for passing the values to another webpage

function displayInfo(){
    var name = document.getElementById("name").value;
    localStorage.setItem("vname",name)
    var email = document.getElementById("emailId").value;
    localStorage.setItem("vemail",email);
    var college = document.getElementById("collegeName").value;
    localStorage.setItem("vcollege",college);
    var workingas = document.getElementById("workingAs").value;
    localStorage.setItem("vworkingas",workingas);
    var qualification = document.getElementById("qualification").value;
    localStorage.setItem("vqualification",qualification);
    var fplans = document.getElementById("futurePlans").value;
    localStorage.setItem("vfplans",fplans);
    return false;
}


// This is used to retrieve the values from localStorage and assinging it in new webpage 'display.html'

document.getElementById("nameValue").innerHTML=localStorage.getItem("vname")
document.getElementById("emailValue").innerHTML=localStorage.getItem("vemail")
document.getElementById("collegeValue").innerHTML=localStorage.getItem("vcollege")
document.getElementById("qualificationValue").innerHTML=localStorage.getItem("vqualification")
document.getElementById("workingAsValue").innerHTML=localStorage.getItem("vworkingas")
document.getElementById("fPlansValue").innerHTML=localStorage.getItem("vfplans")