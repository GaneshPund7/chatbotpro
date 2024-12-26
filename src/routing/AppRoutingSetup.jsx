import { Navigate, Route, Routes } from 'react-router';
import { DefaultPage, Demo1DarkSidebarPage } from '@/pages/dashboards';


// Admin pages
import {   ProfileBloggerPage, ProfileCompanyPage, ProfileCreatorPage, ProfileCRMPage, ProfileDefaultPage, ProfileEmptyPage, ProfileFeedsPage, ProfileGamerPage, ProfileModalPage, ProfileNFTPage, ProfilePlainPage, } from '@/pages/bot-component';
import { ChatbotPage } from '../pages/Admin/chatbot';

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
          <Route path="/Admin/chatbot" element={<ChatbotPage />} /> 


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