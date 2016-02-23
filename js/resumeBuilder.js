/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var bio = {
	 "name": "Rachel Louden", 
	 "role":"Application Administrator",
	 "contacts": {
		"mobile": "704-555-1212",
		"email":"rjlouden@uncc.edu",
		"github":"rjlouden",
		"location":"Charlotte, NC"
	},
	"bioPic":"./images/mountain-flowers-400x300.jpg",
	"skills": ["ldap", "powershell", "python","file sharing"],
	"welcome":"A jack of all trades.",
	"displayContacts": function(div){
		var formattedHTMLmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedHTMLgithub = HTMLgithub.replace("%data%",bio.contacts.github)
		var formattedHTMLlocation = HTMLlocation.replace("%data%",bio.contacts.location);
 
		$(div).append(formattedHTMLmobile);
		$(div).append(formattedEmail);
		$(div).append(formattedHTMLgithub);
		$(div).append(formattedHTMLlocation);
	},
	"displaySkills":  function(){
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
			for (skill in bio.skills){
				$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
			}
		}
	},
	"display" : function(){
		//Name and Role
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName); 
	
		bio.displayContacts("#topContacts");
	
		//Picture and Message
		$("#header").append(HTMLbioPic.replace("%data%",bio.bioPic));
		$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcome));
	
		//Skills
		bio.displaySkills(); }
};
			
var work = {
	"jobs":[
	{
		"employer": "UNC Charlotte",
		"url": "http://www.uncc.edu",
		"dates": "2001 - present",
		"location": "Charlotte, NC",
		"title": "IT Administrator",
		"description": "Supported systems at UNC Charlotte."
	},
	{
		"employer": "UNC Greensboro",
		"url": "http://www.uncg.edu",
		"dates": "1996 - 2001",
		"location": "Greensboro, NC",
		"title": "Server Administrator",
		"description": "Supported systems at UNC Greensboro."
	}
	],
	"display":  function(){
		for (var job in work.jobs){
			var thisJob = work.jobs[job]
			
			var formattedHTMLworkEmployer = HTMLworkEmployer.replace("%data%",thisJob.employer);
		    formattedHTMLworkEmployer = formattedHTMLworkEmployer.replace("#",thisJob.url)
	        var formattedHTMLworkTitle = HTMLworkTitle.replace("%data%", thisJob.title);
	
    	    $("#workExperience").append(HTMLworkStart);
	        $(".work-entry:last").append(formattedHTMLworkEmployer+formattedHTMLworkTitle);
	        $(".work-entry:last").append(HTMLworkDates.replace("%data%",thisJob.dates));
	        $(".work-entry:last").append(HTMLworkLocation.replace("%data%",thisJob.location));
	        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",thisJob.description));
		}
	}
};

var projects = {
	"project":[
	{
		title: "Attendance Checker",
		dates: "2016",
		description: "Tool to learn how to refactor code.",
		photo: "images/attendance.png",
		url: "../ud989-school-attendance/index.html"
		
	},
	{
		title: "Cat Clicker",
		dates: "2016",
		description: "Tool to Learn the Model Octopus View model of coding",
		photo: "images/CatClicker.png",
		url: "../cat-clicker/index.htm"
	},
	{
		title: "This Resume",
		dates: "2016",
		description: "Tool to Learn JavaScript",
		photo: "images/resume.png",
		url: "./index.html"
	}],
	columns: ["left-col","center-col"],
	"display" : function(){
		i=0;
		numProjects=projects.project.length;
		projectArray = [];
		for(var proj in projects.project){
			formattedPhoto="";
			var thisProject = projects.project[proj];
		//	if(i===0){$("#projects").append('<div class="row">')}
			var start = HTMLprojectStart.replace("%data%",this.columns[i]);
			var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%",thisProject.title);
			formattedHTMLprojectTitle = formattedHTMLprojectTitle.replace("#",thisProject.url);
			var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%",thisProject.dates);
			var formattedHTMLprojectDescription= HTMLprojectDescription.replace("%data%",thisProject.description);
			if (thisProject.photo){
				var formattedPhoto = HTMLprojectImage.replace("%data%",thisProject.photo);
			}
			projectArray.push(start+formattedHTMLprojectTitle+formattedHTMLprojectDates+formattedHTMLprojectDescription+formattedPhoto+'</div>');
		//	$(".project-entry:last").append(formattedHTMLprojectTitle+formattedHTMLprojectDates+formattedHTMLprojectDescription+formattedPhoto);
		//	if(i===1){$("#projects").append('</div>')}
			++i;
			if (i===2) {i=0;};
		}
		if (projectArray.length===1){
			var myHTML = '<div class="row" style="display:flex">';
			myHTML = myHTML+projectArray[0] +'</div>';
			$("#projects").append(myHTML)
		}
		else{
			for (i=0;i<projectArray.length%2;++i){
				var myHTML = '<div class="row" style="display:flex">';
				myHTML = myHTML+projectArray[i*2];
				myHTML = myHTML +projectArray[i*2+1];
				myHTML = myHTML+'</div>';
				$("#projects").append(myHTML);
			}
			if (projectArray.length%2 ===1){
				var myHTML = '<div class="row" style="display:flex">';
				myHTML = myHTML+projectArray[projectArray.length-1] +'</div>';
				myHTML = myHTML.replace("left-col","center-project");
				console.log(myHTML);
				$("#projects").append(myHTML)
			}
		}
		
	}
};

var education = {
	"schools":[
		{
			"name": "UNC Charlotte",
			"dates": "nineteen nineties",
			"major": ["Math","Computer Science"],
			"degree": "BS",
			"url" : "http://www.uncc.edu",
			"location" : "Charlotte, NC"
		}
	],
	"display": function(){
		for (var s in education.schools){
			var thisSchool = education.schools[s];
			
			$("#education").append(HTMLschoolStart);
		    var formattedHTMLschoolName = HTMLschoolName.replace("%data%",thisSchool.name);
		    var formattedHTMLschoolName = formattedHTMLschoolName.replace("#",thisSchool.url);
		    var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%",thisSchool.major);
		    var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", thisSchool.dates);
		    var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", thisSchool.degree);
 
	        $(".education-entry:last").append(formattedHTMLschoolName+formattedHTMLschoolDegree);
	        $(".education-entry:last").append(formattedHTMLschoolDates+formattedHTMLschoolMajor);
        }
	}
};

var onlineEducation = {
	"schools":
	[
		{
			"dates": "2010-2016",
			"degree": "No Degree",
			"school": "Udacity",
			"url"   : "http://www.udacity.com",
			"courses": [ 
			{
				"URL":"https://www.udacity.com/courses/ud201",
				"title":"Intro to Inferential Statistics"
			},
			{
				"URL":"https://www.udacity.com/courses/ud827",
				"title":"Intro to Descriptive Statistics"
			},
			{
				"URL":"https://www.udacity.com/courses/ud304",
				"title":"Intro to HTML and CSS"
			},
			{
				"URL":"https://www.udacity.com/courses/ud804",
				"title":"JavaScript Basics"
			},
			{
				"URL":"https://www.udacity.com/courses/ud775",
				"title":"How to Use Git and GitHub"
			},
			{
				"URL":"https://www.udacity.com/courses/cs262",
				"title":"Programming Languages"
			}]
		}
	],
	"display": function(){
			if (onlineEducation.schools.length==0){
				return
			}
			
			$("#education").append(HTMLonlineClasses);
		 
		    for (var s in onlineEducation.schools){
				var thisSchool = onlineEducation.schools[s];
			
			    var schoolTitle = HTMLonlineTitle.replace("%data%",thisSchool.school);
			    schoolTitle = schoolTitle.replace("#",thisSchool.url)+
			    HTMLonlineDegree.replace("%data%", thisSchool.degree);

			    $("#education").append(HTMLschoolStart);
			    $(".education-entry:last").append(schoolTitle);
			    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", thisSchool.dates));
			
			    $(".education-entry:last").append(HTMLonlineCourseList);
			    for (var i=0;i<thisSchool.courses.length;++i){
					var thisCourse = thisSchool.courses[i];
				    var courseHTML = HTMLonlineURL.replace("%data%",thisCourse.title);
				    courseHTML = courseHTML.replace("#",thisCourse.URL);
				    $("#onlineClass").append(courseHTML);
				
			    }
			}
		}
};

var locationImages = [];
locationImages["Greensboro, NC, USA"]="./images/Greensboro.jpg";
locationImages["Charlotte, NC, USA"]="./images/Charlotte_Skyline_Night_970x550.jpg";
locationImages["New York, NY, USA"]="./images/statue.jpg";
 
function inName(){
	var names = bio.name.trim().split(" ");
	names[0] = names[0][0].toUpperCase()+names[0].slice(1).toLowerCase();
	
	return names[0]+" "+names.slice(1).join(" ").toUpperCase();
    
}

bio.display();
work.display();
projects.display();
education.display();
onlineEducation.display();

$("#mapDiv").append(googleMap);
bio.displayContacts("#footerContacts");
$("#main").append(internationalizeButton);

 
 
 
