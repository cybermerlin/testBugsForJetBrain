import FW from '.';
import './Some.override';

/**
 * @class Bug
 * @uses FW.kd.Some
 */
class Bug {
	/**
	 * @param {FW.kb.Some|FW.kb.Some[]} d  // <<-- focus........
	 */
	dede(d) {
		if (!d.length) d.getIDProperty()
	};
}

let d = new FW.kb.Some({id: 2});
d.setClient(88);
(new Bug()).dede(d);
d.getIDProperty();
FW.kb.Some.getIDProperty();
