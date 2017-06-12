import React from 'react';
import UploadModal from './upload_modal_container';
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton } from 'material-ui';



class AppToolBar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <section>
        <Toolbar className='toolbar'>
          <ToolbarGroup className='title'>
            <section className='title'>Find People Hiking</section>
          </ToolbarGroup>
          <ToolbarGroup className='toolbar-right'>
            <RaisedButton className='first-step' label='Upload Path' onClick={this.props.openUploadModal}/>
            <RaisedButton className='tour' label='Tour' onClick={this.props.startTour}/>
          </ToolbarGroup>
        </Toolbar>
        <UploadModal/>
      </section>
    )
  }
}
export default AppToolBar;
