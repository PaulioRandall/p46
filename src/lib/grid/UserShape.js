export default class UserShape {
	constructor() {
		this._id = crypto.randomUUID().slice(24)
		this._draw = 'move to M12'
		this._transforms = ''
	}

	get id() {
		return this._id
	}

	get draw() {
		return this._draw
	}

	set draw(d) {
		this._draw = d
	}

	get transforms() {
		return this._transforms
	}

	set transforms(t) {
		this._transforms = t
	}
}
