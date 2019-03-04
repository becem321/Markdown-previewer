import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Editor from "../components/Editor"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />{" "}
    <Editor />
  </Layout>
)

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
})

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer()
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>"
}

export default IndexPage
