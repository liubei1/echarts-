var dynamicLoading = {
    css: function(path){
		if(!path || path.length === 0){
			throw new Error('argument "path" is required !');
		}
		var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js: function(path){
		if(!path || path.length === 0){
			throw new Error('argument "path" is required !');
		}
		var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
}
//引入页面的主题对应文件
function initThemeFile(theme){
	dynamicLoading.css('app/styles/global/'+theme+'/style.less');
	dynamicLoading.css('app/styles/global/'+theme+'/playSlider.css');
	dynamicLoading.js('app/util/global/'+theme+'/libs/modernizr.min.js');
	dynamicLoading.js('app/util/global/'+theme+'/general.js');
	dynamicLoading.js('app/util/global/'+theme+'/jquery.customInput.js');
}