import * as utils from '../utils';

export default class {
	login = (e) => {
		utils.request('/login', e.target.value);
	};

	render() {
		return (
				<div>
					<button onClick={this.login}/>
				</div>
		);
	}
}