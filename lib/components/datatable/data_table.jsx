import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TextField, RaisedButton } from 'material-ui';


class DataTable extends React.Component {
  constructor(props){
    super(props)
    this.start = 0;
    this.end = 99;
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
      selected: []
    };
    if(this.props.path){
      this.state.data = this.props.path
    } else {
      this.state.view = [{
        position: {lat: 'You need to hit', lng: "the upload data button!"},
        id: 0,
        selected: true}];
    }

    this.grabView = this.grabView.bind(this)
    this.handleDeleteSelected = this.handleDeleteSelected.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.update = this.update.bind(this)
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
    this.state.data.forEach( el => {
      if(this.state.selected.includes(el.id) === false){
        newData.push(el)
      }
    })
    this.setState({data: newData})
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
    } else {
      return e => {this.end = e.currentTarget.value};
    }
  }

  render(){
    if(this.state.data.length > 0){
      this.grabView(this.state.start, this.state.end)
    };
    return(
      <section className='data-table'>
        <section className='options-form'>
          <RaisedButton label='Delete Selected' onTouchTap={this.handleDeleteSelected}/>
          <form onSubmit={this.handleSelect}>
            <TextField type='text' hintText='Select From' defaultValue={this.start} onChange={this.update("start")}/>
            <TextField type='text' hintText='Select To' defaultValue={this.end} onChange={this.update("end")}/>
            <RaisedButton label='Select' type='Submit' primary={true}/>
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
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              deselectOnClickaway={this.state.deselectOnClickaway}
              showRowHover={this.state.showRowHover}
              stripedRows={this.state.stripedRows}>
              {this.state.view.map( (row, index) => (
                <TableRow key={index} selected={row.selected}>
                  <TableRowColumn>{row.id + 1}</TableRowColumn>
                  <TableRowColumn>{row.position.lat}</TableRowColumn>
                  <TableRowColumn>{row.position.lng}</TableRowColumn>
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
