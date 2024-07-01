![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p46)](https://github.com/PaulioRandall/p46/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p46)](https://github.com/PaulioRandall/p46/releases)

# P46

A modular GUI tool for composing P45 icons.

The core component is `<P46>`. Every other component is slotted within it somewhere.

**Requires Svelte version 4.**

## Made to be Plundered

Fork, pillage, and plunder! Do whatever as long as you adhere to the project's permissive MIT license.

## Components

### `<Axis>`

Slotted into a `<P46>` component to add axis to the grid.
Slot the `<AxisToggle>` component into a `<P46>` _before-grid_
slot to allow feature toggling.

```svelte
<Axis />
```

### `<AxisToggle>`

Slotted into a `<P46>` component _before-grid_ slot to enable
toggling of the `<Axis>` component if it's used.

```svelte
<AxisToggle />
```

### `<Console>`

Slotted into a `<P46>` component _after-grid_ slot
so users can add, remove, and modify shapes
within the grid.

```svelte
<Console />
```

### `<CopyCoordsButton>`

Slotted into a `<P46>` component _before-grid_ slot
so users view the currently selected node and,
upon click, copy the node to clipboard.

```svelte
<CopyCoordsButton />
```

### `<DownloadSvgButton>`

Slotted into a `<P46>` component _before-grid_ slot
so users can download the SVG.

```svelte
<DownloadSvgButton />
```

### `<Guidelines>`

Slotted into a `<P46>` component to add guidelines to the grid.
Slot the `<GuidelinesToggle>` component into a `<P46>` _before-grid_
slot to allow feature toggling.

```svelte
<Guidelines />
```

### `<GuidelinesToggle>`

Slotted into a `<P46>` component _before-grid_ slot to enable
toggling of the `<Guidelines>` component if it's used.

```svelte
<GuidelinesToggle />
```

### `<HeaderRow>`

Slotted into a `<P46>` component _before-grid_ slot
to organise a row of header controls.

```svelte
<!-- Controls to be slotted, e.g. `<Axis>`, `<DownloadSvgButton>`, etc. -->
<slot />
```

```svelte
<HeaderRow>
  <div />
</HeaderRow>
```

### `<P46>`

`<P46>` is the framework component in which all other P46
components are slotted into.

```svelte
<script>
  // Size of the underlying P45 grid.
  export let size = 24

  // The P45 instance used to define grid dimensions and compile shapes.
  setContext("p45", ...)

  // Array of grid points representing nodes on the grid.
  setContext("p46-points", ...)

  // The currently selected grid point. Not to be confused with the currently
  // selected user shape.
  setContext("p46-selected-store", ...)

  // Writable store for enabling and disabling the `<Axis>` component.
  setContext("p46-axis-enabled-store", ...)

  // Writable store for enabling and disabling the `<Guidelines>` component.
  setContext("p46-guidelines-enabled-store", ...)

  // Writable store for enabling and disabling the `<Points>` component.
  setContext("p46-points-enabled-store", ...)

  // Writable store for enabling and disabling the `<Target>` component.
  setContext("p46-target-enabled-store", ...)

  // Writable store for enabling and disabling rounded edges on shape lines.
  setContext("p46-rounded-enabled-store", ...)

  // Writable store for controlling the stroke width for shape lines.
  setContext("p46-stroke-width-slider-store", ...)

  // Writable store containing the array of user shapes to draw on the grid.
  setContext("p46-user-shapes-store", ...)

  // Writable store containing the currently selected user shape.
  // Not to be confused with the currently selected grid point.
  setContext("p46-selected-user-shape-store", ...)
</script>

<!--
  Content slotted above the grid. This is where all the control components
  live. This will typically be one or more `<HeaderRow>` components
  with various control components, e.g `<Axis>`, slotted into that.
-->
<slot name="before-grid" />

<!-- Content drawn on the grid underneath any shapes. -->
<slot name="before-shape" />

<!-- Content drawn on the grid above any shapes. -->
<slot name="after-shape" />

<!-- Content drawn on the grid after the hitboxes which are after the shapes. -->
<slot name="after-hitbox" />

<!--
  Content slotted below the grid. This is where the `<Console>` component
  is slotted.
-->
<slot name="after-grid" />
```

```svelte
<P46
  size={24}
>
  <div slot="before-grid" />
  <div slot="before-shape" />
  <div slot="after-shape" />
  <div slot="after-hitbox" />
  <div slot="after-grid" />
</P46>
```

### `<Points>`

Slotted into a `<P46>` component to add reference points to the grid.
Slot the `<PointsToggle>` component into a `<P46>` _before-grid_
slot to allow feature toggling.

```svelte
<Points />
```

### `<PointsToggle>`

Slotted into a `<P46>` component _before-grid_ slot to enable
toggling of the `<Points>` component if it's used.

```svelte
<PointsToggle />
```

### `<RoundedToggle>`

Slotted into a `<P46>` component _before-grid_ slot to enable
toggling of rounded line caps and joins. When disabled the
`butt` type is used. This is applied to all shapes.

```svelte
<RoundedToggle />
```

### `<StrokeWidthSlider>`

Slotted into a `<P46>` component _before-grid_ slot to allow
adjusting of line widths. This is applied to all shapes.

```svelte
<StrokeWidthSlider />
```

### `<Target>`

Slotted into a `<P46>` component to add a target over
the currently selected point to the grid.
Slot the `<TargetToggle>` component into a `<P46>` _before-grid_
slot to allow feature toggling.

```svelte
<Target />
```

### `<TargetToggle>`

Slotted into a `<P46>` component _before-grid_ slot to enable
toggling of the `<Target>` component if it's used.

```svelte
<TargetToggle />
```
