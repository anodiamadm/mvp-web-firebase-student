import { useState } from "react";

const TabControl = () => {
  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return ( 
    <>
      <div className="tab-container">
        <div className="bloc-tabs">
          <div className={toggleState===1 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(1)}>Tab1</div>
          <div className={toggleState===2 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(2)}>Tab2</div>
          <div className={toggleState===3 ? "tabs active-tabs" : "tabs"} onClick={()=>toggleTab(3)}>Tab3</div>
        </div>
        <div className="content-tabs">
          <div className={toggleState===1 ? "tab-content active-tab-content" : "tab-content"}>
            <h2>Content 1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id provident ea temporibus! Quaerat, culpa voluptatem.
            </p>
          </div>
          <div className={toggleState===2 ? "tab-content active-tab-content" : "tab-content"}>
            <h2>Content 2</h2>
            <hr />
            <p>
              Minus id provident ea temporibus! Quaerat, culpa voluptatem nemo labore dolores necessitatibus suscipit commodi?.
            </p>
          </div>
          <div className={toggleState===3 ? "tab-content active-tab-content" : "tab-content"}>
            <h2>Content 3</h2>
            <hr />
            <p>
              Quaerat, culpa voluptatem nemo labore dolores necessitatibus suscipit commodi? Commodi, quae enim odio odit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default TabControl