define(['react'], function(React) {
    return React.createClass({
        render: function() {
            return React.createElement(
                'button',
                { className: 'btn btn-success', title: 'Reload', onClick: window.reloadList },
                React.createElement('i', { className: 'glyphicon glyphicon-refresh' })
            )
        }
    });
});