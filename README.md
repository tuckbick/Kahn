# Kahn

An implementation of Kahn's algorithm.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Building](#building)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This algorithm will topologically sort a graph, if there are no cycles, otherwise it will report the cycles. The [Wikipedia page on topological sorting](https://en.wikipedia.org/wiki/Topological_sorting) has a brief explanation of the algorithm.
    
## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-kahn

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone git@github.com:occam-proof-assistant/Kahn.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.
        
## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* jecs@imperial.ac.uk
* http://djalbat.com