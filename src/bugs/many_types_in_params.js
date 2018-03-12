import FW from '..';
import '../Some.override';

let d = new FW.kb.Some({id: 2});
d.setClient(88);
(new FW.kb.Bug()).dede(d);
d.getIDProperty();
FW.kb.Some.getIDProperty();
