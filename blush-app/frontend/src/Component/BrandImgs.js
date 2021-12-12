import React from "react";

function BrandImgs() {
  return (
    <div>
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <img
              className="object-cover w-30 h-30 rounded shadow"
              src="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_09.jpg"
              alt="Person"
            />
          </div>
          <div>
            <img
              className="object-cover w-30 h-30 rounded shadow"
              src="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_15.jpg"
              alt="Person"
            />
          </div>
          <div>
            <img
              className="object-cover w-30 h-30 rounded shadow"
              src="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_14.jpg"
              alt="Person"
            />
          </div>
          <div>
            <img
              className="object-cover w-30 h-30 rounded shadow"
              src="https://a.namshicdn.com/cms/large/women/20210113/makeup/module_12.jpg"
              alt="Person"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandImgs;
