import React from "react"
import renderer from "react-test-renderer"

import Header from "./header"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header siteTitle="Microbes in the Kitchen" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})