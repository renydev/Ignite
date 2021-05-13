// const repositoryName = 'unform2';
export function RepositoryItem(props) {
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