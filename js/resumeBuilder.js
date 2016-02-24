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
	]
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
		
		$(div).append(this.mobile.replace("%data%",bio.contacts.mobile));
		$(div).append(this.email.replace("%data%",bio.contacts.email));
		$(div).append(this.github.replace("%data%",bio.contacts.github));
		$(div).append(this.location.replace("%data%",bio.contacts.location));
	}
};

var viewWork ={
	start : '<div class="work-entry"></div>',
	employer : '<a href="#" target="_blank">%data%',
	title : ' - %data%</a>',
	dates : '<div class="date-text">%data%</div>',
	location : '<div class="location-text">%data%</div>',
	description : '<p><br>%data%</p>',
	render : function (){
		myJobs = octopus.getJobs();
		if(myJobs.length === 0) {
			document.getElementById('workExperience').style.display = 'none';
			return;
		}
		
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

var viewProjects = {
	start : '<div class="project-entry">',
	title : '<a href="#">%data%</a>',
	dates : '<div class="date-text">%data%</div>',
	description : '<p><br>%data%</p>',
	image : '<img src="%data%">',
	row : '<div class="row" style="display:flex">',

	"render" : function(){
		var myProjects = octopus.getProjects();
		
		if (myProjects.length===0){
			document.getElementById('projects').style.display = 'none';
			return;
		}
		var projectArray = [];
		for(var proj in myProjects){
			projectArray.push(this.buildProjectEntry(myProjects[proj]));		
		}
		if (projectArray.length===1){
			$("#projects").append(this.row+projectArray[0] +'</div>')
		}
		else{
			for (i=0;i<projectArray.length%2;++i){
				$("#projects").append(this.row+projectArray[i*2]+projectArray[i*2+1]+'</div>');
			}
			if (projectArray.length%2 ===1){
				var myHTML = '<div class="row" style="display:flex">';
				$("#projects").append(this.row+projectArray[projectArray.length-1] +'</div>')
			}
		}
		
	},
	"buildProjectEntry": function(thisProject){
		var title = this.title.replace("%data%",thisProject.title);
		title = title.replace("#",thisProject.url);
			
		var dates = this.dates.replace("%data%",thisProject.dates);
		var description= this.description.replace("%data%",thisProject.description);
			
		formattedPhoto="";
		if (thisProject.photo){
			var formattedPhoto = this.image.replace("%data%",thisProject.photo);
		}
			
		return(this.start+title+dates+description+formattedPhoto+'</div>');
	}
};

var viewEducation = {
	start : '<div class="education-entry"></div>',
	name : '<a href="#" target="_blank">%data%',
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
	name : '<a target="_blank" href="#">%data%',
	//var HTMLonlineDegree = '<div class="degree-text">%data%</div>';
	degree : ' - %data%</a>',
	start : '<div class="education-entry"></div>',
	dates : '<div class="date-text">%data%</div>',
	courseURL : '<a class="course-anchor" target="_blank" href="#">%data%</a>',
	courseList : '<em><br>Courses:</em><ul id="onlineClass" class="flex-box" text-Align = "left"></ul>',
	
	"render": function(){
			var mySchools = octopus.getOnlineSchools();
			if (mySchools.length===0 && document.getElementsByClassName('education-entry').length===0){
				document.getElementById('education').style.display = 'none';
				return;
			}
			
			$("#education").append(this.HTMLonlineClasses);
		 
		    for (var s in mySchools){
				this.renderSchool(mySchools[s]); 
			}
		},
	"renderSchool": function(thisSchool){
			
		var schoolTitle = this.name.replace("%data%",thisSchool.school);
		schoolTitle = schoolTitle.replace("#",thisSchool.url)+
		this.degree.replace("%data%", thisSchool.degree);

		$("#education").append(this.start);
		$(".education-entry:last").append(schoolTitle);
		$(".education-entry:last").append(this.dates.replace("%data%", thisSchool.dates));

		if(thisSchool.courses.length > 0){
			$(".education-entry:last").append(this.courseList);

			for (var i=0;i<thisSchool.courses.length;++i){
				var thisCourse = thisSchool.courses[i];
				var courseHTML = this.courseURL.replace("%data%",thisCourse.title);
				courseHTML = courseHTML.replace("#",thisCourse.URL);
				$("#onlineClass").append(courseHTML);
			}
		}		
	}
};

//locationOverlay.prototype = new google.maps.OverlayView();

var map = {
	overlayMaps : [],
	locationImages: {
		"Greensboro, NC, USA" : "./images/Greensboro.jpg",
		"Charlotte, NC, USA" : "./images/Charlotte_Skyline_Night_970x550.jpg",
		"New York, NY, USA" : "./images/statue.jpg"
	}
};

var viewMap = {
	googleMap : '<div id="map"></div>',
	render: function(){
		$("#mapDiv").append(this.googleMap);
		
		window.mapBounds = new google.maps.LatLngBounds();
		
		window.addEventListener('load', this.initializeMap);

		window.addEventListener('resize', function(e) {
			map.fitBounds(mapBounds);
		});
	},
	initializeMap: function() {
		var mapOptions = {
			disableDefaultUI: true
		//	mapTypeId: google.maps.MapTypeId.SATELLITE,
		//	center: new google.maps.LatLng(40.743388, -74.007592),
		};
		viewMap.map = new google.maps.Map(document.querySelector('#map'), mapOptions);
		
		var locations = octopus.getLocations();
		viewMap.pinPoster(locations);
	},
	pinPoster : function(locations){
		var service = new google.maps.places.PlacesService(this.map);
		
		locations.forEach(function(place){
			// the search request object
			var request = {
				query: place
			};
			service.textSearch(request, viewMap.callback);
		});
	},
	createMapMarker: function(placeData){
		var lat = placeData.geometry.location.lat();  
		var lon = placeData.geometry.location.lng();  
		var name = placeData.formatted_address;   
		var bounds = window.mapBounds;            

		var marker = new google.maps.Marker({
			map: this.map,
			position: placeData.geometry.location,
			title: name
		});
		
		var infoWindow = new google.maps.InfoWindow({
			content: name
		});
		
		google.maps.event.addListener(marker, 'click', function(){
			infoWindow.open(this.map, marker);
		});
		
		bounds.extend(new google.maps.LatLng(lat, lon));
		this.map.fitBounds(bounds);
		this.map.setCenter(bounds.getCenter());
	},
	callback: function (results, status) {
		if (status == google.maps.places.PlacesServiceStatus.OK) {
			viewMap.createMapMarker(results[0]);
		}
	}

/*			
//	map.setCenter(marker.getPosition());
//	map.setZoom(8.0);
    if (overlayMaps[name] == undefined) {
		if (locationImages[name]!= undefined){
			overlayMaps[name] = new locationOverlay(bounds, locationImages[name], map);
		}
	}
	for (var loc in overlayMaps){
		if (loc !== name ) {
			overlayMaps[loc].div_.style.visibility = 'hidden';
		}
		else if (overlayMaps[name] != undefined && overlayMaps[loc].div_ !== null) {
			overlayMaps[loc].div_.style.visibility = 'visible';
		}
	}
    
    });
	*/

}

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
	getProjects: function(){
		return(projects.project);
	},
	getSchools: function(){
		return(education.schools);
	},
	getOnlineSchools: function(){
		return(onlineEducation.schools);
	},
	getLocations: function(){
		var locations = [];
		locations.push(bio.contacts.location);

		education.schools.forEach(function(school){
			if (locations.indexOf(school.location)===-1){
				locations.push(school.location);
			}
		});

		work.jobs.forEach(function(job){
			if (locations.indexOf(job.location)===-1){
				locations.push(job.location);
			}
		});

		return locations;
	},
	init : function(){
		viewBio.render();
		viewWork.render();
		viewProjects.render();
		viewEducation.render();
		viewOnlineEd.render();
		viewMap.render();
		viewBio.renderContacts("#footerContacts");
	}
}
			
var locationImages = [];
locationImages["Greensboro, NC, USA"]="./images/Greensboro.jpg";
locationImages["Charlotte, NC, USA"]="./images/Charlotte_Skyline_Night_970x550.jpg";
locationImages["New York, NY, USA"]="./images/statue.jpg";
 
octopus.init();




 
 
 
