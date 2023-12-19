import { AuthProvider, useAuth } from '../context/AuthContext';
import { Layout} from 'antd';
import MenuList from '../components/MenuList';
import "/styles/Root.css";

const {Content,Sider } = Layout;

function Postulaciones() {
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