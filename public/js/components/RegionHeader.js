define(['react'], function(React) {
    return React.createClass({
        render: function() {
            return React.createElement(
                'thead',
                {},
                React.createElement('tr', {}, React.createElement('th', {}, 'World'), React.createElement('th', {}, 'Name'))
            );
        }
    });
});