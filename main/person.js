// Write your code here
module.exports = Person
function Person(name,age)
{
	this.name="Tom"
	this.age=18
}
Person.prototype.introduce=function()
{
	alert("My name is"+ this.name". I am"+this.age"years old.")	
}