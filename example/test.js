var hipchatClient = require('../')('aee0523648bbeb0fe89ccc02acff8d');

hipchatClient.apiCall('GET', '/rooms/list', {}, function(err, resp) {
    if(!err) {
        hipchatClient.apiCall('GET', '/rooms/history', 
                                {room_id:resp.rooms[0].room_id, date:'recent'}, function(err, resp) {
            if(!err) {
                console.log(resp);
            }
        });
    }
});