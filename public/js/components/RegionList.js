define(['react', 'components/RegionHeader', 'components/RegionEntry'], function(React, RegionHeader, RegionEntry) {
    return React.createClass({
        loadFromServer: function() {
            this.setState(this.getInitialState());
            $.ajax({
                url: this.props['url'],
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({
                        data: data.map(function(data) {
                            return React.createElement(RegionEntry, { key: data['world'] + '.' + data['name'], world: data['world'], name: data['name'] })
                        })
                    });
                }.bind(this),
                error: function(xhr, status, err) {
                    alert('An error occurred. See console for further information.');
                    console.error(this.props['url'], status, err.toString())
                }.bind(this)
            });
        },
        getInitialState: function() {
            return { data: [] };
        },
        componentDidMount: function() {
            this.loadFromServer();
            window.reloadList = this.loadFromServer;
        },
        render: function() {
            return React.createElement(
                'table',
                { className: 'table table-bordered' },
                React.createElement(RegionHeader),
                React.createElement('tbody', {}, this.state.data)
            );
        }
    });
});