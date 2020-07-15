import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export  {default as Circular } from "./GraphCircular/Graphcircular";
export  {default as Histogram } from "./GraphHistogram/GraphHistogram";
export  {default as CloudPoints } from "./GraphCloudPoint/GraphCloudPoint";

