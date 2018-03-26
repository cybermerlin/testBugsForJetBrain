export let API = {
	siteUrl: '/'
};

export function request(r, cfg) {
	cfg = cfg || {};
	if ( typeof r === 'string' ) {
		cfg.url = r;
	}
	cfg.url = API.siteURL + cfg.url;
	cfg.method = cfg.method || 'GET';

	return fetch(cfg.url, cfg);
}
