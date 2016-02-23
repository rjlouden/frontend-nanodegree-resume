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
	]
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
	]
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

var viewBio = {
	headerName : '<h1 id="name">%data%</h1>',
	headerRole : '<span class="title">%data%</span><hr>',
	bioPic : '<div><img src="%data%" class="biopic">',
	welcomeMsg : '<span class="welcome-message">%data%</span>',
	render : function(){
		var myBio = octopus.getMainBio();
		//Name and Role
		$("#header").prepend(this.headerRole.replace("%data%",myBio.role));
		$("#header").prepend(this.headerName.replace("%data%",myBio.name)); 
	
		this.renderContacts("#topContacts");
	
		//Picture and Message
		$("#header").append(this.bioPic.replace("%data%",myBio.bioPic));
		$("#header").append(this.welcomeMsg.replace("%data%",myBio.welcome));
	
		//Skills
		this.renderSkills();
	},
	skillsStart : '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
	HTMLskills : '<li class="flex-item"><span class="white-text">%data%</span></li>',
	renderSkills: function(){
		var mySkills = octopus.getSkills();
		if(mySkills.length > 0){
			$("#header").append(this.skillsStart);
			for (skill in mySkills){
				$("#skills").append(this.HTMLskills.replace("%data%",mySkills[skill]));
			}
		}
	},
	mobile : '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
	email : '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
	github : '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
	location : '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',
	renderContacts: function(div){
		var myContacts = octopus.getContacts();
		
		var formattedHTMLmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedHTMLgithub = HTMLgithub.replace("%data%",bio.contacts.github)
		var formattedHTMLlocation = HTMLlocation.replace("%data%",bio.contacts.location);
 
		$(div).append(this.mobile.replace("%data%",bio.contacts.mobile));
		$(div).append(this.email.replace("%data%",bio.contacts.email));
		$(div).append(this.github.replace("%data%",bio.contacts.github));
		$(div).append(this.location.replace("%data%",bio.contacts.location));
	}
};

var viewWork ={
	start : '<div class="work-entry"></div>',
	employer : '<a href="#">%data%',
	title : ' - %data%</a>',
	dates : '<div class="date-text">%data%</div>',
	location : '<div class="location-text">%data%</div>',
	description : '<p><br>%data%</p>',
	render : function (){
		myJobs = octopus.getJobs();
		if(myJobs.length === 0) {return;}
		
		for (var job in myJobs){
			
			var formattedEmployer = this.employer.replace("%data%",myJobs[job].employer);
		    formattedEmployer = formattedEmployer.replace("#",myJobs[job].url)
	        var formattedTitle = this.title.replace("%data%", myJobs[job].title);
	
    	    $("#workExperience").append(this.start);
	        $(".work-entry:last").append(formattedEmployer+formattedTitle);
	        $(".work-entry:last").append(this.dates.replace("%data%",myJobs[job].dates));
	        $(".work-entry:last").append(this.location.replace("%data%",myJobs[job].location));
	        $(".work-entry:last").append(this.description.replace("%data%",myJobs[job].description));
		}
	}
};

var viewEducation = {
	start : '<div class="education-entry"></div>',
	name : '<a href="#">%data%',
	degree : ' - %data%</a>',
	dates : '<div class="date-text">%data%</div>',
	location : '<div class="location-text">%data%</div>',
	major : '<em><br>Major: %data%</em>',
	"render": function(){
		mySchools = octopus.getSchools();
		for (var s in mySchools){
			var thisSchool = education.schools[s];
			
			$("#education").append(this.start);
		    var formattedName = this.name.replace("%data%",mySchools[s].name);
		    var formattedName = formattedName.replace("#",mySchools[s].url);
		    var formattedDegree = this.degree.replace("%data%", mySchools[s].degree);
 
	        $(".education-entry:last").append(formattedName+formattedDegree);
	        $(".education-entry:last").append(this.dates.replace("%data%", mySchools[s].dates));
			$(".education-entry:last").append(this.major.replace("%data%",mySchools[s].major));
        }
	}
	
};

var viewOnlineEd = {
	HTMLonlineClasses : '<h3>Online Classes</h3>',
	HTMLonlineTitle : '<a href="#">%data%',
	//var HTMLonlineDegree = '<div class="degree-text">%data%</div>';
	HTMLonlineDegree : ' - %data%</a>',
	HTMLonlineDates : '<div class="date-text">%data%</div>',
	HTMLonlineURL : '<a class="course-anchor" href="#">%data%</a>',
	HTMLonlineCourseList : '<em><br>Courses:</em><ul id="onlineClass" class="flex-box" text-Align = "left"></ul>',
	
	"render": function(){
			var mySchools = octopus.getOnlineSchools();
			if (mySchools.length===0){
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
var octopus = {
	getMainBio : function(){
		return ({
			role: bio.role,
			name: bio.name,
			bioPic: bio.bioPic,
			welcome: bio.welcome
			});
	},
	getSkills: function(){
		return(bio.skills)
	},
	getContacts: function(){
		return(bio.contacts);
	},
	getJobs: function(){
		return(work.jobs);
	},
	getSchools: function(){
		return(education.schools);
	},
	getOnlineSchools: function(){
		return(onlineEducation.schools);
	}
}
			
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

var locationImages = [];
locationImages["Greensboro, NC, USA"]="./images/Greensboro.jpg";
locationImages["Charlotte, NC, USA"]="./images/Charlotte_Skyline_Night_970x550.jpg";
locationImages["New York, NY, USA"]="./images/statue.jpg";
 
viewBio.render();
viewWork.render();
projects.display();
viewEducation.render();
viewOnlineEd.render();

$("#mapDiv").append(googleMap);
viewBio.renderContacts("#footerContacts");


 
 
 
