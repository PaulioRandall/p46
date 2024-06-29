![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p46)](https://github.com/PaulioRandall/p46/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p46)](https://github.com/PaulioRandall/p46/releases)

> 1: Find and replace content in the project using patterns `___TODO_[A-Z]+___` & `\*\*_TODO_[A-Z]+_\*\*` using your project's specific details.
> 2: `npx npm-check-updates -u`
> 3: `npm i`
> 4: `npm run commit`
> 5: Delete this quote from `README.template.md`

# P46

A GUI tool for composing P45 icons.

**Requires Svelte version 4.**

## Made to be Plundered

Do whatever as long as you adhere to the permissive MIT license found within.

## Components

### `<Console>`

```svelte
<Console />
```

### `<HeaderRow>`

```svelte
<HeaderRow />
```

### `<P46>`

```svelte
<script>
	// Size of the P45 grid.
	export let size = 24

	// The selected node.
	export let selected = Grid.centerNode
</script>
```

```svelte
<P46
	size={24}
	selected={Grid.centerNode}
/>
```
