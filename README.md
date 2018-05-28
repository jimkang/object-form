object-form
==================

Given an object, set corresponding form values (or any DOM element values). Or given a root DOM element (which could be a form), put together an object.

Currently not implemented: Setting values. Only extracting values from the DOM to an object is done.

Installation
------------

    npm install --save object-form

Usage
-----

Given HTML like this:

    <form id="the-form">
      <input data-of="beatName" type="text" value="The Raw Iron Temple"></input>
      <input data-of="beatSeq" data-oftype="int" type="number" value="23"></input>
      <ul>
        <li contenteditable data-of="chars" data-oftype="array">Lu Chi Shen</li>
        <li contenteditable data-of="chars" data-oftype="array">The Raw Iron Priest</li>
        <li contenteditable data-of="chars" data-oftype="array">Priest's lackey</li>
      </ul>

      <h3>The happening</h3>
      <h4>Emitters</h4>
      <ul>
        <li contenteditable data-of="happening/emitters" data-oftype="array">Lu Chi Shen</li>
      </ul>
      <h4>Action</h4>
      <div data-of="happening/action" type="text" contenteditable>Kill</div>
      <h4>Receivers</h4>
      <ul>
        <li contenteditable data-of="happening/receivers" data-oftype="array">The Raw Iron Priest</li>
        <li contenteditable data-of="happening/receivers" data-oftype="array">Priest's lackey</li>
      </ul>

      <button id="submit-beat-button">Save</button>
    </form>
    </body>`,
    unfilledHTML: `<body>

    <form id="the-form">
      <input data-of="beatName" type="text" value=""></input>
      <input data-of="beatSeq" type="number" value=""></input>
      <ul>
        <li contenteditable data-of="chars" data-oftype="array"></li>
        <li contenteditable data-of="chars" data-oftype="array"></li>
        <li contenteditable data-of="chars" data-oftype="array"></li>
      </ul>

      <h3>The happening</h3>
      <h4>Emitters</h4>
      <ul>
        <li contenteditable data-of="happening/emitters" data-oftype="array"></li>
      </ul>
      <h4>Action</h4>
      <input data-of="happening/action" type="text"></input>
      <h4>Receivers</h4>
      <ul>
        <li contenteditable data-of="happening|receivers" data-oftype="array"></li>
        <li contenteditable data-of="happening|receivers" data-oftype="array"></li>
      </ul>

      <button id="submit-beat-button">Save</button>
    </form>

JS like this:

    var of = require('object-form');
    var objectFromDOM = of.ObjectFromDOM({
      hierarchyAttribute: 'data-of', // This is the default. You don't have to specify it.
      getValueFromElement: (el, hierarchyAttribute) => el.value || el.textContent // This is the default. You don't have to specify this.
    });
    console.log(objectFromDOM(window.document.getElementById('the-form') // This can be any object that implements querySelector and querySelectorAll, just meaning that it returns an object for a string.
    );
      
Will log:

    {
      beatName: 'The Raw Iron Temple',
      beatSeq: 23,
      chars: [
        'Lu Chi Shen',
        'The Raw Iron Priest',
        'Priest\'s lackey'
      ],
      happening: {
        emitters: [
          'Lu Chi Shen'
        ],
        action: 'Kill',
        receivers: [
          'The Raw Iron Priest',
          'Priest\'s lackey'
        ]
      }
    }

And you can post that to an API or something.

It doesn't do any rendering. That's all up to you.

Tests
-----

Tests are run in your local Firefox and Chrome via [smokestack](https://npmjs.com/package/smokestack).

Run them with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2018 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
