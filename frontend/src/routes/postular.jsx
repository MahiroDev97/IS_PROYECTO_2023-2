import { AuthProvider, useAuth } from '../context/AuthContext';
import { Layout} from 'antd';
import MenuList from '../components/MenuList';
import "/styles/Root.css";
const {Content,Sider } = Layout;
function Postular() {
    return (
      <AuthProvider>
        <PagePostular />
      </AuthProvider>
    );
  }

  function PagePostular() {
    const { user } = useAuth();
    return (
      <Layout>
        <MenuList/>
        <Content className="dark-background">
          <h1 className='title'>Bienvenido a la sección de Postulación</h1>
          <p>Aquí debes subir todos los archivos de tu postulación para patente comercial</p>
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
              <input type='file' name = 'documents' multiple></input>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
  
  export default Postular;
  