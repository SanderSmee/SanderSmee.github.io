'use strict'

const asciidoc = require('./lib/asciidoc');

hexo.extend.renderer.register('ad', 'html', asciidoc, true);
hexo.extend.renderer.register('adoc', 'html', asciidoc, true);
hexo.extend.renderer.register('asciidoc', 'html', asciidoc, true);
