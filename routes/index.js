
    exports.index = function(req, res){
        res.render('index', { title: 'Home' ,name : 'The Will to Win'});
    };
	
	

    exports.smile = function(req, res){
        res.render('smile', { title: 'Smile Please',name:'The Zen of Smiling Buddha' });
    };
    exports.ninja = function(req, res){
        res.render('ninja', { title: 'Hacker Ninja',name:'The Zen of a Hacker-Ninja' });
    };


