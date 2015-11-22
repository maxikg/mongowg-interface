define(['react', 'components/RegionHeader', 'components/RegionEntry', 'react-bootstrap-table'], function(React, RegionHeader, RegionEntry, ReactBootstrapTable) {
    return React.createClass({
        data: new ReactBootstrapTable.TableDataSet([]),
        loadFromServer: function() {
            this.data.setData([]);
            $.ajax({
                url: this.props['url'],
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.data.setData(data);
                }.bind(this),
                error: function(xhr, status, err) {
                    alert('An error occurred. See console for further information.');
                    console.error(this.props['url'], status, err.toString())
                }.bind(this)
            });
        },
        componentDidMount: function() {
            this.loadFromServer();
            window.reloadList = this.loadFromServer;
        },
        render: function() {
            return React.createElement(
                ReactBootstrapTable.BootstrapTable,
                { data: this.data, search: true, pagination: true, hover: true },
                React.createElement(ReactBootstrapTable.TableHeaderColumn, { dataField: '_id', isKey: true, hidden: true }, 'ID'),
                React.createElement(ReactBootstrapTable.TableHeaderColumn, { dataField: 'world' }, 'World'),
                React.createElement(ReactBootstrapTable.TableHeaderColumn, { dataField: 'name' }, 'Name')
            );
        }
    });
});