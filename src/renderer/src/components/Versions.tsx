import { useState } from 'react';
import styles from '../assets/index.module.less';

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions);

  return (
    <ul className={styles.versions}>
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.electron}</li>
      <li className="v8-version">V8 v{versions.node}</li>
    </ul>
  );
}

export default Versions;
