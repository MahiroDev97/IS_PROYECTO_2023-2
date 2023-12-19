import { AuthProvider, useAuth } from '../context/AuthContext';
import { Layout} from 'antd';
import MenuList from '../components/MenuList';
import "/styles/Root.css";

const {Content,Sider } = Layout;

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
      <Content className="dark-background">
        <h1 className='title'>Bienvenido a la sección de patentes comerciales</h1>
        <p>Aquí encontrarás toda la información para postular y ver el estado de tu postulación a patentes comerciales</p>
        <div className="grid-container">
          <div>
            <p>Recuerda que tus postulaciones serán revisadas por un funcionario de la municipalidad. una vez envies tu postulación no podrás modificarla</p>
          </div>
          <div>
            <p>Recuerda que para patente comercial necesitas lo siguiente:</p>
            <ul>
            <li>Fotocopia de la cédula de identidad del representante legal</li>
            <li>Contrato de arriendo</li>
            <li>Certificado de avalúo fiscal</li>
            <li>Poder notarial que autoriza la representación, en original</li>
            <li>Escritura de constitución de sociedad</li>
            <li>Inicio de actividades ante el Servicio de Impuestos Internos (SII)</li>
            <li>Informe de factibilidad</li>
            <li>Constitución de la Sociedad junto con su publicación en el diario oficial</li>
            <li>Certificado de dominio o el contrato de arriendo</li>
            </ul>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Root;