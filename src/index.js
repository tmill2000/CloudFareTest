export default {
	async fetch(request) {
		try {
			const rawYeezyQuote = await fetch('https://api.kanye.rest/');
			const yeezyQuote = await rawYeezyQuote.json();
			const respObj = {
				ye: `Kanye has blessed you with his wisdom: ${yeezyQuote.quote}`,
				location: `Request made from ${request?.cf?.region} by Provider: ${request?.cf?.asOrganization}`
			}
			return new Response(JSON.stringify(respObj),
				{
					headers: { 'content-type': 'application/json' }
				}
			);
		} catch (err){
			return new Response("They want to supress you from Kanye :(")
		}
	},
};
