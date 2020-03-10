import React from 'react';
import { Container, Button, Card } from 'reactstrap';
import PageHeader from '@availity/page-header';
import Spaces from '@availity/spaces';
import BlockUi from 'react-block-ui';
import { Footer, MemberInfo, SearchForm } from '@/components';
import { useAppStore, useQueryParams } from '@/hooks';
import MainView from './register/MainView';

const App = () => {
  const queryParams = useQueryParams();

  const { clearMemberInfo, hasMemberInfo, loading } = useAppStore(store => ({
    clearMemberInfo: () => store.setMemberInfo(),
    hasMemberInfo: store.hasMemberInfo,
    loading: store.loading,
  }));

  return (
    <Container data-testid="sso-container" className="container-sm">
      <Spaces spaceIds={[queryParams.spaceId]} clientId="test">
        <PageHeader appName="Member Viewer" spaceId={queryParams.spaceId} />
        <Card Body>
          <MainView />
        </Card>

        <BlockUi blocking={loading}>
          {!hasMemberInfo ? (
            <SearchForm />
          ) : (
            <>
              <MemberInfo />
              <div className="d-flex justify-content-end">
                <Button className="mt-3" onClick={clearMemberInfo} color="primary">
                  Go Back
                </Button>
              </div>
            </>
          )}
        </BlockUi>
      </Spaces>
      <Footer />
    </Container>
  );
};

export default App;
