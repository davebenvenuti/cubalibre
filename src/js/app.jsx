import React, { useReducer, useState } from 'react';

import {
  get,
  getOr
} from 'lodash/fp';

import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core';

import FactionsMenu from './factions-menu';

import { FACTIONS } from './factions';

import { If } from './util';

import Government, { ID as GOVERNMENT_ID } from './government';
import July26, { ID as JULY26_ID } from './july26';
import Directorio, { ID as DIRECTORIO_ID } from './directorio';
import Syndicate, { ID as SYNDICATE_ID } from './syndicate';

export default function App() {
  const [currentFaction, setCurrentFaction] = useState(FACTIONS[0]);

  return (
    <Container maxWidth="md">
      <FactionsMenu currentFaction={currentFaction} onChange={setCurrentFaction} />

      <If condition={currentFaction.id == GOVERNMENT_ID}>
        <Government />
      </If>

      <If condition={currentFaction.id == JULY26_ID}>
        <July26 />
      </If>

      <If condition={currentFaction.id == DIRECTORIO_ID}>
        <Directorio />
      </If>

      <If condition={currentFaction.id == SYNDICATE_ID}>
        <Syndicate />
      </If>
    </Container>
 );
}
