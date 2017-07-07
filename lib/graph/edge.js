'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Edge = function () {
  function Edge(firstVertex, lastVertex) {
    _classCallCheck(this, Edge);

    this.firstVertex = firstVertex;
    this.lastVertex = lastVertex;
  }

  _createClass(Edge, [{
    key: 'getFirstVertex',
    value: function getFirstVertex() {
      return this.firstVertex;
    }
  }, {
    key: 'getLastVertex',
    value: function getLastVertex() {
      return this.lastVertex;
    }
  }]);

  return Edge;
}();

module.exports = Edge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ncmFwaC9lZGdlLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJmaXJzdFZlcnRleCIsImxhc3RWZXJ0ZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEk7QUFDSixnQkFBWUMsV0FBWixFQUF5QkMsVUFBekIsRUFBcUM7QUFBQTs7QUFDbkMsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOzs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0QsV0FBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJKLElBQWpCIiwiZmlsZSI6ImVkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVkZ2Uge1xuICBjb25zdHJ1Y3RvcihmaXJzdFZlcnRleCwgbGFzdFZlcnRleCkge1xuICAgIHRoaXMuZmlyc3RWZXJ0ZXggPSBmaXJzdFZlcnRleDtcbiAgICB0aGlzLmxhc3RWZXJ0ZXggPSBsYXN0VmVydGV4O1xuICB9XG5cbiAgZ2V0Rmlyc3RWZXJ0ZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RWZXJ0ZXg7XG4gIH1cbiAgXG4gIGdldExhc3RWZXJ0ZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFZlcnRleDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVkZ2U7XG4iXX0=