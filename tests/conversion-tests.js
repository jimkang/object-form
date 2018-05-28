var test = require('tape');
var of = require('../index');

var testCases = [
  {
    name: 'Base case',
    filledHTML: `<body>

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
    </body>`,
    object: {
      beatName: 'The Raw Iron Temple',
      beatSeq: 23,
      chars: ['Lu Chi Shen', 'The Raw Iron Priest', "Priest's lackey"],
      happening: {
        emitters: ['Lu Chi Shen'],
        action: 'Kill',
        receivers: ['The Raw Iron Priest', "Priest's lackey"]
      }
    }
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test(testCase.name, conversionTest);

  function conversionTest(t) {
    document.body.innerHTML = testCase.filledHTML;
    var objectFromDOM = of.ObjectFromDOM({});
    var obj = objectFromDOM(document);
    t.deepEqual(obj, testCase.object, 'Extracted object is correct.');
    t.end();
  }
}
