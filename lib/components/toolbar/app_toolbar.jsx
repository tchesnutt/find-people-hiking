import React from 'react';
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton, MuiThemeProvider, getMuiTheme } from 'material-ui';


class appToolBar extends React.Component {
  constructor(){
    this.false = false
  }

  render(){
    if(this.false){

    } else {
      <section className='toolbar'>
        <ToolBar style={navebarStyle}>
          <ToolbarGroup>
            <RaisedButton label='Upload Path'/>
          </ToolbarGroup>
        </ToolBar>
      </section>
    }
  }
}
export default appToolBar;
