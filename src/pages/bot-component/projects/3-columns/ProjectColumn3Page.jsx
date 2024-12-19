import { Fragment } from 'react';
import { Container } from '@/components/container';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/bot-component';
import { Projects2 } from './blocks';
// import { Webhook } from 'lucide-react';
const ProjectColumn3Page = () => {
  return <Fragment>
      <Container>
        <Projects2 />
        {/* <Webhook /> */}
      </Container>
    </Fragment>;
};
export { ProjectColumn3Page };