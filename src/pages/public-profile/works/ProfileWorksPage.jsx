import { Fragment } from 'react';
import { Container } from '@/components/container';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/public-profile';
import { Works } from './blocks';
import { Button } from 'reactstrap';
const ProfileWorksPage = () => {
  const image = <img src={toAbsoluteUrl('/media/avatars/300-1.png')} className="rounded-full border-3 border-success h-[100px] shrink-0" />;
  return <Fragment>
 
 {/* <a href="#" className="btn btn-sm btn-primary">Create New</a> */}

      {/* <Container>
        <Navbar>
          <PageMenu />
          <NavbarActions>
            <button type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="users" /> Connect
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown />
          </NavbarActions>
        </Navbar>
      </Container> */}

      <Container>
        <Works />
      </Container>
    </Fragment>;
};
export { ProfileWorksPage };