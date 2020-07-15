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

## GraphHistogram

Show value as a Histogram graph with values send by props

```tsx
import { Histogram } from 'react-graphical-ui';
<Histogram values={[ 20, 80, 19]} notAllreadyFull={true} whithGrid={true} gridDivisionCount={5} max={150} />
```

* values  : [number], required values to show
* max? : number,  def. = max value in values list
* display : string, 'inline' | 'block' def. = 'inline'
* notAllreadyFull : boolean,next horizontal step spce on graph, def. = false
* withGrid : boolean, def. = true
* gridDivisionCount : number, number of horizontal divisions def. = 10

## ***version note:***

### V 0.0.1

  Add Circular component

### V 0.0.2

  Add Histogram component
