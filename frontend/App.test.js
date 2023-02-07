
jest.mock('./src/hooks/useCoordinates', () => ({
  useCoordinates: jest.fn()
}));
import { useCoordinates } from './src/hooks/useCoordinates'

import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {
    useCoordinates.mockImplementation(() => ({
      response: [],
      error: null, loading: false
    }))

    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('has a child with id = mainView', () => {
    useCoordinates.mockImplementation(() => ({
      response: [
        {
          "latitude": -28.045240561226002,
          "longitude": 153.4217506330182
        },
        {
          "latitude": -28.041789517803497,
          "longitude": 153.43567562763283
        },
        {
          "latitude": -28.05399308549032,
          "longitude": 153.435407838194
        },
        {
          "latitude": -28.04886190405452,
          "longitude": 153.43706881329268
        }
      ],
      error: null, loading: false
    }))

    const tree = renderer.create(<App />)
    const testComponent = tree.root.findByProps({ id: "mainView" });
    expect(testComponent.props.children).toBeDefined()

  });

  it('is loading', () => {
    useCoordinates.mockImplementation(() => ({
      response: null,
      error: null, loading: true
    }))

    const tree = renderer.create(<App />)
    const testComponent = tree.root.findByProps({ id: "loading" });
    expect(testComponent.props.children).toBeDefined()
  });

  it('has no data found', () => {
    useCoordinates.mockImplementation(() => ({
      response: null,
      error: null, loading: false
    }))

    const tree = renderer.create(<App />)
    const testComponent = tree.root.findByProps({ id: "noDataFound" });
    expect(testComponent.props.children).toBeDefined()
  });

  it('has an error', () => {
    useCoordinates.mockImplementation(() => ({
      response: null,
      error: { message: "Network failed" }, loading: false
    }))

    const tree = renderer.create(<App />)
    const testComponent = tree.root.findByProps({ id: "errorView" });
    expect(testComponent.props.children).toBeDefined()
  });
});
