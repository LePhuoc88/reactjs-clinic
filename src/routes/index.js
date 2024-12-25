import SidebarLayout from '../components/Layout/SidebarLayout';
import AdminLayout from '../Pages/Admin/Layout/AdminLayout';

import Home from '../Pages/Home';
import DoctorDetail from '../Pages/DoctorDetail';
import SpecialtyDetail from '../Pages/SpecialtyDetail';
import Specialty from '../Pages/Specialty';
import Doctor from '../Pages/Doctor';
import Facility from '../Pages/Facility';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import FacilityDetail from '../Pages/FacilityDetail';
import UserInfo from '../Pages/UserInfo';
import MedicalHistory from '../Pages/MedicalHistory';
import PatientManage from '../Pages/PatientManage';
import AddPrescript from '../Pages/PatientManage/AddPrescript';
import ManageDayDoctor from '../Pages/ManageDayDoctor';
import Dashboard from '../Pages/Admin/Pages/Dashboard';
import DoctorManage from '../Pages/Admin/Pages/DoctorManage';
import UserManage from '../Pages/Admin/Pages/UserManage';
import FacilityManage from '../Pages/Admin/Pages/FacilityManage';
import SpecialtyManage from '../Pages/Admin/Pages/SpecialtyManage';
import MedicationManage from '../Pages/Admin/Pages/MedicationManage';
import AddDoctor from '../Pages/Admin/Pages/DoctorManage/AddDoctor';
import EditDoctor from '../Pages/Admin/Pages/DoctorManage/EditDoctor';
import AddMedication from '../Pages/Admin/Pages/MedicationManage/AddMedication';
import AddSpecialty from '../Pages/Admin/Pages/SpecialtyManage/AddSpecialty';
import AddFacility from '../Pages/Admin/Pages/FacilityManage/AddFacility';
import CalendarManage from '../Pages/Admin/Pages/CalendarManage';
import AddUser from '../Pages/Admin/Pages/UserManage/AddUser';
import Invoice from '../Pages/MedicalHistory/Invoice';
import InvoiceDoctor from '../Pages/PatientManage/InvoiceDoctor';

// Public routes
const publicRoutes = [
    { path: '/Login', component: Login, layout: 'Null' },
    { path: '/Register', component: Register, layout: 'Null' },
    { path: '/', component: Home },
    { path: '/chi-tiet-bac-si', component: DoctorDetail },
    { path: '/chi-tiet-chuyen-khoa', component: SpecialtyDetail },
    { path: '/chuyen-khoa', component: Specialty },
    { path: '/bac-si', component: Doctor },
    { path: '/co-so-y-te', component: Facility },
    { path: '/chi-tiet-co-so-y-te', component: FacilityDetail },
    { path: '/thong-tin-nguoi-dung', component: UserInfo, layout: SidebarLayout },
    { path: '/lich-su-kham-benh', component: MedicalHistory, layout: SidebarLayout },
    { path: '/quan-ly-ca-kham', component: ManageDayDoctor, layout: SidebarLayout },
    { path: '/quan-ly-benh-nhan', component: PatientManage, layout: SidebarLayout },
    { path: '/quan-ly-benh-nhan/tao-don-thuoc', component: AddPrescript, layout: SidebarLayout },
    { path: '/lich-su-kham-benh/don-thuoc', component: Invoice, layout: SidebarLayout },
    { path: '/quan-ly-benh-nhan/don-thuoc', component: InvoiceDoctor, layout: SidebarLayout },

    // Admin
    { path: '/Dashboard', component: Dashboard, layout: AdminLayout },
    { path: '/quan-ly-bac-si', component: DoctorManage, layout: AdminLayout },
    { path: '/quan-ly-nguoi-dung', component: UserManage, layout: AdminLayout },
    { path: '/quan-ly-benh-vien', component: FacilityManage, layout: AdminLayout },
    { path: '/quan-ly-chuyen-khoa', component: SpecialtyManage, layout: AdminLayout },
    { path: '/quan-ly-thuoc', component: MedicationManage, layout: AdminLayout },
    { path: '/quan-ly-lich-kham-benh', component: CalendarManage, layout: AdminLayout },
    { path: '/quan-ly-bac-si/them-bac-si', component: AddDoctor, layout: AdminLayout },
    { path: '/quan-ly-bac-si/sua-bac-si', component: EditDoctor, layout: AdminLayout },
    { path: '/quan-ly-thuoc/them-thuoc', component: AddMedication, layout: AdminLayout },
    { path: '/quan-ly-chuyen-khoa/them-chuyen-khoa', component: AddSpecialty, layout: AdminLayout },
    { path: '/quan-ly-benh-vien/them-benh-vien', component: AddFacility, layout: AdminLayout },
    { path: '/quan-ly-nguoi-dung/them-nguoi-dung', component: AddUser, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
