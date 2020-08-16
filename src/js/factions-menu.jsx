import React, { useState, useRef } from 'react';

import {
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core';

import {
  map,
  find
} from 'lodash/fp';

import { FACTIONS } from './factions';

export default function FactionsMenu({ onChange, currentFaction }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const header = useRef(null);

  const showMenu = () => setMenuOpen(true);
  const hideMenu = () => setMenuOpen(false);

  const handleSelect = (e) => {
    const id = e.target.attributes["data-id"].value;

    hideMenu();

    onChange(find({ id })(FACTIONS));
  };

  return (
    <div>
      <Typography variant="h1" onClick={showMenu} ref={header} style={{ cursor: "pointer" }}>
        {currentFaction.name}
      </Typography>
      <Menu open={menuOpen} anchorEl={header.current}>
        {map(({ id, name }) => (
          <MenuItem key={id} onClick={handleSelect} data-id={id}>
            {name}
          </MenuItem>
        ))(FACTIONS)}
      </Menu>
    </div>
  );
}
