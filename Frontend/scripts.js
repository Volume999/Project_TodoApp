$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    function modify_modal(title, description, action) {
        title.setAttribute("contenteditable", action == "Edit" ? "true" : "false");
        description.setAttribute("contenteditable", action == "Edit" ? "true" : "false");
        document.getElementById("edit_button").textContent = action == "Edit" ? "Save" : "Edit";
    }
    document.getElementById("edit_button").addEventListener('click', function() {
        var title = document.getElementById("task_details").getElementsByTagName("h4");
        var description = document.getElementById("task_details").getElementsByTagName("p");
        modify_modal(title[0], description[0], this.textContent);
    })
    
    document.querySelector(".modal-trigger").addEventListener('click', function() {
        var title = document.getElementById("task_details").getElementsByTagName("h4");
        var description = document.getElementById("task_details").getElementsByTagName("p");
        title[0].setAttribute("contenteditable", "false");
        description[0].setAttribute("contenteditable", "false");
        document.getElementById("edit_button").textContent = "Edit";
        title[0].textContent = this.textContent;
        description[0].textContent = "Description";
    })
});