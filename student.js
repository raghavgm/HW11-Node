function Student(name,gender,grade,GPA,detentions,sleepingInClass,catchPhrase) {
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;

	this.canStudentHaveFun = function() {

		if (detentions<10 && GPA>2) {
			console.log(this.name + "can't have fun!");
		};
	};

};



prompt.start();

prompt.get(["name","gender","grade","GPA","detentions","sleepingInClass","catchPhrase"], function (err, result){

var student1 = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);

student1.canStudentHaveFun();

});

module.exports = Student;

