$(document).ready(function () {
    $("#inputId1").change(handleEvent1);
});
make a template or template fragment. takes the html fragment and makes a DOM object
var template = {
    todoItem:
        $("<div class="todo-item wide">)" +
         "<span class="toggle">&gt;</span>" +
       "<label>" + label + "</label>" +
         "</div>"
}

var app = {
    init: function()    {
        $(".new-todo").keypress(app.addNewitem);
        $(".todo-list").on("click", ".toggle", app.toggleStatus);        
    },
addNewitem: function(ev)    {
    //when keypress is enter
    if(ev.which === 13) {
    //get the new todo label
        var label = $(".new-todo").val();
        //create new todo item and append
       var newItem = $(template.todoItem).clone
        //update the label
    newItem.find("label").text(label)
    set the text of it to be the new label
        //append to list
        .appendTo(".todo-list");
        //reset value to blank
        $(".new-todo").val(' ');
        app.updateRemaining();
    }
},
//var app = {
//    init: function() {
//        $("new-todo")
//},
//    showAll: function () {
//        $(".todo-item").show();  
//},
//    showActive: function() {
//        $(".todo-item").not(".complete").show();
//        $("todoItem.complete").hide();
//},
//    showComplete: function() {
//        $(".todo-item").not(".complete").hide();
//        $("todoItem.complete").show();
//    }
//}
//update the label to the new value
todo.find("label").text(value);
//hide the input

//storage//
storeList: function() {
   var listItem =$(".todo-item");
    var storeList = [];
    listItems.each(function() {
        var item = {
            label: $(this).find("label").text(label)
            status: $(this).hasClass("complete") ? "complete" : "active"
        };
            //append to list
            storeList.push(item);
    }),
        localStorage.list
        {
            "label": "First todo";
            "status": "Active";
        }

},
    loadList: function {
        
    }
