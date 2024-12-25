import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/utils/Assets';
import { Container } from '@/components/container';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { PageMenu } from '@/pages/bot-component';
import { ProfileFeedsContent } from '.';
import { Link } from 'react-router-dom';
const ProfileFeedsPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>
  {currentLayout?.name === 'demo1-layout' && <Container>
          <Toolbar>
            <ToolbarHeading>
              {/* <ToolbarPageTitle /> */}
              <h2><b>Personalize Your Bot</b></h2>
              <ToolbarDescription>Overview of new bot </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
           
            {/* <Link to="/Admin/bot-functionality-1" className="btn btn-primary btn-sm text-xs font-medium text-white">
                  Create my bot
                </Link> */}
            </ToolbarActions>
          </Toolbar>
        </Container>}
      <Container>
        <ProfileFeedsContent />
      </Container>
    </Fragment>;
};
export { ProfileFeedsPage };