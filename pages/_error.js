import {main} from './styles'
import {errorCode, errorMessage} from './_error.module.css'

export default function Error() {
  return (
    <main className={main}>
      <h1>
        <span className={errorCode}>E</span>
        <span className={errorCode}>R</span>
        <span className={errorCode}>R</span>
      </h1>
      <h2 className={errorMessage}>ah we've fucked it</h2>
    </main>
  )
}
