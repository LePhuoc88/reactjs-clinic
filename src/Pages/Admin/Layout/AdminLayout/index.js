import HeaderAdmin from '../Component/HeaderAdmin';
import SidebarAdmin from '../Component/SidebarAdmin';
import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';

function AdminLayout({ children }) {
    return (
        <ProSidebarProvider>
            <div>
                <HeaderAdmin />
                <div className="content_admin">
                    <div className="row">
                        <div className="col-lg-2">
                            <SidebarAdmin />
                        </div>
                        <div className="col-lg-10">{children}</div>
                    </div>
                </div>
            </div>
        </ProSidebarProvider>
    );
}

export default AdminLayout;
