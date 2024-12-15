import { Fragment } from 'react';
import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { PageNavbar } from '@/pages/account';
import { AccountHistoryContent } from '.';
import { useLayout } from '@/providers';
const AccountHistoryPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>
      <PageNavbar />

      {currentLayout?.name === 'demo1-layout' && <Container>
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle />
              <ToolbarDescription></ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <a href="#" className="btn btn-sm btn-light">
                
              </a>
            </ToolbarActions>
          </Toolbar>
        </Container>}

      <Container>
        <AccountHistoryContent />
      </Container>
    </Fragment>;
};
export { AccountHistoryPage };