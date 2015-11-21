define(['react'], function(React) {
    return React.createClass({
        render: function() {
            return React.createElement(
                'tr',
                { className: 'region' },
                React.createElement('td', {}, this.props['world']),
                React.createElement('td', {}, this.props['name'])
            )
        }
    });
});