import React from 'react';
import image from '../assets/images/dig.png';
import ContentWrapper from './ContentWrapper';
import UsersInDb from './UsersInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowData from './ContentRowData';
import ListaProductos from './ListaProductos';
import ListaUsuarios from './ListaUsuarios';
import DetalleProducto from './DetalleProducto';
import DetalleUsuario from './DetalleUsuario';
import Alertas from './Alertas';
import Emails from './Emails';
import Login from './Login';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';

function SideBar() {
  
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
  
                    <div className="sidebar-brand-icon" style={{ marginTop: "10px" }}>
                        <img className="w-25 rounded-circle" src={image} alt="Digital Burger"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Digital Burger</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>
                

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/ListaProductos">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/ListaUsuarios">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Usuarios</span>
                    </Link>
                </li>
                

                

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentRowData">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>

                {/*<!-- Nav Item - Login -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Login">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Iniciar Session</span></Link>
                </li>

       
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
           
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/UsersInDb">
                    <UsersInDb />
                </Route>
                <Route path="/LastproductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowData">
                    <ContentRowData />
                </Route>
                <Route path="/ListaProductos">
                <ListaProductos />
                </Route>
                <Route path="/producto/:id/detail" component={DetalleProducto} />
                <Route path="/ListaProductos">
                    <ListaProductos />
                </Route>
                <Route path="/ListaUsuarios">
                <ListaUsuarios />
                </Route>
                <Route path="/usuarios/:id/profile" component={DetalleUsuario} />
                <Route path="/ListaUsuarios">
                    <ListaUsuarios />
                </Route>
                <Route path="/Alertas" component={Alertas} />
                <Route path="/Emails" component={Emails} />
            
                <Route path='/Login'component={Login} />
                <Route component={NotFound} />
                
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;