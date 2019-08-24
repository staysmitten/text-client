import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
// Styles
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../styles/PrimeDataTable.css';

class PrimeDataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.export = this.export.bind(this);
  }

  export() {
    this.dt.exportCSV();
  }

  render() {
    const { products, loading, onRefresh,  } = this.props;
    // Export To CSV
    var header = (
      <div style={{textAlign:'left'}}>
        <Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.export}>
        </Button>
        <i className="pi pi-search" style={{margin:'4px 4px 0 3rem'}}></i>
        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
                    
                    
      </div>);
    // Paginator button 
    let paginatorLeft = <Button icon="pi pi-refresh" 
    onClick={() => onRefresh()}/>;

    if (loading) {
      console.log('loading');
      return (
        <div className="loaderWrapper">
          <Loader type="Hearts" color="#ce3e83" height={300} width={300} />
        </div>
      );
    }

    return (
      <DataTable value={products} paginator={true} paginatorLeft={paginatorLeft} rows={10} rowsPerPageOptions={[5,10,20]} header={header} ref={(el) => { this.dt = el; }} globalFilter={this.state.globalFilter} emptyMessage="No records found">
          <Column field="fullName" header="Full Name" filter={true} sortable={true} />
          <Column field="number" header="Phone #" filter={true} sortable={true} style={{ width: '10rem' }}/>
          <Column field="partnerFullName" header="Partner Full Name" filter={true} sortable={true} />
          <Column field="partnerNumber" header="Partner Phone #" filter={true} sortable={true} style={{ width: '10rem' }}/>
          <Column field="email" header="Email" filter={true} sortable={true} />
          <Column field="date" header="Date" filter={true} sortOrder='-1' sortable={true} style={{ width: '8rem' }}/>
      </DataTable>
    );
  }
}

PrimeDataTable.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default PrimeDataTable;