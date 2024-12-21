import { Navigate, Route, Routes } from 'react-router';
import { DefaultPage, Demo1DarkSidebarPage } from '@/pages/dashboards';
import { ProfileActivityPage, ProfileBloggerPage, CampaignsCardPage, CampaignsListPage, ProjectColumn2Page, ProjectColumn3Page, ProfileCompanyPage, ProfileCreatorPage, ProfileCRMPage, ProfileDefaultPage, ProfileEmptyPage, ProfileFeedsPage, ProfileGamerPage, ProfileModalPage, ProfileNetworkPage, ProfileNFTPage, ProfilePlainPage, ProfileTeamsPage, ProfileWorksPage } from '@/pages/bot-component';
import { AccountActivityPage, AccountAllowedIPAddressesPage, AccountApiKeysPage, AccountAppearancePage, AccountBackupAndRecoveryPage, AccountBasicPage, AccountCompanyProfilePage, AccountCurrentSessionsPage, AccountDeviceManagementPage, AccountEnterprisePage, AccountGetStartedPage, AccountHistoryPage, AccountImportMembersPage, AccountIntegrationsPage, AccountInviteAFriendPage, AccountMembersStarterPage, AccountNotificationsPage, AccountOverviewPage, AccountPermissionsCheckPage, AccountPermissionsTogglePage, AccountPlansPage, AccountPrivacySettingsPage, AccountRolesPage, AccountSecurityGetStartedPage, AccountSecurityLogPage, AccountSettingsEnterprisePage, AccountSettingsModalPage, AccountSettingsPlainPage, AccountSettingsSidebarPage, AccountTeamInfoPage, AccountTeamMembersPage, AccountTeamsPage, AccountTeamsStarterPage, AccountUserProfilePage } from '@/pages/account';
import { NetworkAppRosterPage, NetworkMarketAuthorsPage, NetworkAuthorPage, NetworkGetStartedPage, NetworkMiniCardsPage, NetworkNFTPage, NetworkSocialPage, NetworkUserCardsTeamCrewPage, NetworkSaasUsersPage, NetworkStoreClientsPage, NetworkUserTableTeamCrewPage, NetworkVisitorsPage } from '@/pages/network';
import { AuthPage } from '@/auth';
import { RequireAuth } from '@/auth/RequireAuth';
import { Demo1Layout } from '@/layouts/demo1';
import { ErrorsRouting } from '@/errors';
import { AuthenticationWelcomeMessagePage, AuthenticationAccountDeactivatedPage, AuthenticationGetStartedPage } from '@/pages/authentication';
// import { HooksApiPage } from '../pages/public-profile/my-bot/hooks';
import { ProfileChannelContent, ProfileChannelPage } from '../pages/bot-component/my-bot/channel';
import { LeadsPage } from '../pages/bot-component/my-bot/Leads';
const AppRoutingSetup = () => {
  return <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo1Layout />}>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/dark-sidebar" element={<Demo1DarkSidebarPage />} />
          <Route path="/bot-component/my-bot/bot-functionality-2" element={<ProfileDefaultPage />} />
          <Route path="/bot-component/my-bot/myBot" element={<ProfileCreatorPage />} />
          <Route path="/bot-component/my-bot/bot-build" element={<ProfileCompanyPage />} />
          <Route path="/bot-component/my-bot/LLM-model-setup" element={<ProfileNFTPage />} />
          <Route path="/bot-component/my-bot/bot-workflow" element={<ProfileBloggerPage />} />
          <Route path="/bot-component/my-bot/crm" element={<ProfileCRMPage />} />
          <Route path="/bot-component/my-bot/bot-functionality-1" element={<ProfileGamerPage />} />
          <Route path="/bot-component/my-bot/personalize" element={<ProfileFeedsPage />} />
          <Route path="/bot-component/my-bot/channel" element={<ProfileChannelPage/>} />
          <Route path="/bot-component/my-bot/knowledge-base-setup" element={<ProfilePlainPage />} />
          {/* <Route path="/bot-component/my-bot/hooks" element={<HooksApiPage />} /> */}
          <Route path="/bot-component/my-bot/leads" element={<LeadsPage />} />
          <Route path="/bot-component/my-bot/modal" element={<ProfileModalPage />} />
          <Route path="/bot-component/projects/3-columns" element={<ProjectColumn3Page />} />
          <Route path="/bot-component/projects/2-columns" element={<ProjectColumn2Page />} />
          <Route path="/bot-component/works" element={<ProfileWorksPage />} />
          <Route path="/bot-component/teams" element={<ProfileTeamsPage />} />
          <Route path="/bot-component/network" element={<ProfileNetworkPage />} />
          <Route path="/bot-component/activity" element={<ProfileActivityPage />} />
          <Route path="/bot-component/campaigns/card" element={<CampaignsCardPage />} />
          <Route path="/bot-component/campaigns/list" element={<CampaignsListPage />} />
          <Route path="/bot-component/empty" element={<ProfileEmptyPage />} />
          <Route path="/account/home/get-started" element={<AccountGetStartedPage />} />
          <Route path="/account/home/user-profile" element={<AccountUserProfilePage />} />
          <Route path="/account/home/company-profile" element={<AccountCompanyProfilePage />} />
          <Route path="/account/home/settings-sidebar" element={<AccountSettingsSidebarPage />} />
          <Route path="/account/home/settings-enterprise" element={<AccountSettingsEnterprisePage />} />
          <Route path="/account/home/settings-plain" element={<AccountSettingsPlainPage />} />
          <Route path="/account/home/settings-modal" element={<AccountSettingsModalPage />} />
          <Route path="/account/billing/basic" element={<AccountBasicPage />} />
          <Route path="/account/billing/enterprise" element={<AccountEnterprisePage />} />
          <Route path="/account/billing/plans" element={<AccountPlansPage />} />
          <Route path="/account/billing/history" element={<AccountHistoryPage />} />
          <Route path="/account/security/get-started" element={<AccountSecurityGetStartedPage />} />
          <Route path="/account/security/overview" element={<AccountOverviewPage />} />
          <Route path="/account/security/allowed-ip-addresses" element={<AccountAllowedIPAddressesPage />} />
          <Route path="/account/security/privacy-settings" element={<AccountPrivacySettingsPage />} />
          <Route path="/account/security/device-management" element={<AccountDeviceManagementPage />} />
          <Route path="/account/security/backup-and-recovery" element={<AccountBackupAndRecoveryPage />} />
          <Route path="/account/security/current-sessions" element={<AccountCurrentSessionsPage />} />
          <Route path="/account/security/security-log" element={<AccountSecurityLogPage />} />
          <Route path="/account/members/team-starter" element={<AccountTeamsStarterPage />} />
          <Route path="/account/members/teams" element={<AccountTeamsPage />} />
          <Route path="/account/members/team-info" element={<AccountTeamInfoPage />} />
          <Route path="/account/members/members-starter" element={<AccountMembersStarterPage />} />
          <Route path="/account/members/team-members" element={<AccountTeamMembersPage />} />
          <Route path="/account/members/import-members" element={<AccountImportMembersPage />} />
          <Route path="/account/members/roles" element={<AccountRolesPage />} />
          <Route path="/account/members/permissions-toggle" element={<AccountPermissionsTogglePage />} />
          <Route path="/account/members/permissions-check" element={<AccountPermissionsCheckPage />} />
          <Route path="/account/integrations" element={<AccountIntegrationsPage />} />
          <Route path="/account/notifications" element={<AccountNotificationsPage />} />
          <Route path="/account/api-keys" element={<AccountApiKeysPage />} />
          <Route path="/account/appearance" element={<AccountAppearancePage />} />
          <Route path="/account/invite-a-friend" element={<AccountInviteAFriendPage />} />
          <Route path="/account/activity" element={<AccountActivityPage />} />
          <Route path="/network/get-started" element={<NetworkGetStartedPage />} />
          <Route path="/network/user-cards/mini-cards" element={<NetworkMiniCardsPage />} />
          <Route path="/network/user-cards/team-crew" element={<NetworkUserCardsTeamCrewPage />} />
          <Route path="/network/user-cards/author" element={<NetworkAuthorPage />} />
          <Route path="/network/user-cards/nft" element={<NetworkNFTPage />} />
          <Route path="/network/user-cards/social" element={<NetworkSocialPage />} />
          <Route path="/network/user-table/team-crew" element={<NetworkUserTableTeamCrewPage />} />
          <Route path="/network/user-table/app-roster" element={<NetworkAppRosterPage />} />
          <Route path="/network/user-table/market-authors" element={<NetworkMarketAuthorsPage />} />
          <Route path="/network/user-table/saas-users" element={<NetworkSaasUsersPage />} />
          <Route path="/network/user-table/store-clients" element={<NetworkStoreClientsPage />} />
          <Route path="/network/user-table/visitors" element={<NetworkVisitorsPage />} />
          <Route path="/auth/welcome-message" element={<AuthenticationWelcomeMessagePage />} />
          <Route path="/auth/account-deactivated" element={<AuthenticationAccountDeactivatedPage />} />
          <Route path="/authentication/get-started" element={<AuthenticationGetStartedPage />} />
        </Route>
      </Route>
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>;
};
export { AppRoutingSetup };