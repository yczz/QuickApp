import styles from './index.module.less';
import { Layout } from 'antd';
import React from 'react';

const { Header, Footer, Sider, Content } = Layout;

interface AppProps {}

function App(props: AppProps) {
  return (
    <div className={styles.container}>
      <Layout>
        <Sider className={styles.left} width={'48px'}>
          Sider
        </Sider>
        <Layout>
          <Header className={styles.head}>Header</Header>
          <Content className={styles.content}>
            <div className={styles.frame}>
              <div className={styles.body}></div>
            </div>
          </Content>
          <Footer className={styles.footer}>QuickApp ©2022 Created by zhengzhong</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
