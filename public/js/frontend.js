var ReloadButton = React.createClass({
    render: function() {
        return React.createElement(
            'button',
            { className: 'btn btn-success', title: 'Reload', onClick: window.reloadList },
            React.createElement('i', { className: 'glyphicon glyphicon-refresh' })
        )
    }
});

var RegionHeader = React.createClass({
    render: function() {
        return React.createElement(
            'thead',
            {},
            React.createElement('tr', {}, React.createElement('th', {}, 'World'), React.createElement('th', {}, 'Name'))
        );
    }
});

var RegionList = React.createClass({
    loadFromServer: function() {
        this.setState(this.getInitialState());
        console.log('Going to load...');
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

var RegionEntry = React.createClass({
    render: function() {
        return React.createElement(
            'tr',
            { className: 'region' },
            React.createElement('td', {}, this.props['world']),
            React.createElement('td', {}, this.props['name'])
        )
    }
});