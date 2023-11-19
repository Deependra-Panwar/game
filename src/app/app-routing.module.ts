import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RulesComponent } from './shared/rules/rules.component';
import { WinComponent } from './pages/win/win.component';
import { MineComponent } from './pages/mine/mine.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BankCardComponent } from './pages/Bank/bank-card/bank-card.component';
import { BalanceComponent } from './pages/wallet/balance/balance.component';
import { DepositComponent } from './pages/wallet/deposit/deposit.component';
import { WithdrawalComponent } from './pages/wallet/withdrawal/withdrawal.component';
import { TransactionHistoryComponent } from './pages/wallet/transaction-history/transaction-history.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GameComponent } from './admin/game/game.component';
import { UserComponent } from './admin/user/user.component';
import { AdminParticipantListComponent } from './admin/admin-participant-list/admin-participant-list.component';
import { RequestApprovalComponent } from './admin/wallet/request-approval/request-approval.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', component:RulesComponent},
  {path:'win', component:WinComponent},
  {path:'mine',component:MineComponent},
  {path:'profile',component: ProfileComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'reset/:token',component:ResetPasswordComponent},
  {path:'bank',component:BankCardComponent},
  {path: 'wallet/balance',component:BalanceComponent},
  {path: 'wallet/deposit',component:DepositComponent},
  {path: 'wallet/withdrawal', component:WithdrawalComponent},
  {path: 'wallet/transactionHistory', component:TransactionHistoryComponent},
  //admin
  {path: 'admin/dashboard', component:DashboardComponent},
  {path: 'admin/game',component:GameComponent},
  {path: 'admin/user',component:UserComponent},
  {path: 'admin/participantlist',component:AdminParticipantListComponent},
  {path:'admin/wallet', component:RequestApprovalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
