"use client";

import { FunctionComponent, useEffect } from "react";
import { useMutation } from "react-query";
import { postSession } from "@/client/query-fns";

const SessionFetch: FunctionComponent = () => {
  const { mutate: createSession } = useMutation(postSession);

  useEffect(() => {
    createSession();
  }, [createSession]);

  return <></>;
};

export { SessionFetch };
