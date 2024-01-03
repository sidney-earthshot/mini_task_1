import "./App.css";

function App() {
  return (
    <>
      {/* entire div */}
      <div className="flex justify-center">
        {/* black box top */}
        <div className="bg-black p-5 w-5/12 mt-5 rounded-xl">
          <p className="text-gray-400">🌳BAD OUTCOME #1</p>
          <p className="text-white text-3xl">900M = malnutrition.</p>
          <p className="text-gray-400">
            Globally, 1 in 3 ≠ safe drinking water, mostly ≠ LDC's
          </p>

          {/* 3 green buttons */}
          <div className="flex">
            <div className="text-white text-sm bg-green-700 basis-4/12 px-3 py-1 mr-4 my-2 rounded-full">
              HIGH...
            </div>
            <div className="text-white text-sm bg-green-700 basis-4/12 px-3 py-1 mr-4 my-2 rounded-full">
              HIGH...
            </div>
            <div className="text-white text-sm bg-green-700 basis-3/12 px-3 py-1 mr-4 my-2 rounded-full">
              HIGH...
            </div>
          </div>

          <p className="text-white text-xl">SUMMARY</p>
          <p className="text-gray-400">{`😮Inaction cost: {xx}, {yy} QALY's, {zz} monetary`}</p>
          <p className="text-gray-400">{`💰Cost to solve problem now: {xx} people, {yy} invenestment, {zz} opportunity cost v. others.`}</p>
          <p className="text-gray-400">{`💰Opportunity for innovation. Reduce cost by {xx%} by fixing {1, 2, 3}, improving ROI by {yy} per $ + hr spent.`}</p>
          <p className="text-gray-400">
            🌎Gap: Technologies $ operational risk. High CapEx.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
