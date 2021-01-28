
/* IMPORT */

import {describe} from 'ava-spec';
import {default as merge} from '../dist';
import Fixtures from './fixtures';

/* PLAIN OBJECT MERGE */

describe ( 'Plain Object Merge', it => {

  it ( 'works', t => {

    t.deepEqual ( merge ( Fixtures.parts ), Fixtures.result );

  });

  it('disallows prototype pollution', t => {
    t.throws(() => merge([{}, JSON.parse('{"__proto__": {"polluted": true}}')]))
  })

});
