import * as React from 'react'
import styles from './styles.module.css'
import{ GraphCircular as _GraphCircular} from "./GraphCircular/GraphCircular";


interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
export const GraphCircular=_GraphCircular;;
