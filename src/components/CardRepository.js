import React from "react";
import Tag from "./Tag.js";

export default class CardRepository extends React.Component {
  render() {
    const repo = this.props.repository;

    if (!repo) {
      return <div className="column" />;
    }

    return (
      <div className="column">
        {/* TODO go to detail view */}
        <a href="#top">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{repo.name}</p>
                  {repo.primaryLanguage !== null && (
                    <p className="subtitle is-6">{repo.primaryLanguage.name}</p>
                  )}
                </div>
              </div>
              <div className="content">
                <p className="subtitle is-6">{repo.description}</p>
              </div>
              <div className="level">
                <div className="level-item">
                  <Tag name={"Star"} count={repo.stargazers.totalCount} />
                </div>
                <div className="level-item">
                  <Tag name={"Fork"} count={repo.forkCount} />
                </div>
                <div className="level-item">
                  <Tag name={"Watch"} count={repo.watchers.totalCount} />
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
