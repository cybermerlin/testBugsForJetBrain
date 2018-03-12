import FW from '.';

FW.classes.getClassByName('Some') = class Some extends FW.classes.getClassByName('Some') {
	static getIDProperty() {
		return this.prototype.idProperty;
	}

	getBaseId() {
		return this.prototype.id;
	}

	setClient(id) {
		this.obj = new Some({id: id});
	}
};

export default FW.kb.Some;
