import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Menu, Search } from './styles';
import {
  MdMenu,
  MdHome,
  MdTimelapse,
  MdBook,
  MdSearch,
  MdClear,
  MdGraphicEq
} from 'react-icons/md';
import NatsuKanji from '../../assets/images/natsu_kanji.svg';

function Header() {
  const [query, setQuery] = useState('');
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [searchVisibility, setSearchVisibility] = useState(false);

  function closeAll() {
    setMenuVisibility(false);
    setSearchVisibility(false);
  }
  function toggleMenu() {
    setMenuVisibility(!menuVisibility);
    setSearchVisibility(false);
  }
  function toggleSearchBar() {
    setSearchVisibility(!searchVisibility);
    setMenuVisibility(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    closeAll();
    window.location.assign(`/busca/${query}`);
  }

  return (
    <Container>
      <div className='brand'>
        <img src={NatsuKanji} alt='Kanji japonês para verão.' height='20px' />
        <Link to='/'>Natsu</Link>
      </div>

      <div id='panthom'></div>

      <MdSearch size='30px' onClick={() => toggleSearchBar()} />
      <MdMenu size='30px' onClick={() => toggleMenu()} />

      <Menu visibility={menuVisibility.toString()}>
        <div className='link'>
          <MdHome size='14pt' />
          <Link to='/' onClick={closeAll}>
            Início
          </Link>
        </div>

        <div className='link'>
          <MdTimelapse size='14pt' />
          <Link to='/lancamentos' onClick={closeAll}>
            Lançamentos
          </Link>
        </div>

        <div className='link'>
          <MdBook size='14pt' />
          <Link to='/hoje' onClick={closeAll}>
            Hoje
          </Link>
        </div>

        <div className='link'>
          <MdGraphicEq size='14pt' />
          <Link to='/random' onClick={closeAll}>
            Aleatórios
          </Link>
        </div>
      </Menu>

      <Search visibility={searchVisibility.toString()}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Pesquisa...'
            onChange={e => setQuery(e.target.value)}
          />
        </form>
        <MdClear size='30px' onClick={() => toggleSearchBar()} />
      </Search>
    </Container>
  );
}

export default Header;
