import React, { Component } from "react"
import marked from "marked"

class Previewer extends Component {
  render() {
    return (
      <div className="previewer-wrapper">
        <p className="toolbar2">Previewer</p>
        <div
          id="preview"
          className="container myPreviewer"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.content),
          }}
        >
          {this.props.state}
        </div>
      </div>
    )
  }
}

export default Previewer
