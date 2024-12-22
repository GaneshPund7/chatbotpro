import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';
import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { ProfileCreatorContent } from './ProfileCreatorContent';
import { Link } from 'react-router-dom';
const ProfileCreatorPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>
          {currentLayout?.name === 'demo1-layout' && <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription>Overview of all bots</ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
           
            <Link to="/bot-component/my-bot/bot-workflow" className="btn btn-primary btn-sm text-xs font-medium text-white">
                  Create my bot
                </Link>
            </ToolbarActions>
          </Toolbar>
        </Container>}
 
      <Container>
        <ProfileCreatorContent />
      </Container>
    </Fragment>;
};
export { ProfileCreatorPage };