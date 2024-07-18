import Link from 'next/link'

export default function TestLinks() {
  return (
    <div>
      <h1>Link Test</h1>
      <ul>
        <li><a href="member1">Page Test</a></li>
        <li><Link href="member1">Page Test</Link></li>
      </ul>
    </div>
  )
}