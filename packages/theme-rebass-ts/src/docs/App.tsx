import * as React from 'react';
import * as logo from './logo.svg';

import styled, { ThemeProvider, keyframes } from 'styled-components';
import parseStyles from './iopa-dxs/parseLibrary';
import parseExamples from './iopa-dxs/parseExamples';
import parseMeta from './iopa-dxs/parseMeta';

import * as theme from '../lib/theme.json';
// import * as styles from '../lib/styles.json';
import styles from '../'; 

// import { fontFamily, space, width, fontSize, color } from 'styled-system'
import system from 'system-components'

import { Flex, Box } from 'grid-styled';

var Center = styled.div`
text-align: center;
`

var Header = styled.div`
background-color: #282c34;
min-height: 20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const library = parseStyles(styles, { external: { Flex, Box }});
const meta = parseMeta(styles);
const examples = parseExamples(styles, library);

function StyleCatalogItem(key) {

  let Example = examples[key];

  const H2 = system({ is: 'h2', m: 0, fontSize: 3, fontFamily: 'serif' })
  const H6 = system({ is: 'h6', m: 0, mb:2, fontSize: 2, fontFamily: 'sans' })

  return (
    <Box key={key} width={[0.9, 1 / 2, 0.23]} p={2} m={2}  mx="auto"  bg="#f9f9f9" >
      <H2>{meta[key].name}</H2>
      <H6>{meta[key].description}&nbsp;</H6>
      <Flex><Box width={1} height={170}><Example /></Box></Flex>
    </Box>
  )
}

function Styles() {

  var styleItems = Object.keys(meta).map(function (key) {
    return StyleCatalogItem(key);
  });

  return <Flex flexWrap="wrap">{styleItems}</Flex>;
}

var Logo = styled.img`
animation: ${rotate360} infinite 20s linear;
height: 40vmin;`

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Center>
            <Header>
              <Logo src={logo} alt="logo" />
              <p>
                Edit <code>src/elements/*</code> and <code>src/lib/theme.json</code> and save to reload.
          </p>
            </Header>
          </Center>
          <Styles />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
