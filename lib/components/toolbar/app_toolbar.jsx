import React from 'react';
import UploadModal from './upload_modal_container';
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton, MuiThemeProvider, getMuiTheme } from 'material-ui';
import Joyride from 'react-joyride';


class AppToolBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section className='toolbar'>
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton className='first-step' label='Upload Path' onClick={this.props.openUploadModal}/>
          </ToolbarGroup>
        </Toolbar>
        <UploadModal/>
      </section>
    )
  }
}
export default AppToolBar;
