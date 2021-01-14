import React from 'react'
import renderer from 'react-test-renderer'
import Layout from "./layout.js"

describe("Layout", () => {
  it("renders correctly", () => {
    const layout = <Layout
      title="Title"
      location="/"
    />

    const tree = renderer
      .create(layout)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})