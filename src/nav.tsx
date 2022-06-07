export default function Nav ({ data }) {
  return (
    <nav>
      <ul>
        {data.map(({ name, activeRule }) => {
          return <li key={activeRule}><a href={activeRule}>{name}</a></li>
        })}
      </ul>
    </nav>
  )
}
