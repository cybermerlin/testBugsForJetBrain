const FW = {
	kb: {
		Some: class {
			idProperty = 'id';
			id;
			/**
			 * @property {Some}
			 */
			obj;

			constructor(cfg){
				cfg = cfg || {};
				this.id = cfg.id;
				if (this.id) this.load();
			}

			getIDProperty(){ return this.idProperty }
			async load(){
				return Promise.resolve(this);
			}
		}
	},
	classes: {
		getClassByName(clsName) {
			if (!FW.kb[clsName]) return FW.kb;
			else return FW.kb[clsName];
		}
	}
};
export default FW;
