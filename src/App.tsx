import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './layouts/Error';
import Home from './layouts/Home';

const App: React.FC<unknown> = () => {
  const errorHandler = (error: Error, info: { componentStack: string }) => {
    console.error('Logging: ', error, info);
  };

  return (
    <ErrorBoundary FallbackComponent={Error} onError={errorHandler}>
      <Home />
    </ErrorBoundary>
  );
};

export default App;
