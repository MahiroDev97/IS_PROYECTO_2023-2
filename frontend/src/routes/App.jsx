import "../styles/App.css";

function CuadroUno() {
  return (
    <div>
      <h2>¿Qué necesito para postular?</h2>
      <ul>
        <li>
          Escritura de constitución de sociedad, protocolización del extracto y
          publicación en Diario Oficial, si la solicitud corresponde a una
          persona jurídica.
        </li>
        <li>
          Inicio de actividades ante el Servicio de Impuestos Internos (SII),
          que lo autoriza a iniciar cualquier emprendimiento comercial, si es
          que pide patente por primera vez.
        </li>
        <li>
          Documento que acredite el título por el que se ocupa el local:
          contrato de arriendo, certificado de dominio, etc.
        </li>
        <li>
          Si la solicitud corresponde a una sucursal o cambio de domicilio,
          presente el documento emitido por el SII que así lo acredite.
        </li>
        <li>
          Si la solicitud corresponde a una sucursal, deberá presentar el
          certificado de distribución de capital propio emitido por la
          municipalidad donde opera la casa matriz.
        </li>
        <li>
          Si es un cambio de domicilio desde otra comuna, hay que presentar
          también el balance del último año, la determinación del capital propio
          y de los trabajadores que laboren en el establecimiento comercial.
        </li>
        <li>
          Informe de factibilidad, permiso de edificación y recepción final del
          inmueble donde se desarrollará el negocio, otorgados por la Dirección
          de Obras de la Municipalidad.
        </li>
      </ul>
    </div>
  );
}

function CuadroDos() {
  return (
    <div>
      <h2>¿Cuánto cuesta sacar una patente?</h2>
      <ul>
        <li>
          El pago de la patente es anual y su precio varía en cada
          municipalidad. El monto a pagar es entre el 2,5 por mil y el 5 por mil
          del capital propio del negocio, declarado ante Impuestos Internos, con
          un mínimo de 1 UTM y un máximo de 8 mil UTM al año.
        </li>
        <li>
          Por ejemplo, si el capital del negocio es de $100 millones y la
          municipalidad cobra el 5 por mil, la patente será de $500.000.
        </li>
        <li>
          Si bien el pago es anual, las municipalidades permiten el pago en dos
          cuotas semestrales.
        </li>
      </ul>
    </div>
  );
}

function CuadroTres() {
  return (
    <div>
      <h2>¿Cuánto demora el trámite de la patente?</h2>
      <ul>
        <li>
          Este factor también varía dependiendo de las municipalidades, pero se
          maneja un plazo de cinco días hábiles.
        </li>
        <li>Las patentes de alcoholes demoran entre 30 y 45 días.</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <CuadroUno />
      <CuadroDos />
      <CuadroTres />
    </div>
  );
}

export default App;
