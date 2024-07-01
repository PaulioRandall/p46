export default (p45, shapes, svgAttrs, shapeAttrs) => {
	let svgShapes = ''

	try {
		svgShapes = compileShapes(p45, shapes, shapeAttrs)
	} catch (err) {}

	svgAttrs = compileAttrs({
		'xmlns': 'http://www.w3.org/2000/svg',
		'xmlns:xlink': 'http://www.w3.org/1999/xlink',
		'width': p45.size,
		'height': p45.size,
		'preserveAspectRatio': 'xMidYMid',
		'aria-hidden': 'true',
		...svgAttrs,
	})

	return compileSvg(svgAttrs, svgShapes)
}

const compileSvg = (attrs, shapes) => {
	return [
		`<svg`, //
		attrs + '>',
		shapes,
		`</svg>`,
		``,
	].join('\n')
}

const compileAttrs = (attrs, indent = 2) => {
	const prefix = ' '.repeat(indent)
	return Object.entries(attrs) //
		.map(([k, v]) => `${prefix}${k}="${v}"`)
		.join('\n')
}

const compileShapes = (p45, shapes, attrs) => {
	const result = []

	for (const s of shapes) {
		attrs.d = p45 //
			.parseDrawCommands(s.draw)
			.split('\n')
			.map((l) => `        ${l}`)
			.join('\n')
			.trim()

		result.push(
			[
				`    <path`, //
				compileAttrs(attrs, 6) + ' />',
			].join('\n')
		)
	}

	return result.join('\n')
}
