import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { SoumissionPageComponent } from './components/soumission/soumission-page.component';
import { AuthGuardAdmin } from './auth/auth-admin.guard';
import { MaterialsComponent } from './components/pages/admin/materials/materials.component';
import { ClientOrdersComponent } from './components/pages/client/client-orders/client-orders.component';
import { PendingQuoteComponent } from './components/pages/client/pending-quote/pending-quote.component';
import { EditQuoteComponent } from './components/pages/client/edit-quote/edit-quote.component';
import { NewQuoteComponent } from './components/pages/client/new-quote/new-quote.component';
import { ClientsComponent } from './components/pages/admin/clients/clients.component';
import { InventoryComponent } from './components/pages/admin/inventory/inventory.component';
import { OrdersComponent } from './components/pages/admin/orders/orders.component';
import { QuotesComponent } from './components/pages/admin/quotes/quotes.component';
import { CostingComponent } from './components/pages/admin/costing/costing.component';

export const routes: Routes = [
  { path: '', component: MaterialsComponent },
  { path: 'admin/materials', component: MaterialsComponent, canActivate: [AuthGuardAdmin] },
  { path: 'admin/costing', component: CostingComponent, canActivate: [AuthGuardAdmin] },
  { path: 'admin/quotes', component: QuotesComponent, canActivate: [AuthGuardAdmin] },
  { path: 'admin/orders', component: OrdersComponent, canActivate: [AuthGuardAdmin] },
  { path: 'admin/inventory', component: InventoryComponent, canActivate: [AuthGuardAdmin] },
  { path: 'admin/clients', component: ClientsComponent, canActivate: [AuthGuardAdmin] },
  { path: 'new-quote', component: NewQuoteComponent, canActivate: [AuthGuard] },
  { path: 'edit-quote', component: EditQuoteComponent, canActivate: [AuthGuard] },
  { path: 'pending-quote', component: PendingQuoteComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: ClientOrdersComponent, canActivate: [AuthGuard] },
];
