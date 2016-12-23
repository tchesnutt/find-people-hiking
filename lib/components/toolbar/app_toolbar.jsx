import React from 'react';
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton, MuiThemeProvider, getMuiTheme } from 'material-ui';


class appToolBar extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick(){
    console.log("hi")
    this.props.openUploadModal()
  }

  render(){
    return(
      <section className='toolbar'>
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton label='Upload Path' onClick={this.handleClick()}/>
          </ToolbarGroup>
        </Toolbar>
      </section>
    )
  }
}
export default appToolBar;
