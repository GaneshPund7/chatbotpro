import { Fragment } from 'react';
import { Container } from '@/components/container';
import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle } from '@/partials/toolbar';
import { useLayout } from '@/providers';
import { Link } from 'react-router-dom';
// import { ChatbotContent } from '.';
import { ChatbotContent } from './chatbotcontent';
const ChatbotPage = () => {
  const {
    currentLayout
  } = useLayout();
  return <Fragment>

        {currentLayout?.name === 'demo1-layout' && <Container>
              <Toolbar>
                <ToolbarHeading>
                  {/* <ToolbarPageTitle /> */}
                  <h2><b>Chatbot</b></h2>
                  <ToolbarDescription>Overview of ChatBot</ToolbarDescription>
                </ToolbarHeading>
                <ToolbarActions>
       
                </ToolbarActions>
              </Toolbar>
            </Container>}
    
      <Container>
        <ChatbotContent />
      </Container>
    </Fragment>;
};
export { ChatbotPage };