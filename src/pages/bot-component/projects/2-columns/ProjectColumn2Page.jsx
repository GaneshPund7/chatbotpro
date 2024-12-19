import { Fragment } from 'react';
import { Container } from '@/components/container';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/bot-component';
import { Projects } from './blocks';
const ProjectColumn2Page = () => {
  const image = <img src={toAbsoluteUrl('/media/avatars/300-1.png')} className="rounded-full border-3 border-success h-[100px] shrink-0" />;
  return <Fragment>
     
 
      <Container>
        <Projects />
      </Container>
    </Fragment>;
};
export { ProjectColumn2Page };