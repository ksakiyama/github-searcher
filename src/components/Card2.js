import React from "react";

export default class Card2 extends React.Component {
  render() {
    return (
      <div className="column">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    className="is-rounded"
                    src="https://avatars0.githubusercontent.com/u/1367783?v=4"
                    alt="avatar"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">ksakiyama</p>
                <p className="subtitle is-6">@ksakiyama</p>
              </div>
            </div>
            <div className="content">
              Software engineer lives in Tokyo. Mainly back-end, sometimes
              front-end.
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Details
            </a>
            <a href="https://github.com/ksakiyama" className="card-footer-item">
              GitHub
            </a>
          </footer>
        </div>
      </div>
    );
  }
}
