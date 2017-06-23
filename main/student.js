let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass)
{
	Person.call(this,name,age)
	Student.klass=klass
}
Student.prototype.introduce=function()
{
	return (Person.prototype.introduce.apply(this)+" I am a Student. "+"I am at Class "+this.klass+".")
}