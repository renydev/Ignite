// const repositoryName = 'unform2';
interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
  }
}
export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'default'}</strong>
      <p>
      {props.repository?.description ?? 'default'}
      </p>
      <a href={props.repository?.html_url ?? 'default'}
         target="_blank">
        Acessar repositório
      </a>
    </li>
  )
}