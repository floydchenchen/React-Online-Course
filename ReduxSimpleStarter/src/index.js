import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


function Box({style, className = '', ...rest}) {
    return (
        <div
            className = {`box ${className}`}
            style={{paddingLeft: 20, ...style}}
            {...rest}
        />
    )
}

const element = (
    <div>
        <Box
            className = "box--small"
            style={{backgroundColor: 'red'}}>
            small box
        </Box>

        <Box
            className = "box--medium"
            style={{backgroundColor: 'pink'}}>
            small box
        </Box>

        <Box
            className = "box--large"
            style={{backgroundColor: 'blue'}}>
            small box
        </Box>
    </div>
)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
          <Box
              className = "box--small"
              style={{backgroundColor: 'red'}}>
              small box
          </Box>

          <Box
              className = "box--medium"
              style={{backgroundColor: 'pink'}}>
              small box
          </Box>

          <Box
              className = "box--large"
              style={{backgroundColor: 'blue'}}>
              small box
          </Box>
      </div>

  </Provider>
  , document.querySelector('.container'));
