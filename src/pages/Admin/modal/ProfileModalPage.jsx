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
import { ProfileModalContent } from '.';
const ProfileModalPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>
    <Container>
        {currentLayout?.name === 'demo1-layout' && <Container>
                <Toolbar>
                  <ToolbarHeading>
                    <ToolbarPageTitle />
                    <ToolbarDescription>Overview of knowledge Base</ToolbarDescription>
                  </ToolbarHeading>
                  <ToolbarActions>
                 
                  {/* <Link to="/Admin/knowledgebaseCreate" className="btn btn-primary btn-sm text-xs font-medium text-white">
                        Create my bot
                      </Link> */}
                  </ToolbarActions>
                </Toolbar>
              </Container>}
    </Container>
      <Container>
      <ProfileModalContent />
      </Container>
    </Fragment>;
};
export { ProfileModalPage };