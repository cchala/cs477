const dns=require('dns')

dns.resolve4('www.miu.edu', function(err, address) {
    if (err) throw err;
    console.log(address);
});
