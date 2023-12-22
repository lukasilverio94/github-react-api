export default function UserInfo({ userData, repos }) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Col 1 img */}
        <div className="col-lg-4 col-md-5 col-sm-12">
          <img
            className="img-fluid"
            src={userData.avatar_url}
            alt={`${userData.login}'s avatar`}
            style={{ width: "100%", maxWidth: "250px", borderRadius: "50%" }}
          />
        </div>
        {/* Col 2 List info */}
        <div className="col-lg-8 col-md-7 col-sm-12">
          <ul className="list-group mt-2">
            <li className="list-group-item">
              <h4>
                <span className="text-secondary">Name: </span>
                {userData.name}
              </h4>
            </li>
            <li className="list-group-item">
              <h5>
                <span className="text-secondary">Username: </span>
                {userData.login}
              </h5>
            </li>
            <li className="list-group-item">
              {" "}
              <h6>
                <span className="text-secondary">Location: </span>{" "}
                {userData.location}
              </h6>
            </li>
            <a
              href={userData.html_url}
              target="_blank"
              className="btn btn-dark mt-2"
            >
              Visit Github profile
            </a>
          </ul>
        </div>
        {/* REPOSITORIES DETAIL LIST */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-3">Public Repositories: </h2>
              <ul className="list-group">
                {repos.map((repo) => (
                  <li key={repo.id} className="list-group-item">
                    <h6>
                      Repository name:{" "}
                      <span className="text-primary">{repo.name}</span>
                    </h6>
                    <p>
                      <strong>Description: </strong>
                      {repo.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
