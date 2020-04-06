import React from 'react'
import { StatusBar, YellowBox } from 'react-native'

YellowBox.ignoreWarnings(['Unrecognized WebSocket connection']);

import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Routes />
    </>
  );
}

/**
 * o StatusBar pode ser configurado aqui para toda aplicação ou
 * em cada pagina separadamente. Ela muda o estilo da barra de
 * notificacoes dos celulares
 */