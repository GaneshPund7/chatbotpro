import { Fragment } from 'react';
import { Container } from '@/components/container';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/bot-component';
import { ProfileGamerContent } from './ProfileGamerContent';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Link } from 'react-router-dom';
const ProfileGamerPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>
  {currentLayout?.name === 'demo1-layout' && <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <h2><b>Core Functionality</b></h2>
              <ToolbarDescription>Overview of core functionality</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
           
            {/* <Link to="/bot-component/my-bot/bot-workflow" className="btn btn-primary btn-sm text-xs font-medium text-white">
                  Create my bot
                </Link> */}
            </ToolbarActions>
          </Toolbar>
        </Container>}
      <Container>
        <ProfileGamerContent />
      </Container>
    </Fragment>;
};
export { ProfileGamerPage };