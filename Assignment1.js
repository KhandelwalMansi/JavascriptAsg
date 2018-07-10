//Using For loop:
var arrayOfNames = ["Mansi", "Aditya", "Apoorv", "Advait","Vidhati", "Amar", "Shivee", "Shreyas"];
var inputName = prompt("Enter name");
var found = false;
for(i=0; i<arrayOfNames.length;i++)
{
	if(arrayOfNames[i] == inputName)
	{
		alert("Allow access!")
		found = true
	}
}
if(found == false)
arrayOfNames.push(inputName);

//Using indexOf:
var arrayOfNames = ["Mansi", "Aditya", "Apoorv", "Advait","Vidhati", "Amar", "Shivee", "Shreyas"];
var inputName = prompt("Enter name");
if(arrayOfNames.indexOf(inputName) == -1)
	arrayOfNames.push(inputName);
else
	alert("Allow access!");