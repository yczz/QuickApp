import styles from './index.module.less';
import { Layout, Space, Input, Button } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';
import cn from 'classnames';

const { Header, Footer, Sider, Content } = Layout;
const IconFont = createFromIconfontCN({
  scriptUrl: ['/src/assets/iconfont.js']
});

interface AppProps {}

function App(props: AppProps) {
  return (
    <div className={styles.container}>
      <Layout>
        <Header className={styles.head}>
          <div className={styles.headLeft}>
            <IconFont type="icon-quickapp-apple" />
          </div>
          <div className={styles.headCenter}>
            <Space size={'small'}>
              <div className={cn(styles.headIcon, styles.selected)}>
                <IconFont type="icon-quickapp-computer" />
              </div>
              <div className={styles.headIcon}>
                <IconFont type="icon-quickapp-pad" />
              </div>
              <div className={styles.headIcon}>
                <IconFont type="icon-quickapp-Mobile-" />
              </div>
              <div className={styles.headForm}>
                <Input size={'small'} addonAfter="px" style={{ width: '100px' }} />
              </div>
            </Space>
            <div style={{ marginLeft: '40px' }}>
              <Space size={'small'}>
                <div className={styles.headIcon}>
                  <IconFont type="icon-quickapp-hotui" />
                </div>
                <div className={styles.headIcon}>
                  <IconFont type="icon-quickapp-qianjin" />
                </div>
              </Space>
            </div>
          </div>
          <div className={styles.headRight}>
            <Space size={'small'}>
              <Button size={'middle'} type={'primary'}>
                保存
              </Button>
              <Button size={'middle'}>预览</Button>
            </Space>
          </div>
        </Header>
        <Layout>
          <div className={styles.left}>
            <div className={styles.toolbar}>
              <div className={styles.toolbarContent}>
                <div className={styles.leftStart}>
                  <Space size={'middle'} direction={'vertical'}>
                    <div className={styles.leftIcon}>
                      <IconFont type="icon-quickapp-xiangmu" />
                    </div>
                    <div className={styles.leftIcon}>
                      <IconFont type="icon-quickapp-jiegousheji" />
                    </div>
                    <div className={styles.leftIcon}>
                      <IconFont type="icon-quickapp-zujian" />
                    </div>
                  </Space>
                </div>
                <div className={styles.leftEnd}>
                  <Space size={'middle'} direction={'vertical'}>
                    <div className={styles.leftIcon}>
                      <IconFont type="icon-quickapp-yonghuxieyi" />
                    </div>
                  </Space>
                </div>
              </div>
              <div className={styles.toolbarStaticPanel}>111</div>
              <div></div>
            </div>
          </div>
          <Content className={styles.content}>
            <div className={styles.frame}>
              <div className={styles.body}></div>
            </div>
            <div className={styles.footer}>QuickApp ©2022 Created by zhengzhong</div>
          </Content>
          <Sider className={styles.right} width={'300px'}>
            请选择节点
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
