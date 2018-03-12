'use strict';

//bug Proxy
let user = {},
		nodes = [],
		handler = () => {
			return {
				get(target, prop) {
					console.info(`Чтение ${prop}`);
					return target[prop];
				},
				set(target, prop, value) {
					console.info(`Запись ${prop} ${value}`);
					target[prop] = value;
					return true;
				}
			};
		};

nodes.push(new Proxy(user, handler()));

nodes[0].firstName = "Ilya";
nodes[0].firstName;

console.info(nodes[0].firstName);
