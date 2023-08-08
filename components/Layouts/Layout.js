import Image from "next/image";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import TabBar from "../TabBar/TabBar";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Footer />
      <TabBar />
      <div className={styles.heroFooter}>
        <Image
          alt="hero"
          objectFit="cover"
          layout="fill"
          src="/assets/hero.png"
        />
      </div>
    </div>
  );
};

export default Layout;
