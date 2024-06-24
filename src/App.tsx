import "./App.css";
import { PageLayout } from "pages/PageLayout";
import { router } from "pages/Routes";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { OrderProvider } from "libs/order";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <PageLayout>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <OrderProvider>
              <RouterProvider router={router} />
            </OrderProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </PageLayout>
    </>
  );
}
