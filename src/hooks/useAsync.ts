import React, { useCallback, useState } from "react";

type HTTPConfig = {
  callFunction: (args?: any) => Promise<any>;
  dataHandler?: (data: any) => void;
  initCall?: boolean;
};

type HTTPProps = <T>(config: HTTPConfig) => {
  isLoading: boolean;
  isSending: boolean;
  data: T | any;
  error: any;
  status?: number;
  call: () => Promise<any>;
};

const useAsync: HTTPProps = ({
  callFunction,
  dataHandler,
  initCall = true,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any | null>(null);
  const [status, setStatus] = useState<number>();

  const call = useCallback(async () => {
    try {
      setIsSending(true);
      setIsLoading(true);
      const response = await callFunction();
      setData(response);
      if (dataHandler) {
        dataHandler(response);
      }
      setError(false);
      if (response.status) setStatus(response.status);
    } catch (err) {
      const errorResponse = err as any;
      if (errorResponse) {
        setError(errorResponse);
        if (errorResponse?.status) setStatus(errorResponse?.status);
      } else {
        setError("unknownError");
      }
    } finally {
      setIsLoading(false);
      setIsSending(false);
    }
  }, [callFunction, dataHandler]);

  React.useEffect(() => {
    if (initCall) {
      call();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initCall]);

  return {
    isLoading,
    isSending,
    data,
    error,
    status,
    call,
  };
};

export default useAsync;
