import type { NextPage } from 'next';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from 'src/contexts';

const Home: NextPage = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <div>
      <h6>Egor</h6>
      <Button variant="contained" onClick={() => colorMode.toggleColorMode()}>
        Click jake
      </Button>
    </div>
  );
};

export default Home;
