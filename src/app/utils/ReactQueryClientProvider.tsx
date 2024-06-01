"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient(
        //선택사항이다. 이렇게 설정하면 기본 staleTime을 1분으로 정해서
        //1분마다 업데이트 시킬 수 있다.
        {
          defaultOptions: {
            queries: {
              staleTime: 60 * 1000,
            },
          },
        }
      )
  );
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
