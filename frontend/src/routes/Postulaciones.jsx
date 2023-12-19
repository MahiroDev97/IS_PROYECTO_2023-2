import { AuthProvider, useAuth } from "../context/AuthContext";
import { Layout } from "antd";
import MenuList from "../components/MenuList";
import "/styles/Root.css";

const { Content, Sider } = Layout;

function Postulaciones() {
  return (
    <AuthProvider>
      <PagePostulaciones />
    </AuthProvider>
  );
}

import { Table } from "antd";

const { Column } = Table;

function PagePostulaciones() {
    const { user } = useAuth();

    const data = [
        {
            fecha: "2022-10-10",
            id: 1,
            tipoPostulacion: "Tipo A",
            estado: "Aprobado",
        },
        {
            fecha: "2022-10-11",
            id: 2,
            tipoPostulacion: "Tipo B",
            estado: "Pendiente",
        },
        // Agrega más datos aquí según sea necesario
    ];

    return (
        <Layout>
            <MenuList />
            <Content className="dark-background">
                <h1 className="title">Mis Postulaciones</h1>

                <Table dataSource={data}>
                    <Column title="Fecha" dataIndex="fecha" key="fecha" render={(text) => {
                        const date = new Date(text);
                        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                        return formattedDate;
                    }} />
                    <Column title="ID" dataIndex="id" key="id" />
                    <Column
                        title="Tipo de Postulacion"
                        dataIndex="tipoPostulacion"
                        key="tipoPostulacion"
                    />
                    <Column title="Estado" dataIndex="estado" key="estado" />
                </Table>
            </Content>
        </Layout>
    );
}

export default Postulaciones;
