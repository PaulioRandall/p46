import Class from './TemplateClass.js'

describe('TemplateClass.js', () => {
	describe('template_group', () => {
		test('template_test', () => {
			expect(1).toEqual(1)
		})

		test('', () => {
			const f = () => {
				throw new Error('error')
			}
			expect(f).toThrow(Error)
		})
	})
})
