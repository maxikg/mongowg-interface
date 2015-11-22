require.config({
    'baseUrl': '/js',
    'paths': {
        'jquery': 'third_party/jquery/dist/jquery.min',
        'react': 'third_party/react/react',
        'react-dom': 'third_party/react/react-dom.min',
        'react-bootstrap-table': 'third_party/react-bootstrap-table/dist/react-bootstrap-table.min'
    }
});

window.reloadList = function() {
};

require(['react', 'react-dom', 'components/RegionList', 'components/ReloadButton'], function(React, ReactDOM, RegionList, ReloadButton) {
    ReactDOM.render(
        React.createElement(RegionList, { url: '/api/regions' }),
        document.getElementById('content')
    );
    ReactDOM.render(
        React.createElement(ReloadButton),
        document.getElementById('navbar')
    );
});