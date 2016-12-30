import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ToolBar from './toolbar/app_toolbar_container';
import Maps from './maps/maps_container';
import DataTable from './datatable/data_table_container';
import Finder from './finder/finder_container';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <section className='root'>
          <section className='top'>
            <ToolBar/>
          </section>
          <secton className='main-page'>
            <Maps/>
            <section className='right'>
              <Finder/>
              <DataTable/>
            </section>
          </secton>
      </section>
    </MuiThemeProvider>
    </Provider>
  );
};

export default Root;
