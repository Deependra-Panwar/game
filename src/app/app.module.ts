import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
//Material File
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { RegisterComponent } from './pages/register/register.component';
import { RulesDialogComponent } from './shared/rules-dialog/rules-dialog.component';
import { WinComponent } from './pages/win/win.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './shared/header/header.component';
import { MineComponent } from './pages/mine/mine.component';
import { provideHttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule, } from 'ngx-toastr';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoadingService } from './services/loading.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { TakeAmmountComponent } from './components/take-ammount/take-ammount.component';
import { GameIdService } from './services/forntend-services/gameId.service';
import { ProfileComponent } from './pages/profile/profile.component';
import { BankCardComponent } from './pages/Bank/bank-card/bank-card.component';
import { BankDialogComponent } from './pages/Bank/bank-dialog/bank-dialog.component';
import { BalanceComponent } from './pages/wallet/balance/balance.component';
import { DepositComponent } from './pages/wallet/deposit/deposit.component';
import { WithdrawalComponent } from './pages/wallet/withdrawal/withdrawal.component';
import { TransactionHistoryComponent } from './pages/wallet/transaction-history/transaction-history.component';
import { ComplaintComponent } from './complaint/complaint.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RulesDialogComponent,
    WinComponent,
    HeaderComponent,
    MineComponent,
    LoaderComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    TakeAmmountComponent,
    ProfileComponent,
    BankCardComponent,
    BankDialogComponent,
    BalanceComponent,
    DepositComponent,
    WithdrawalComponent,
    TransactionHistoryComponent,
    ComplaintComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTableModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideHttpClient(),
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    GameIdService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
