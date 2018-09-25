//bootstrapping
import {render} from "react-dom";
import React from "react";

import Routes from "./app/Routes";

render(<Routes />,
    document.getElementById("root")
)