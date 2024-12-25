import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { Container } from '@/components/container';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/bot-component';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Link } from 'react-router-dom';
import { ProfileDefaultContent } from '.';
const ProfileDefaultPage = () => {
  const {
    currentLayout
  } = useLayout();
  const image = <img src={toAbsoluteUrl('/media/avatars/300-1.png')} className="rounded-full border-3 border-success size-[100px] shrink-0" />;
  return <Fragment>
      {currentLayout?.name === 'demo1-layout' && <Container>
              <Toolbar>
                <ToolbarHeading>
                  <ToolbarPageTitle />
                  <h2><b>Chatbot Builder Detail Questions</b></h2>
                  <ToolbarDescription>Overview of chatbot builder details</ToolbarDescription>
                </ToolbarHeading>
                <ToolbarActions>
               
                {/* <Link to="/Admin/bot-workflow" className="btn btn-primary btn-sm text-xs font-medium text-white">
                      Create my bot
                    </Link> */}
                </ToolbarActions>
              </Toolbar>
            </Container>}
    <Container>

    </Container>
       
            <Container>
        <ProfileDefaultContent />
      </Container>
    </Fragment>;
};
export { ProfileDefaultPage };