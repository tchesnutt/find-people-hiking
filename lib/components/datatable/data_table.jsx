import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TextField, RaisedButton, Dialog, FlatButton } from 'material-ui';

class DataTable extends React.Component {
  constructor(props){
    super(props)
    this.start = 0;
    this.end = 99;
    this.latitude = 0,
    this.longitude = 0,
    this.toUpdateID = 0,
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: true,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showCheckboxes: true,
      height: '100%',
      width: '100%',
      data: [],
      view: [],
      start: this.start,
      end: this.end,
      selected: [],
      modal: false
    };

    this.grabView = this.grabView.bind(this)
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.update = this.update.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.path})
  }

  grabView(start, end) {
    this.state.view = [];
    this.state.data.forEach( (el, i) => {
      if(i <= end && i >= start){
        let newEl;
        newEl = el;
        newEl.id = i;
        newEl.selected = false;
        this.state.view.push(newEl)
      }
    });
  }

  handleDeleteSelected(){
    let newData = [];
    if(this.state.selected === 'all'){
      let selectedId = [];
      this.state.view.forEach( el => {selectedId.push(el.id)});
      this.state.data.forEach( el => {
        if(selectedId.includes(el.id) === false){
          newData.push(el);
        }
      });
    } else {
      this.state.data.forEach( el => {
        if(this.state.selected.includes(el.id) === false){
          newData.push(el);
        }
      })
    }
    this.props.updatePath(newData);
  }

  handleToggle(rows){
    this.state.selected = rows
  }

  handleSelect(e){
    e.preventDefault();
    this.setState({start: this.start, end: this.end})
  }

  update(field){
    if(field === "start"){
      return e => {this.start = e.currentTarget.value};
    } else if (field === "end") {
      return e => {this.end = e.currentTarget.value};
    } else if (field === "latitude"){
      return e => {this.latitude = e.currentTarget.value};
    } else if (field === "longitude"){
      return e => {this.longitude = e.currentTarget.value};
    }
  }

  closeModal(){
    this.toUpdateID = 0;
    this.setState({modal: false})
  }

  openModal(id){
    this.toUpdateId = id;
    this.setState({modal: true})
  }

  handleUpdate(e){
    e.preventDefault();
    let newData = [];
    this.state.data.forEach( el => {
      if(el.id === this.toUpdateId){
        newData.push({
          position: {lat: parseInt(this.latitude), lng: parseInt(this.longitude)},
          id: parseInt(this.toUpdateId),
          selected: false});
      } else {
        newData.push(el);
      }
    })
    this.props.updatePath(newData);
  }


  render(){
    if(this.state.data.length > 0){
      this.grabView(this.state.start, this.state.end)
    };
    return(
      <section className='data-table'>
        <section className='update-point-modal'>
          <Dialog open={this.state.modal} onRequestClose={this.closeModal}>
            <form onSubmit={this.handleUpdate}>
              <TextField type='text' hintText='Latitude' onChange={this.update("latitude")}/>
              <TextField type='text' hintText='Longitude' onChange={this.update("longitude")}/>
              <RaisedButton label='Update' type='submit' primary={true}/>
            </form>
          </Dialog>
        </section>
        <section className='options-form'>
          <RaisedButton label='Delete Selected' onTouchTap={this.handleDeleteSelected}/>
          <form onSubmit={this.handleSelect} className='left-options'>
            <TextField type='text' hintText='Select From' floatingLabelText='Select points from' defaultValue={this.start} onChange={this.update("start")} className='left-options-item-right'/>
            <TextField type='text' hintText='Select To' defaultValue={this.end} floatingLabelText='Select points to' onChange={this.update("end")} className='left-options-item-right'/>
            <RaisedButton label='Select' type='submit' primary={true}/>
          </form>
        </section>
        <section className='the-table'>
          <Table
            height={this.state.height}
            width={this.state.width}
            fixedHeader={this.state.fixedHeader}
            fixedFooter={this.state.fixedFooter}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
            onRowSelection={this.handleToggle}>
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}>
              <TableRow>
                <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Latitude">Latitude</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Longitude">Longitude</TableHeaderColumn>
                <TableHeaderColumn tooltip="The Updater">        </TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}>
              {this.state.view.map( (row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn>{row.id}</TableRowColumn>
                  <TableRowColumn>{row.position.lat}</TableRowColumn>
                  <TableRowColumn>{row.position.lng}</TableRowColumn>
                  <TableRowColumn>
                    <FlatButton label='Update' onTouchTap={() => this.openModal(row.id)}/>
                  </TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </section>
    )
  }
}

export default DataTable;
