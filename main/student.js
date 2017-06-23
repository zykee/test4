let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass)
{
	person.call(this,name,age)
	tihs.klass=klass
}
Student.prototype=new Person() 
Student.prototype.showklass()
{
	alert(". I am at Class "+this.klass+".")
}