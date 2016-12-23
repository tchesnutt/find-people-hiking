import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ToolBar from './toolbar/app_toolbar_container'

const Root = ({store}) => {
// ToolBar
// Map / table data

  return (
    <Provider store={store}>
      <section className='root'>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <ToolBar/>
        </MuiThemeProvider>
      </section>
    </Provider>
  );
};

export default Root;
