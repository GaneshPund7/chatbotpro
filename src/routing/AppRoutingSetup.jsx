import { Navigate, Route, Routes } from 'react-router';
import { DefaultPage, Demo1DarkSidebarPage } from '@/pages/dashboards';


// Admin pages
import { ProfileActivityPage, ProfileBloggerPage, CampaignsCardPage, CampaignsListPage, ProjectColumn2Page, ProjectColumn3Page, ProfileCompanyPage, ProfileCreatorPage, ProfileCRMPage, ProfileDefaultPage, ProfileEmptyPage, ProfileFeedsPage, ProfileGamerPage, ProfileModalPage, ProfileNetworkPage, ProfileNFTPage, ProfilePlainPage, ProfileTeamsPage, ProfileWorksPage } from '@/pages/bot-component';
import { AccountActivityPage, AccountAllowedIPAddressesPage, AccountApiKeysPage, AccountAppearancePage, AccountBackupAndRecoveryPage, AccountBasicPage, AccountCompanyProfilePage, AccountCurrentSessionsPage, AccountDeviceManagementPage, AccountEnterprisePage, AccountGetStartedPage, AccountHistoryPage, AccountImportMembersPage, AccountIntegrationsPage, AccountInviteAFriendPage, AccountMembersStarterPage, AccountNotificationsPage, AccountOverviewPage, AccountPermissionsCheckPage, AccountPermissionsTogglePage, AccountPlansPage, AccountPrivacySettingsPage, AccountRolesPage, AccountSecurityGetStartedPage, AccountSecurityLogPage, AccountSettingsEnterprisePage, AccountSettingsModalPage, AccountSettingsPlainPage, AccountSettingsSidebarPage, AccountTeamInfoPage, AccountTeamMembersPage, AccountTeamsPage, AccountTeamsStarterPage, AccountUserProfilePage } from '@/pages/account';
import { NetworkAppRosterPage, NetworkMarketAuthorsPage, NetworkAuthorPage, NetworkGetStartedPage, NetworkMiniCardsPage, NetworkNFTPage, NetworkSocialPage, NetworkUserCardsTeamCrewPage, NetworkSaasUsersPage, NetworkStoreClientsPage, NetworkUserTableTeamCrewPage, NetworkVisitorsPage } from '@/pages/network';

// super admin pages
import { TenantManagementPage, AllInvoicepage,SubscriptionMangementPage}from '@/pages/SuperAdmin';
import { AuthPage } from '@/auth';

import { RequireAuth } from '@/auth/RequireAuth';
import { Demo1Layout } from '@/layouts/demo1';
import { ErrorsRouting } from '@/errors';
import { AuthenticationWelcomeMessagePage, AuthenticationAccountDeactivatedPage, AuthenticationGetStartedPage } from '@/pages/authentication';
// import { HooksApiPage } from '../pages/Admin/hooks';
import { ProfileChannelContent, ProfileChannelPage } from '../pages/Admin/channel';
import { LeadsPage } from '../pages/Admin/Leads';
const AppRoutingSetup = () => {
  return <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo1Layout />}>
          <Route path="/" element={<DefaultPage />} />

          {/* admin routing */}
          <Route path="/dark-sidebar" element={<Demo1DarkSidebarPage />} />
          <Route path="/Admin/bot-functionality-2" element={<ProfileDefaultPage />} />
          <Route path="/Admin/myBot" element={<ProfileCreatorPage />} />
          <Route path="/Admin/bot-build" element={<ProfileCompanyPage />} />
          <Route path="/Admin/LLM-model-setup" element={<ProfileNFTPage />} />
          <Route path="/Admin/bot-workflow" element={<ProfileBloggerPage />} />
          <Route path="/Admin/crm" element={<ProfileCRMPage />} />
          <Route path="/Admin/bot-functionality-1" element={<ProfileGamerPage />} />
          <Route path="/Admin/personalize" element={<ProfileFeedsPage />} />
          <Route path="/Admin/channel" element={<ProfileChannelPage/>} />
          <Route path="/Admin/knowledge-base-setup" element={<ProfilePlainPage />} />
          {/* <Route path="/Admin/hooks" element={<HooksApiPage />} /> */}
          <Route path="/Admin/knowledgebaseCreate" element={<ProfileModalPage />} />
          <Route path="/Admin/leads" element={<LeadsPage />} />
          <Route path="/Admin/modal" element={<ProfileModalPage />} />


          {/* Super Admin routing */}
          <Route path="/TenantManagementPage" element={<TenantManagementPage />} />
          <Route path="/AllInvoicepage" element={< AllInvoicepage/>} /> 
          <Route path="/SubscriptionMangementPage" element={< SubscriptionMangementPage/>} />
        
        </Route>
      </Route>
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>;
};
export { AppRoutingSetup };