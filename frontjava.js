var rowadd = 0;

function sendNote() {
	var noteValue = document.getElementById('Notas').value;
	var tagValue = document.getElementById('Tags').value;
	document.getElementById('Notas').value = "";
	document.getElementById('Tags').value = "";
    var table = document.getElementById("notesTable");
    var row = table.insertRow(rowadd);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = noteValue;
    cell2.innerHTML = tagValue;
    cell3.innerHTML = ("Edit");
    cell4.innerHTML = ("Delete");


	rowadd+=1;

}