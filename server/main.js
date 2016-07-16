//server


Meteor.methods({
	'insert':function(deptt,desc,hod){
		check(deptt, String);
		check(desc, String);
		check(hod, String);
		DataBase.insert({name:deptt, description:desc, hod:hod});
			},
	
	'tenure':function(first,last){
		check(first, Number);
		check(last, Number);
		Students.insert({first:first, last:last});
		number= last-first;
		console.log(number);
			}
});
Meteor.publish('department',function(){
			return DataBase.find();
			});
Meteor.publish('year',function(){
			return CourSes.find();
			});
Meteor.publish('data',function(){
			return Students.find();
			});

