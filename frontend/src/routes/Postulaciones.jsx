import { AuthProvider, useAuth } from "../context/AuthContext";
import { Layout } from "antd";
import MenuList from "../components/MenuList";

const { Content, Sider } = Layout;

function Root() {
  return (
    <AuthProvider>
      <PagePostulaciones />
    </AuthProvider>
  );
}

function PagePostulaciones() {
    const { user } = useAuth();
    return (
      <Layout>
        <MenuList/>
        <Content className="dark-background">
          <h1 className='title'>Mis Postulaciones</h1>
        </Content>
      </Layout>
    );
  }
  
  export default Postulaciones;
