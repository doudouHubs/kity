define(function(require, exports, module) {
    var Point = require('graphic/point');

    var Marker = require('core/class').createClass('Marker', {
        base: require('graphic/resource'),
        mixins: [require('graphic/shapecontainer'), require('graphic/viewbox')],

        constructor: function() {
            this.callBase('marker');
            this.setOrient('auto');
        },

        setRef: function(x, y) {
            if (arguments.length === 1) {
                y = x.y;
                x = x.x;
            }
            this.node.setAttribute('refX', x);
            this.node.setAttribute('refY', y);
            return this;
        },

        getRef: function() {
            return new Point(+this.node.getAttribute('refX'), +this.node.getAttribute('refY'));
        },

        setWidth: function(width) {
            this.node.setAttribute('markerWidth', this.width = width);
            return this;
        },

        setOrient: function(orient) {
            this.node.setAttribute('orient', this.orient = orient);
            return this;
        },

        getOrient: function() {
            return this.orient;
        },

        getWidth: function() {
            return +this.width;
        },

        setHeight: function(height) {
            this.node.setAttribute('markerHeight', this.height = height);
            return this;
        },

        getHeight: function() {
            return +this.height;
        }
    });

    var Path = require('graphic/path');

    require('core/class').extendClass(Path, {
        setMarkerStart: function(marker) {
            this.node.setAttribute('marker-start', marker.toString());
        },

        setMarkerMid: function(marker) {
            this.node.setAttribute('marker-mid', marker.toString());
        },

        setMarkerEnd: function(marker) {
            this.node.setAttribute('marker-end', marker.toString());
        }
    });

    return Marker;
});