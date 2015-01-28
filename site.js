define(['playbook'], function(playbook) {
	console.log(playbook);
	console.log('pre-site:')
	playbook.site_set({key:'reconnect',value:2})
	playbook.site_set({key:'init',value:['e2brute']})
	playbook.site_set({key:'onclose',value:['no.']})
	playbook.site_set({key:'onopen',value:['listen up']})
	playbook.site_set({key:'hashes',value:['celebrity']})
	
	playbook.site_set({key:'color',value:{ 'ontweet' : '#0052A5', 'onopen' : 'green', 'oninit' : 'yellow', 'ondisconnect' : 'inherit', 'onclose' : 'red', 'onpause' : 'inherit', 'onheartbeat' : 'pink'}})	
	return {		
		loaded:true
	}	
})