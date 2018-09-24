import React from "react";

export default class Card extends React.Component {
  render() {
    const user = this.props.user;
    if (!user) {
      return <div className="column" />;
    }
    return (
      <div className="column">
        {/* TODO go to detail view */}
        <a>
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      className="is-rounded"
                      src={user.avatarUrl}
                      alt={user.login}
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5">{user.login}</p>
                  <p className="subtitle is-6">{user.name}</p>
                </div>
              </div>
              {/* TODO {user.bio !== "" && <div className="content">{user.bio}</div>} */}
            </div>
          </div>
        </a>
      </div>
    );
  }
}
