$(document).ready(function () {
    $("#inputId1").change(handleEvent1);
});

var nextItem = '<div class="somethingtoDo"><input type="checkbox" maxlength="40"><label>("")</label><button></button></div>';

function handleEvent1() {
    $("#Mainbox").append(nextItem);
}