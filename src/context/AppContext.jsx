/*-- Context API for Handling Global State --*/
import PropTypes from "prop-types";
import React, { useState } from "react";

export const AppContext = React.createContext([{}, function () {}]);

export const ContextProvider = (props) => {
  const [appContext, setAppContext] = useState({
    selectedVehicle: {},
  });

  return (
    <AppContext.Provider value={[appContext, setAppContext]}>
      {props.children}
    </AppContext.Provider>
  );
};

ContextProvider.propTypes = {
  props: PropTypes.object,
  children: PropTypes.any,
};

ContextProvider.defaultProps = {
  props: { children: null },
};
