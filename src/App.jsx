import "./App.css";

import Risk from "./components/Risk";

function App() {
  return (
    <>
      {/* entire div */}
      <div className="flex flex-col items-center w-fit">
        {/* black box top */}
        <div className="bg-black p-5 w-[450px] mt-5 rounded-xl">
          <p className="text-gray-400">🌳BAD OUTCOME #1</p>
          <p className="text-white text-3xl">900M = malnutrition.</p>
          <p className="text-gray-400">
            Globally, 1 in 3 ≠ safe drinking water, mostly ≠ LDC's
          </p>

          {/* 3 green buttons */}
          <div className="flex">
            <Risk
              basis={"basis-4/12"}
              content={"HIGH..."}
              bg_colour={"bg-green-700"}
            />
            <Risk
              basis={"basis-4/12"}
              content={"HIGH..."}
              bg_colour={"bg-green-700"}
            />
            <Risk
              basis={"basis-4/12"}
              content={"HIGH..."}
              bg_colour={"bg-green-700"}
            />
          </div>

          <p className="text-white text-xl">SUMMARY</p>
          <p className="text-gray-400">{`😮Inaction cost: {xx}, {yy} QALY's, {zz} monetary`}</p>
          <p className="text-gray-400">{`💰Cost to solve problem now: {xx} people, {yy} invenestment, {zz} opportunity cost v. others.`}</p>
          <p className="text-gray-400">{`💰Opportunity for innovation. Reduce cost by {xx%} by fixing {1, 2, 3}, improving ROI by {yy} per $ + hr spent.`}</p>
          <p className="text-gray-400">
            🌎Gap: Technologies $ operational risk. High CapEx.
          </p>
        </div>

        {/* divider */}
        <div className="h-screen bg-gray-700 w-[3px]"></div>

        {/* bottom boxes */}
        <div className="flex [&>*]:mx-2 [&>*]:w-[450px]">
          <div className="bg-orange-300 p-5 mb-5 rounded-xl">
            <p className="text-white">🌳BUCKET #1</p>
            <p className="text-white text-3xl">30% = food and ag.</p>
            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>

          <div className="bg-red-500 p-5 mb-5 rounded-xl">
            <p className="text-white">🌳BUCKET #2</p>
            <p className="text-white text-3xl">10% = healthcare.</p>
            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>

          <div className="bg-sky-500 p-5 mb-5 rounded-xl">
            <p className="text-white">🌳BUCKET #3</p>
            <p className="text-white text-3xl">25% water.</p>
            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>

          <div className="bg-lime-950 p-5 mb-5 rounded-xl">
            <p className="text-white">🌳BUCKET #4</p>
            <p className="text-white text-3xl">25% energy.</p>
            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>

          <div className="bg-orange-400 p-5 mb-5 rounded-xl">
            <p className="text-white">🌳BUCKET #5</p>
            <p className="text-white text-3xl">3% = housing.</p>
            <div className="flex">
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
              <Risk
                basis={"basis-4/12"}
                content={"XXX..."}
                bg_colour={"bg-green-700"}
              />
            </div>
          </div>

          <div className="bg-green-600 p-5 mb-5 rounded-xl">
            <p className="text-white">🌳BUCKET #6</p>
            <p className="text-white text-3xl">5% = environment.</p>
            <div className="flex">
              <Risk basis={"basis-4/12"} content={"XXX..."} />
              <Risk basis={"basis-4/12"} content={"XXX..."} />
              <Risk basis={"basis-4/12"} content={"XXX..."} />
            </div>
          </div>

          <div className="bg-purple-700 p-5 mb-5 rounded-xl">
            <p className="text-white">🌳BUCKET #7</p>
            <p className="text-white text-3xl">2% economic.</p>
            <div className="flex">
              <Risk basis={"basis-4/12"} content={"XXX..."} />
              <Risk basis={"basis-4/12"} content={"XXX..."} />
              <Risk basis={"basis-4/12"} content={"XXX..."} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
