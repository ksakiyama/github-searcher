import React from "react"

export default class Tag extends React.Component {
  render() {
    return (
      <div className="tags has-addons">
        <span className="tag is-dark">{this.props.name}</span>
        <span className="tag is-light">
          {this.props.count}
        </span>
      </div>
    )
  }
}
