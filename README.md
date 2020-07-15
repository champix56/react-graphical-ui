# react-graphical-ui

> SVG UI Lib, it contains serie of components to show graphs with values

[![NPM](https://img.shields.io/npm/v/react-graphical-ui.svg)](https://www.npmjs.com/package/react-graphical-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-graphical-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import * as RGUI from 'react-graphical-ui'
import 'react-graphical-ui/dist/index.css'

class Example extends Component {
  render() {
    return <RGUI.Component />
  }
}
```

## GraphCircular
Show value as a circular graphwith value on center
```tsx
import { Circular } from 'react-graphical-ui';
<Circular value={47}  max={100} display="inline" withGrid={true} />
```

* value  : number, required value to show
* max? : number,  def. = 100
* display : string, 'inline' | 'block' def. = 'inline'
* withGrid : boolean, def. = false

## ***version note:***

### V 0.0.1

  Add Circular component
