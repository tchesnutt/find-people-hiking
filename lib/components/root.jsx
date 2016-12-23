import React from 'react';
import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const Root = () => {
// ToolBar
// Map / table data

  return (
      <section className='root'>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <h1>TEST</h1>
        </MuiThemeProvider>
      </section>

  );
};

export default Root;
