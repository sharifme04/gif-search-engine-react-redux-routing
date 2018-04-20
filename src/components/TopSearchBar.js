import React from 'react';

export default class TopSearchBar extends React.Component {
  onInputChange(term) {
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <div className="form-group row">
            <div className="col-xs-offset-4 col-xs-4">
              <input className="form-control"placeholder="Please search here" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        </div>
      </div>
    );
  }
}
