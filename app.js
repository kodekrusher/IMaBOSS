var konex = require('connect'); var JAx = process.env.PORT || 8000; console.log('SERVR b LiSTNIN in JaK ' + JAx); var srvs = konex().use(konex.static(__dirname + '/public')).listen(JAx);
