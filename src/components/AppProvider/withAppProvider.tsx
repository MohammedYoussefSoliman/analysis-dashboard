import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "app/i18n";

import { store, persister } from "app/state";

export default function withAppProviders<T>(
  WrappedComponent: React.ComponentType<T>,
) {
  function Wrapper(props: T) {
    return (
      <ReduxProvider store={store}>
        <PersistGate
          loading={<span>loading persisted Data</span>}
          persistor={persister}
        >
          <Router>
            <WrappedComponent {...props} />
          </Router>
        </PersistGate>
      </ReduxProvider>
    );
  }

  return Wrapper;
}
