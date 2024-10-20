import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { RestPasswordView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Reset password - ${CONFIG.appName}`}</title>
      </Helmet>

      <RestPasswordView />
    </>
  );
}
