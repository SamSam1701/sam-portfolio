import { Footer, Header } from "../components/commons";

type TMainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<TMainLayout> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
