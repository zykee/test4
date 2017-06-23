let Person = require('./person')
// Write your code here
module.exports = Student
function Student(name,age,klass)
{
	Person.call(this,name,age)
	tihs.klass=klass
}
Student.prototype.Student()
{
	return Person.prototype.introduce.apply(this)+(". I am at Class "+this.klass+".")
}