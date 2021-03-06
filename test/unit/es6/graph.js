'use strict';

const chai = require('chai');

const Graph = require('../../../es6/graph');

const { assert } = chai;

describe('es6/common/Graph', function() {
  describe('#fromVertexLiterals', function() {
    describe('given an empty list of vertex literals', function() {
      const vertexLiterals = [];

      it('Returns an instance of the Graph class', function() {
        const graph = Graph.fromVertexLiterals(vertexLiterals);

        assert.instanceOf(graph, Graph);
      });
    });

    describe('given a list of vertex literals', function() {
      const vertexLiterals = [

        // ['a', ['b']],
        // ['b', ['c']],
        // ['d', ['c','a']],
        // ['e', []],
        // ['f', ['g']],
        // ['h', ['g']]
          
        [ 5, [ 4, 2 ]],
        [ 4, [ 3 ] ],
        [ 3, [ 1 ] ]
          
      ];

      it('Returns a graph with the requisite topologically ordered vertices', function() {
        const graph = Graph.fromVertexLiterals(vertexLiterals);

        assert.instanceOf(graph, Graph);
      });
    });
  });
});
