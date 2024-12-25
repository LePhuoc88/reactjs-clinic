import Header from '../components/Header';
import Footer from '../components/Footer';
import SidebarMenu from '../components/SidebarMenu';
import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import './SidebarLayout.scss';

function SidebarLayout({ children }) {
    return (
        <ProSidebarProvider>
            <div>
                <Header />
                <div className="content">
                    <div className="row">
                        <div className="col-lg-2">
                            <SidebarMenu />
                        </div>
                        <div className="col-lg-10 sider__layout_children">{children}</div>
                    </div>
                </div>
                <Footer />
            </div>
        </ProSidebarProvider>
    );
}

export default SidebarLayout;
