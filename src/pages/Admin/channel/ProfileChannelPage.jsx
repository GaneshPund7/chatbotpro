import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/utils/Assets';
import { Container } from '@/components/container';
import { KeenIcon } from '@/components';
import { UserProfileHero } from '@/partials/heros';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { PageMenu } from '@/pages/bot-component';
import { ProfileChannelContent } from '.';
const ProfileChannelPage = () => {
  const image = <img src={toAbsoluteUrl('/media/avatars/300-1.png')} className="rounded-full border-3 border-success size-[100px] shrink-0" />;
  return <Fragment>

      <Container>
        <ProfileChannelContent />
      </Container>
    </Fragment>;
};
export { ProfileChannelPage };