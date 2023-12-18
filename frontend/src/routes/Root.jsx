import { AuthProvider, useAuth } from '../context/AuthContext';
import { Layout} from 'antd';
import MenuList from '../components/MenuList';
import "/styles/Root.css";
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
        <MenuList/>
    </Layout>
  );
}

export default Root;