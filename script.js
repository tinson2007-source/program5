async function addnote() {
    let present = 0;
    let absent = 0;

    function markattendance(){
       let name = document.getElementById("name").value;  
       let status = document.getElementById("status").value;  
    }
    if(name==""){
        alert("enter student name.");
        return;
    }
     document.getElementById("list").innerHTML+=
     "<dic class= 'student'>"+name+"-"+status+"</div>";

     if(status=="present")
        present++;
    else
        absent++;
        document.getElementById("count").innerHTML=
        "present"+present+"|absent:"+absent;
        document.getElementById("name").value="";
}