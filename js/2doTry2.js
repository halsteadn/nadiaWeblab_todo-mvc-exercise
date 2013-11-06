$(document).ready(function () {
    $("#inputId1").change(handleEvent1);
});

var nextItem = '<div class="somethingtoDo"><input type="checkbox" maxlength="40"><label>" CANT BE DONE "</label><button></button></div>';



function handleEvent1() {
    $("#Mainbox").append(nextItem);
}
//
//function getSomethingdone() {
//    $(".labelText-complete").val("");
//} 
//
//function getSomethingdone() {
//    $(".somethingtoDo").val("");
//} 
//
//function getSomethingdone() {
//    $(label).val("");
//} 
//
//function getSomethingdone() {
//    $("#Mainbox").val("");
//} 
//
//function getSomethingdone() {
//    $(".todoInputtext").val("");
//} 
//the below is in-class work with Ben 10-30-13:

//function Todo(id, options) {
//    this.items =[];
//    this.options = options {ns: "todo-item"}; 
//    this.el = $(id);
//    this.input = this.el.find('input');
//    this.list = this.el.find(".container");
//    this.attach();
//}
//    
//new TodoItem("todo", {ns: "item"});
//<div id="todo">
//    <div class="container">
//        <div class="list-item"></div>
//    </div>
//</div>
//        
///*my special todo app animations: (menu icons) crumple, shred, burn, zap, flush. css3 transitions/transforms*/
//        
//function TodoItem(item, options) {
////    if(!this instanceof TodoItem) return new
//    this.el = $("<div><span>"+item+"</span></div>");
//    this.remove = function(){}
//    this.showRemove = function(){}
//}
//TodoItem.prototype.attachEvents = function() {
//    this.list
//    .on("click", "todo", function(){
//    })
//    .on("click", "todo .remove", function(){
//    })
//    .on("mouseover", "todo", function(){
//    }
//    .on("mouseout", "todo", function(){
//    }
////el = shorthand for element
//TodoItem.prototype.addItem = function(item) {
//    var item = new TodoItem(item);
//    this.items.push(item);
//}









