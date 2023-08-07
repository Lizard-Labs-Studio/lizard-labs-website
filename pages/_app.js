import Layout from "../components/Layouts/Layout";
import "../styles/Globals.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode='wait'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </AnimatePresence>
  );
}

export default MyApp;
