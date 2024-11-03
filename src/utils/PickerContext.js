import React, {createContext} from "react";

const PickerContext = createContext(
    {
        picker: false,
        setPicker: () => {},
    }
 );

 export { PickerContext }

