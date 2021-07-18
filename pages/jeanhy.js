import Link from 'next/link'
import MainTemplate from '../components/MainTemplate/MainTemplate'

export default function Jeanhy() {
  return (
    <MainTemplate>
      <h1>Jeanhy</h1>
      <p>Why you are buling me?</p>   
      <Link href="/tests">Go tests</Link>
    </MainTemplate>
  )
}
