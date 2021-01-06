const assert = require('assert');
const Room = require('../room.js');
const PaintCan = require('../paint_can.js')

describe('Room', function(){
    let room;
    beforeEach(function(){
        room = new Room(10)
    });

    it('should have an area', function(){
        const actual = room.area;
        assert.equal(actual, 10);
    });

    it('should not be painted', function() {
        const actual = room.painted;
        assert.equal(actual, false);
    })

});


describe ('PaintCan', function() {
    let paintCan;
    beforeEach(function(){
        paintCan = new paintCan(1)
    });

    it('checks if the checking function works', function(){
        const actual = paintCan.checkEmpty();
        assert.equal(actual, false);
    });
});
