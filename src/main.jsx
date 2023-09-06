import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";
import "./i18n";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";
import { PageContextProvider } from "./context/PageContext.jsx";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#caba9c",
          colorLink: "#caba9c",
          colorPrimaryBg: "#fff",
        },
      }}
    >
      <PageContextProvider>
        <App />
      </PageContextProvider>
    </ConfigProvider>
  </QueryClientProvider>
);
