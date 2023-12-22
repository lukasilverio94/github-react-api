export default function UserRepos({ repos }) {
  return (
    <div>
      <h5>Public Repositories: </h5>
      <ul className="list-group">
        {repos.map((repo) => (
          <li key={repo.id} className="list-group-item">
            <h6>{repo.name}</h6>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
