var test = require('tape');

var testCases = [
  {
    name: 'Base case',
    filledHTML: `<html><body>

    <form id="the-form">
      <input data-of="beatName" type="text" value="The Raw Iron Temple"></input>
      <input data-of="beatSeq" type="number" value="23"></input>
      <ul>
        <li contenteditable data-of="array|chars">Lu Chi Shen</li>
        <li contenteditable data-of="array|chars">The Raw Iron Priest</li>
        <li contenteditable data-of="array|chars">Priest's lackey</li>
      </ul>

      <h3>The happening</h3>
      <h4>Emitters</h4>
      <ul>
        <li contenteditable data-of"happening/array|emitters">Lu Chi Shen</li>
      </ul>
      <h4>Action</h4>
      <input data-of="happening/action" type="text">Kill</input>
      <h4>Receivers</h4>
      <ul>
        <li contenteditable data-of"happening/array|receivers">The Raw Iron Priest</li>
        <li contenteditable data-of"happening/array|receivers">Priest's lackey</li>
      </ul>

      <button id="submit-beat-button">Save</button>
    </form>
    </body></html>`,
    unfilledHTML: `<html><body>

    <form id="the-form">
      <input data-of="beatName" type="text" value=""></input>
      <input data-of="beatSeq" type="number" value=""></input>
      <ul>
        <li contenteditable data-of="array|chars"></li>
        <li contenteditable data-of="array|chars"></li>
        <li contenteditable data-of="array|chars"></li>
      </ul>

      <h3>The happening</h3>
      <h4>Emitters</h4>
      <ul>
        <li contenteditable data-of"happening/array|emitters"></li>
      </ul>
      <h4>Action</h4>
      <input data-of="happening/action" type="text"></input>
      <h4>Receivers</h4>
      <ul>
        <li contenteditable data-of"happening/array|receivers"></li>
        <li contenteditable data-of"happening/array|receivers"></li>
      </ul>

      <button id="submit-beat-button">Save</button>
    </form>
    </body></html>`,
bject: {
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

  }
];

// TODO: Make target to run in Smokestack.
function runTests() {
  testCases.forEach(runTest);
}

function runTest(testCase) {
  test(testCase.name, conversionTest);

  function conversionTest(t) {
    // TODO: Start new tab. Add script tag 
    // with module to HTML. Set HTML.
    // Run function, check results.
  }
}
