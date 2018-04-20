const routes = {
	get() {return {handler: ()=>{}};}
};
const path = '';


(routes.get(path)
		|| (req, resp) => {
			server.baseResonses.setResponse(resp)['404']('Не найден обработчик для ' + path);
		})
		.handler(req, resp);
