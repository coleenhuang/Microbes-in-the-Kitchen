import React from "react";
import renderer from "react-test-renderer";


import Lang from './Lang'


describe("Lang", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<Lang altLang='en-us'/>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
