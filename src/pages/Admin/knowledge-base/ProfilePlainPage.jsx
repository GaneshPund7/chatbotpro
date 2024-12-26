import { Fragment } from 'react';
import { Container } from '@/components/container';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/bot-component';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Link } from 'react-router-dom';
import { ProfilePlainContent } from '.';
const ProfilePlainPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>
        {currentLayout?.name === 'demo1-layout' && <Container>
          <Toolbar>
            <ToolbarHeading>
              {/* <ToolbarPageTitle /> */}
              <h2><b>Knowledge</b></h2>
              <ToolbarDescription>Overview of all bots</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
           
            <Link to="/Admin/knowledgebaseCreate" className="btn btn-primary btn-sm text-xs font-medium text-white">
                  Create new Knowledge 
                </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>}
      <Container>
       
        <ProfilePlainContent />
      </Container>
    </Fragment>;
};
export { ProfilePlainPage };