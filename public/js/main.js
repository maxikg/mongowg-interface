require.config({
    'baseUrl': '/js',
    'paths': {
        'jquery': 'third_party/jquery/dist/jquery.min',
        'react': 'third_party/react/react',
        'reactDom': 'third_party/react/react-dom'
    }
});

window.reloadList = function() {
};

require(['react', 'reactDom', 'components/RegionList', 'components/ReloadButton'], function(React, ReactDOM, RegionList, ReloadButton) {
    ReactDOM.render(
        React.createElement(RegionList, { url: '/api/regions' }),
        document.getElementById('regions')
    );
    ReactDOM.render(
        React.createElement(ReloadButton),
        document.getElementById('navbar')
    );
});