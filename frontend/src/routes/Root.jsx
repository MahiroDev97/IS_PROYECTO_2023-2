import { AuthProvider, useAuth } from '../context/AuthContext';
import { Layout} from 'antd';
import MenuList from '../components/MenuList';

const { Sider } = Layout;
function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const { user } = useAuth();
  return (
    <Layout>
      <Sider>
        <MenuList />
      </Sider>
    </Layout>
  );
}

export default Root;